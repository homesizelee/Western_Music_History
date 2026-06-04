# 復習クイズ用ウェブページ

## 必要なファイル

同じフォルダに以下を置く。

- index.html
- style.css
- script.js
- questions.js
- convert_xlsx_to_js.py
- question_bank_truefalse.xlsx
- question_bank.xlsx

## Excel 題庫の形式

### question_bank_truefalse.xlsx

列名は必ず以下の通りにする。

| 出題範囲 | 問題文 | 正解 |

正解欄には、○ または × を入れる。

### question_bank.xlsx

列名は必ず以下の通りにする。

| 範囲 | 問題 | 正解 | 誤答1 | 誤答2 | 誤答3 |

## questions.js の作成方法

ターミナルでこのフォルダに移動して、以下を実行する。

```bash
python3 -m pip install pandas openpyxl
python3 convert_xlsx_to_js.py
```

成功すると questions.js が自動生成される。

## ローカルで確認する方法

index.html をダブルクリックしてブラウザで開く。

## GitHub Pages に公開する方法

1. GitHub で新しい repository を作る。
2. このフォルダの中身をアップロードする。
3. repository の Settings を開く。
4. Pages を開く。
5. Branch を main、folder を /root にする。
6. Save を押す。
7. 数分後に表示される URL を学生に共有する。
