import json
from pathlib import Path

import pandas as pd


TRUE_FALSE_XLSX = "question_bank_truefalse.xlsx"
MULTIPLE_XLSX = "question_bank.xlsx"
OUTPUT_JS = "questions.js"


def clean_cell(value):
    """Excel の空欄や余分な空白を整理する。"""
    if pd.isna(value):
        return ""
    return str(value).strip()


def normalize_truefalse_answer(value):
    """正解欄の表記ゆれを ○ / × にそろえる。"""
    text = clean_cell(value)

    true_values = {"○", "〇", "丸", "マル", "まる", "true", "True", "TRUE", "o", "O"}
    false_values = {"×", "✕", "バツ", "ばつ", "false", "False", "FALSE", "x", "X"}

    if text in true_values:
        return "○"
    if text in false_values:
        return "×"

    raise ValueError(f"マルバツ問題の正解欄に不明な値があります: {text}")


def load_truefalse_questions(path):
    df = pd.read_excel(path)
    required_columns = ["出題範囲", "問題文", "正解"]

    for column in required_columns:
        if column not in df.columns:
            raise ValueError(f"{path} に「{column}」列がありません。")

    questions = []

    for row_number, row in df.iterrows():
        question_text = clean_cell(row["問題文"])
        if not question_text:
            continue

        answer = normalize_truefalse_answer(row["正解"])

        questions.append({
            "range": clean_cell(row["出題範囲"]),
            "question": question_text,
            "answer": answer
        })

    return questions


def load_multiple_choice_questions(path):
    df = pd.read_excel(path)
    required_columns = ["範囲", "問題", "正解", "誤答1", "誤答2", "誤答3"]

    for column in required_columns:
        if column not in df.columns:
            raise ValueError(f"{path} に「{column}」列がありません。")

    questions = []

    for row_number, row in df.iterrows():
        question_text = clean_cell(row["問題"])
        if not question_text:
            continue

        correct = clean_cell(row["正解"])
        wrong1 = clean_cell(row["誤答1"])
        wrong2 = clean_cell(row["誤答2"])
        wrong3 = clean_cell(row["誤答3"])

        choices = [correct, wrong1, wrong2, wrong3]

        if any(choice == "" for choice in choices):
            raise ValueError(
                f"{path} の {row_number + 2} 行目に空欄の選択肢があります。"
            )

        if len(set(choices)) != 4:
            raise ValueError(
                f"{path} の {row_number + 2} 行目で、選択肢が重複しています。"
            )

        questions.append({
            "range": clean_cell(row["範囲"]),
            "question": question_text,
            "choices": choices,
            "answer": correct
        })

    return questions


def main():
    true_false_path = Path(TRUE_FALSE_XLSX)
    multiple_path = Path(MULTIPLE_XLSX)

    if not true_false_path.exists():
        raise FileNotFoundError(f"{TRUE_FALSE_XLSX} が見つかりません。")

    if not multiple_path.exists():
        raise FileNotFoundError(f"{MULTIPLE_XLSX} が見つかりません。")

    true_false_questions = load_truefalse_questions(true_false_path)
    multiple_choice_questions = load_multiple_choice_questions(multiple_path)

    js_text = ""
    js_text += "const trueFalseQuestions = "
    js_text += json.dumps(true_false_questions, ensure_ascii=False, indent=2)
    js_text += ";\n\n"
    js_text += "const multipleChoiceQuestions = "
    js_text += json.dumps(multiple_choice_questions, ensure_ascii=False, indent=2)
    js_text += ";\n"

    Path(OUTPUT_JS).write_text(js_text, encoding="utf-8")

    print(f"{OUTPUT_JS} を作成しました。")
    print(f"マルバツ問題: {len(true_false_questions)} 問")
    print(f"選択式問題: {len(multiple_choice_questions)} 問")


if __name__ == "__main__":
    main()
