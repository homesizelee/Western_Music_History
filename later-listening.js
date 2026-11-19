// 後期の音源リスト（第1〜7回）。
// Naxosの指定時刻は再生後に手動で移動してください。
const laterListeningItems = [
  {
    "session": "第1回 バロック期の音楽（4）：17世紀後半の動向と18世紀への展開",
    "title": "《ジューリオ・チェーザレ》全曲（クレモネシ版、2004年）",
    "composer": "アントニオ・サルトリオ（Antonio Sartorio）",
    "date": "1676年",
    "url": "https://www.youtube.com/watch?v=iNXNdI-usmA"
  },
  {
    "session": "第1回 バロック期の音楽（4）：17世紀後半の動向と18世紀への展開",
    "title": "《私の涙》（Lagrime mie）",
    "composer": "バルバラ・ストロッツィ（Barbara Strozzi）",
    "date": "1650年代",
    "url": "https://ml.naxos.jp/work/11529949"
  },
  {
    "session": "第1回 バロック期の音楽（4）：17世紀後半の動向と18世紀への展開",
    "title": "《愛らしく美しいクローリ》レチタティーヴォ〈苦しみながら生きている〉（Vivo penando）",
    "composer": "アレッサンドロ・スカルラッティ（Alessandro Scarlatti）",
    "date": "1690〜1710年頃",
    "url": "https://ml.naxos.jp/track/6073756"
  },
  {
    "session": "第1回 バロック期の音楽（4）：17世紀後半の動向と18世紀への展開",
    "title": "《愛らしく美しいクローリ》アリア〈そう、そう、愛しい人よ〉（Sì, sì, ben mio）",
    "composer": "アレッサンドロ・スカルラッティ（Alessandro Scarlatti）",
    "date": "1690〜1710年頃",
    "url": "https://ml.naxos.jp/track/6073757"
  },
  {
    "session": "第1回 バロック期の音楽（4）：17世紀後半の動向と18世紀への展開",
    "title": "《トリオ・ソナタ ニ長調》Op. 3 No. 2 第1楽章〈Grave〉",
    "composer": "アルカンジェロ・コレッリ（Arcangelo Corelli）",
    "date": "",
    "url": "https://ml.naxos.jp/track/6438252"
  },
  {
    "session": "第1回 バロック期の音楽（4）：17世紀後半の動向と18世紀への展開",
    "title": "《合奏協奏曲ト短調「クリスマス協奏曲」》Op. 6 No. 8〈Allegro. “Largo.” Pastorale〉（全体）",
    "composer": "アルカンジェロ・コレッリ（Arcangelo Corelli）",
    "date": "",
    "url": "https://ml.naxos.jp/track/6169427"
  },
  {
    "session": "第1回 バロック期の音楽（4）：17世紀後半の動向と18世紀への展開",
    "title": "《合奏協奏曲ト短調「クリスマス協奏曲」》Op. 6 No. 8〈Allegro. “Largo.” Pastorale〉（3:37〜：指定箇所）",
    "composer": "アルカンジェロ・コレッリ（Arcangelo Corelli）",
    "date": "",
    "url": "https://ml.naxos.jp/track/6169427"
  },
  {
    "session": "第1回 バロック期の音楽（4）：17世紀後半の動向と18世紀への展開",
    "title": "コラール編曲《いざ来ませ、異邦人の救い主よ》（Nun komm, der Heiden Heiland）BuxWV 211",
    "composer": "ディートリヒ・ブクステフーデ（Dietrich Buxtehude）",
    "date": "",
    "url": "https://ml.naxos.jp/work/11534216"
  },
  {
    "session": "第2回 バロック期の音楽（5）：18世紀初頭のヨーロッパ音楽地図と1685年世代",
    "title": "《ヴァイオリン協奏曲 イ短調》Op. 3 No. 6 RV 356 第1楽章〈Allegro〉（全体）",
    "composer": "アントニオ・ヴィヴァルディ（Antonio Vivaldi）",
    "date": "1710年代",
    "url": "https://ml.naxos.jp/work/11613901"
  },
  {
    "session": "第2回 バロック期の音楽（5）：18世紀初頭のヨーロッパ音楽地図と1685年世代",
    "title": "《ヴァイオリン協奏曲 イ短調》Op. 3 No. 6 RV 356 第1楽章〈Allegro〉（0:31〜：譜例1・19〜27小節）",
    "composer": "アントニオ・ヴィヴァルディ（Antonio Vivaldi）",
    "date": "1710年代",
    "url": "https://ml.naxos.jp/work/11613901"
  },
  {
    "session": "第2回 バロック期の音楽（5）：18世紀初頭のヨーロッパ音楽地図と1685年世代",
    "title": "歌劇《アルミード》序曲",
    "composer": "ジャン＝バティスト・リュリ（Jean-Baptiste Lully）",
    "date": "",
    "url": "https://ml.naxos.jp/track/5957232"
  },
  {
    "session": "第2回 バロック期の音楽（5）：18世紀初頭のヨーロッパ音楽地図と1685年世代",
    "title": "《調和の捧げもの》弦楽と通奏低音のためのソナタ第1番 ニ長調 第1楽章〈Grave - Allegro e presto〉",
    "composer": "ゲオルク・ムッファト（Georg Muffat）",
    "date": "1682年刊",
    "url": "https://ml.naxos.jp/work/10683038"
  },
  {
    "session": "第2回 バロック期の音楽（5）：18世紀初頭のヨーロッパ音楽地図と1685年世代",
    "title": "《マタイ受難曲》BWV 244 第39曲 アリア〈憐れみたまえ〉（Erbarme dich）",
    "composer": "ヨハン・ゼバスティアン・バッハ（Johann Sebastian Bach）",
    "date": "1727年初演・1736年改訂",
    "url": "https://ml.naxos.jp/track/6203878"
  },
  {
    "session": "第2回 バロック期の音楽（5）：18世紀初頭のヨーロッパ音楽地図と1685年世代",
    "title": "《司祭ザドク》（Zadok the Priest）HWV 258",
    "composer": "ゲオルク・フリードリヒ・ヘンデル（George Frideric Handel）",
    "date": "1727年",
    "url": "https://ml.naxos.jp/work/11462565"
  },
  {
    "session": "第2回 バロック期の音楽（5）：18世紀初頭のヨーロッパ音楽地図と1685年世代",
    "title": "《司祭ザドク》2023年チャールズ3世戴冠式での演奏",
    "composer": "ゲオルク・フリードリヒ・ヘンデル（George Frideric Handel）",
    "date": "1727年",
    "url": "https://www.youtube.com/watch?v=Sm_PNbQebdA"
  },
  {
    "session": "第2回 バロック期の音楽（5）：18世紀初頭のヨーロッパ音楽地図と1685年世代",
    "title": "オラトリオ《サウル》HWV 53 第2幕第10場 合唱〈怒りが招く破滅〉（O fatal Consequence of Rage）",
    "composer": "ゲオルク・フリードリヒ・ヘンデル（George Frideric Handel）",
    "date": "1738年作曲・1739年初演",
    "url": "https://ml.naxos.jp/track/5510691"
  },
  {
    "session": "第3回 18世紀における新様式の成立とバッハの息子たち",
    "title": "《鍵盤ソナタ ニ長調》Op. 2 No. 1 第3楽章",
    "composer": "バルダッサーレ・ガルッピ（Baldassare Galuppi）",
    "date": "",
    "url": "https://www.youtube.com/watch?v=hEPO8BDL0zg"
  },
  {
    "session": "第3回 18世紀における新様式の成立とバッハの息子たち",
    "title": "《鍵盤ソナタ ヘ長調》Fk. 6a 第1楽章〈Un poco allegro〉（全体）",
    "composer": "ヴィルヘルム・フリーデマン・バッハ（Wilhelm Friedemann Bach）",
    "date": "1745年頃",
    "url": "https://www.youtube.com/watch?v=Og_bNRwS3z0"
  },
  {
    "session": "第3回 18世紀における新様式の成立とバッハの息子たち",
    "title": "《鍵盤ソナタ ヘ長調》Fk. 6a 第1楽章〈Un poco allegro〉（3:30〜：ダブル・リターン）",
    "composer": "ヴィルヘルム・フリーデマン・バッハ（Wilhelm Friedemann Bach）",
    "date": "1745年頃",
    "url": "https://www.youtube.com/watch?v=Og_bNRwS3z0&t=210s"
  },
  {
    "session": "第3回 18世紀における新様式の成立とバッハの息子たち",
    "title": "《プロイセン・ソナタ第1番 ヘ長調》Wq. 48/1 第2楽章〈Andante〉ヘ短調",
    "composer": "カール・フィリップ・エマヌエル・バッハ（Carl Philipp Emanuel Bach）",
    "date": "1740年頃成立・1742年刊",
    "url": "https://www.youtube.com/watch?v=19DghqldhK0"
  },
  {
    "session": "第3回 18世紀における新様式の成立とバッハの息子たち",
    "title": "《ソナタ ニ長調》Op. 5 No. 2 第1楽章",
    "composer": "ヨハン・クリスティアン・バッハ（Johann Christian Bach）",
    "date": "1766年刊",
    "url": "https://www.youtube.com/watch?v=Dn57ZuUAT40"
  },
  {
    "session": "第4回 18世紀における（器楽）新様式の起源と音楽喜劇の隆盛",
    "title": "《賭博好きの夫と堅物の妻》第1幕 アリア〈いまいましいバセッタめ〉（Maledetta la bassetta）",
    "composer": "ジュゼッペ・マリア・オルランディーニ（Giuseppe Maria Orlandini）",
    "date": "",
    "url": "https://www.youtube.com/watch?v=9tTTPtRo7r4"
  },
  {
    "session": "第4回 18世紀における（器楽）新様式の起源と音楽喜劇の隆盛",
    "title": "《悲しみの聖母》〈Stabat Mater dolorosa〉（ロンドン交響楽団／アバド、1985年）",
    "composer": "ジョヴァンニ・バッティスタ・ペルゴレージ（Giovanni Battista Pergolesi）",
    "date": "1736年",
    "url": "https://www.youtube.com/watch?v=2MR63GfUnMw"
  },
  {
    "session": "第4回 18世紀における（器楽）新様式の起源と音楽喜劇の隆盛",
    "title": "《奥様女中》ウベルトのアリア〈待てども来ず〉（0:43〜）",
    "composer": "ジョヴァンニ・バッティスタ・ペルゴレージ（Giovanni Battista Pergolesi）",
    "date": "",
    "url": "https://youtu.be/-FaHrId3Mk8?t=43"
  },
  {
    "session": "第4回 18世紀における（器楽）新様式の起源と音楽喜劇の隆盛",
    "title": "《奥様女中》第1幕フィナーレの二重唱〈そのお目々を見れば分かります〉（17:06〜）",
    "composer": "ジョヴァンニ・バッティスタ・ペルゴレージ（Giovanni Battista Pergolesi）",
    "date": "",
    "url": "https://youtu.be/-FaHrId3Mk8?t=1026"
  },
  {
    "session": "第4回 18世紀における（器楽）新様式の起源と音楽喜劇の隆盛",
    "title": "《奥様女中》第2幕 セルピーナのアリア〈セルピーナのことを考えてくださるでしょう〉（レジュメでは24:33〜／リンクは24:34〜）",
    "composer": "ジョヴァンニ・バッティスタ・ペルゴレージ（Giovanni Battista Pergolesi）",
    "date": "",
    "url": "https://youtu.be/-FaHrId3Mk8?t=1474"
  },
  {
    "session": "第4回 18世紀における（器楽）新様式の起源と音楽喜劇の隆盛",
    "title": "《交響曲第59番 イ長調「火事」》Hob. I:59 第1楽章提示部（冒頭〜1:20）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1768年頃",
    "url": "https://www.youtube.com/watch?v=NimRuZQsH20"
  },
  {
    "session": "第4回 18世紀における（器楽）新様式の起源と音楽喜劇の隆盛",
    "title": "《オルフェオとエウリディーチェ》第2幕 バレエと合唱〈いったい誰が冥府へ〉（Chi mai dell’Erebo）",
    "composer": "クリストフ・ヴィリバルト・グルック（Christoph Willibald Gluck）",
    "date": "1762年",
    "url": "https://www.youtube.com/watch?v=V7sf_mmp9qY"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第32番 ヘ長調》第1楽章",
    "composer": "ジョヴァンニ・バッティスタ・サンマルティーニ（Giovanni Battista Sammartini）",
    "date": "",
    "url": "https://www.youtube.com/watch?v=VZ3dt0hMSFQ"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第45番 嬰ヘ短調「告別」》Hob. I:45（全体）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1772年",
    "url": "https://www.youtube.com/watch?v=3mjF6skVVFY"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第45番 嬰ヘ短調「告別」》Hob. I:45（0:06〜：第1楽章・冒頭の楽想）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1772年",
    "url": "https://www.youtube.com/watch?v=3mjF6skVVFY&t=6s"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第45番 嬰ヘ短調「告別」》Hob. I:45（3:06〜：第1楽章・ニ長調の旋律）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1772年",
    "url": "https://www.youtube.com/watch?v=3mjF6skVVFY&t=186s"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第45番 嬰ヘ短調「告別」》Hob. I:45（20:02〜：第4楽章・Presto）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1772年",
    "url": "https://www.youtube.com/watch?v=3mjF6skVVFY&t=1202s"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第45番 嬰ヘ短調「告別」》Hob. I:45（22:03〜：第4楽章・Adagio）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1772年",
    "url": "https://www.youtube.com/watch?v=3mjF6skVVFY&t=1323s"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《天地創造》Hob. XXI:2 第1番 レチタティーヴォと合唱〈初めに、神は天地を創造された〉",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1798年",
    "url": "https://www.youtube.com/watch?v=mCO6wZEKN5E"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《弦楽四重奏曲変ホ長調第2番「冗談」》Op. 33 No. 2（全体）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1781年",
    "url": "https://www.youtube.com/watch?v=u5hRL0zQFUM"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《弦楽四重奏曲変ホ長調第2番「冗談」》Op. 33 No. 2（15:13〜：第4楽章・主題）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1781年",
    "url": "https://www.youtube.com/watch?v=u5hRL0zQFUM&t=913s"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《弦楽四重奏曲変ホ長調第2番「冗談」》Op. 33 No. 2（17:32〜：第4楽章・Adagioとコーダ）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1781年",
    "url": "https://www.youtube.com/watch?v=u5hRL0zQFUM&t=1052s"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第104番 ニ長調「ロンドン」》Hob. I:104 第1楽章（全体）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1795年",
    "url": "https://www.youtube.com/watch?v=kg6Q9tkHOw0"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第104番 ニ長調「ロンドン」》Hob. I:104 第1楽章（2:27〜：主部冒頭の主題）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1795年",
    "url": "https://www.youtube.com/watch?v=kg6Q9tkHOw0&t=147s"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第104番 ニ長調「ロンドン」》Hob. I:104 第1楽章（3:20〜：属調における主題の再提示）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1795年",
    "url": "https://www.youtube.com/watch?v=kg6Q9tkHOw0&t=200s"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第44番 ホ短調「悲しみ」》Hob. I:44 第1楽章（課題音源）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1772年頃",
    "url": "https://www.youtube.com/watch?v=MONdjATbj9k"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第82番 ハ長調「熊」》Hob. I:82 第1楽章（課題音源）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1786年",
    "url": "https://www.youtube.com/watch?v=LzxmDFwjc-4"
  },
  {
    "session": "第5回 器楽音楽の自律化と公共化：ハイドンの交響曲と弦楽四重奏曲",
    "title": "《交響曲第88番 ト長調》Hob. I:88 第1楽章（課題音源）",
    "composer": "フランツ・ヨーゼフ・ハイドン（Franz Joseph Haydn）",
    "date": "1787年",
    "url": "https://www.youtube.com/watch?v=EbYjwVCj8Z8"
  },
  {
    "session": "第6回 モーツァルトの生涯および受容という万華鏡",
    "title": "幼少期の作品《アンダンテ》K. 1a・《アレグロ》K. 1b の紹介箇所に掲載された音源",
    "composer": "ヴォルフガング・アマデウス・モーツァルト（Wolfgang Amadeus Mozart）",
    "date": "1761年",
    "url": "https://ml.naxos.jp/work/10942169"
  },
  {
    "session": "第6回 モーツァルトの生涯および受容という万華鏡",
    "title": "《弦楽四重奏曲第19番 ハ長調「不協和音」》K. 465 第1楽章〈Adagio – Allegro〉",
    "composer": "ヴォルフガング・アマデウス・モーツァルト（Wolfgang Amadeus Mozart）",
    "date": "1782〜85年",
    "url": "https://ml.naxos.jp/track/6241305"
  },
  {
    "session": "第6回 モーツァルトの生涯および受容という万華鏡",
    "title": "《ピアノ協奏曲第17番 ト長調》K. 453 第2楽章〈Andante〉（全体）",
    "composer": "ヴォルフガング・アマデウス・モーツァルト（Wolfgang Amadeus Mozart）",
    "date": "1784年",
    "url": "https://ml.naxos.jp/track/3525577"
  },
  {
    "session": "第6回 モーツァルトの生涯および受容という万華鏡",
    "title": "《ピアノ協奏曲第17番 ト長調》K. 453 第2楽章〈Andante〉（2:05〜：ピアノ独奏開始）",
    "composer": "ヴォルフガング・アマデウス・モーツァルト（Wolfgang Amadeus Mozart）",
    "date": "1784年",
    "url": "https://ml.naxos.jp/track/3525577"
  },
  {
    "session": "第6回 モーツァルトの生涯および受容という万華鏡",
    "title": "《ピアノ協奏曲第17番 ト長調》K. 453 第2楽章〈Andante〉（2:29〜：ハ短調への急な推移・m. 35〜）",
    "composer": "ヴォルフガング・アマデウス・モーツァルト（Wolfgang Amadeus Mozart）",
    "date": "1784年",
    "url": "https://ml.naxos.jp/track/3525577"
  },
  {
    "session": "第6回 モーツァルトの生涯および受容という万華鏡",
    "title": "《ピアノ協奏曲第17番 ト長調》K. 453 第2楽章〈Andante〉（6:01〜：遠隔調からの帰還・m. 86〜）",
    "composer": "ヴォルフガング・アマデウス・モーツァルト（Wolfgang Amadeus Mozart）",
    "date": "1784年",
    "url": "https://ml.naxos.jp/track/3525577"
  },
  {
    "session": "第7回 ベートーヴェン――ロマン主義時代の幕開けおよび近代的作曲家像の完成",
    "title": "《交響曲第1番 ハ長調》Op. 21 第1楽章 序奏",
    "composer": "ルートヴィヒ・ファン・ベートーヴェン（Ludwig van Beethoven）",
    "date": "1800年",
    "url": "https://ml.naxos.jp/track/3858044"
  },
  {
    "session": "第7回 ベートーヴェン――ロマン主義時代の幕開けおよび近代的作曲家像の完成",
    "title": "《交響曲第3番 変ホ長調「英雄」》Op. 55 第1楽章（冒頭）",
    "composer": "ルートヴィヒ・ファン・ベートーヴェン（Ludwig van Beethoven）",
    "date": "1803〜04年",
    "url": "https://ml.naxos.jp/track/6316210"
  },
  {
    "session": "第7回 ベートーヴェン――ロマン主義時代の幕開けおよび近代的作曲家像の完成",
    "title": "《交響曲第3番 変ホ長調「英雄」》Op. 55 第1楽章（9:58頃〜：第1ホルンの「フライング進入」、mm. 394–395）",
    "composer": "ルートヴィヒ・ファン・ベートーヴェン（Ludwig van Beethoven）",
    "date": "1803〜04年",
    "url": "https://ml.naxos.jp/track/6316210"
  },
  {
    "session": "第7回 ベートーヴェン――ロマン主義時代の幕開けおよび近代的作曲家像の完成",
    "title": "《交響曲第3番 変ホ長調「英雄」》Op. 55 第1楽章（12:57頃〜：コーダ冒頭近くのD♭、第557小節）",
    "composer": "ルートヴィヒ・ファン・ベートーヴェン（Ludwig van Beethoven）",
    "date": "1803〜04年",
    "url": "https://ml.naxos.jp/track/6316210"
  },
  {
    "session": "第7回 ベートーヴェン――ロマン主義時代の幕開けおよび近代的作曲家像の完成",
    "title": "《交響曲第3番 変ホ長調「英雄」》Op. 55 第1楽章（14:21頃〜：第1ホルンによる主題の再提示、第631小節）",
    "composer": "ルートヴィヒ・ファン・ベートーヴェン（Ludwig van Beethoven）",
    "date": "1803〜04年",
    "url": "https://ml.naxos.jp/track/6316210"
  },
  {
    "session": "第7回 ベートーヴェン――ロマン主義時代の幕開けおよび近代的作曲家像の完成",
    "title": "《ピアノソナタ第32番 ハ短調》Op. 111 第1楽章（8:24〜：ハ長調へ静かに着地）",
    "composer": "ルートヴィヒ・ファン・ベートーヴェン（Ludwig van Beethoven）",
    "date": "1822年",
    "url": "https://ml.naxos.jp/track/4226727"
  },
  {
    "session": "第7回 ベートーヴェン――ロマン主義時代の幕開けおよび近代的作曲家像の完成",
    "title": "《ピアノソナタ第32番 ハ短調》Op. 111 第2楽章（11:52〜：三重トリル、mm. 106–120）",
    "composer": "ルートヴィヒ・ファン・ベートーヴェン（Ludwig van Beethoven）",
    "date": "1822年",
    "url": "https://ml.naxos.jp/track/4226728"
  },
  {
    "session": "第7回 ベートーヴェン――ロマン主義時代の幕開けおよび近代的作曲家像の完成",
    "title": "《ピアノ三重奏曲第3番 ハ短調》Op. 1 No. 3 第1楽章（課題音源）",
    "composer": "ルートヴィヒ・ファン・ベートーヴェン（Ludwig van Beethoven）",
    "date": "1795年",
    "url": "https://ml.naxos.jp/track/6512850"
  }
];
