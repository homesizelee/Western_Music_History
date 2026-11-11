const listeningItems = [
  {
    "session": "第3回 中世における聖歌",
    "title": "古代ギリシャ音楽復元演奏集（Ensemble Kérylos／アルバム K617069）",
    "composer": "作曲者不詳ほか（演奏：Ensemble Kérylos）",
    "date": "古代ギリシャ（復元演奏集）",
    "url": "https://ml.naxos.jp/album/K617069"
  },
  {
    "session": "第3回 中世における聖歌",
    "title": "オクシリンコスの聖歌（Oxyrhynchus Hymn）",
    "composer": "作曲者不詳",
    "date": "3世紀後半頃",
    "url": "https://ml.naxos.jp/work/6690446"
  },
  {
    "session": "第4回 中世における世俗音楽",
    "title": "ひばりが羽ばたくのを見ると（Can vei la lauzeta mover）",
    "composer": "ベルナルト・デ・ヴェンタドルン（Bernart de Ventadorn）",
    "date": "1170～1180年頃",
    "url": "https://ml.naxos.jp/work/7973402"
  },
  {
    "session": "第4回 中世における世俗音楽",
    "title": "パレスチナの歌（Palästinalied）",
    "composer": "ヴァルター・フォン・デア・フォーゲルヴァイデ（Walther von der Vogelweide）",
    "date": "1228年頃",
    "url": "https://ml.naxos.jp/work/10691898"
  },
  {
    "session": "第5回 多声音楽の始まり",
    "title": "怒りの日（Dies irae）",
    "composer": "作曲者不詳",
    "date": "13世紀頃",
    "url": "https://ml.naxos.jp/work/5935884"
  },
  {
    "session": "第5回 多声音楽の始まり",
    "title": "幻想交響曲 第5楽章〈サバトの夜の夢〉（Symphonie fantastique, V: Songe d’une nuit du sabbat）—抜粋1",
    "composer": "エクトル・ベルリオーズ（Hector Berlioz）",
    "date": "1830年",
    "url": "https://ml.naxos.jp/track/6264855"
  },
  {
    "session": "第5回 多声音楽の始まり",
    "title": "幻想交響曲 第5楽章〈サバトの夜の夢〉（Symphonie fantastique, V: Songe d’une nuit du sabbat）—抜粋2",
    "composer": "エクトル・ベルリオーズ（Hector Berlioz）",
    "date": "1830年",
    "url": "https://ml.naxos.jp/track/6264857"
  },
  {
    "session": "第5回 多声音楽の始まり",
    "title": "《6つのピアノ小品》Op. 118 第6曲 間奏曲 変ホ短調（Sechs Klavierstücke, Op. 118: No. 6, Intermezzo in E-flat Minor）",
    "composer": "ヨハネス・ブラームス（Johannes Brahms）",
    "date": "1893年",
    "url": "https://ml.naxos.jp/work/11486498"
  },
  {
    "session": "第5回 多声音楽の始まり",
    "title": "《死の舞踏》より〈預言者〉（Totentanz: Der Prediger）",
    "composer": "トーマス・アデス（Thomas Adès）",
    "date": "2013年",
    "url": "https://ml.naxos.jp/work/7786899"
  },
  {
    "session": "第5回 多声音楽の始まり",
    "title": "地上のすべての国々は（Viderunt omnes）",
    "composer": "ペロティヌス／ペロタン（Perotinus／Pérotin）",
    "date": "1198年頃",
    "url": "https://ml.naxos.jp/work/11491034"
  },
  {
    "session": "第5回 多声音楽の始まり",
    "title": "夏は来りぬ（Sumer is icumen in）",
    "composer": "作曲者不詳",
    "date": "13世紀半ば",
    "url": "https://ml.naxos.jp/work/146586"
  },
  {
    "session": "第6回 14世紀のフランスとイタリア音楽",
    "title": "エルサレムよ、あなたの上に／処女性は輝いた／主（Super te Ierusalem／Sed fulsit virginitas／Dominus）—4声版",
    "composer": "作曲者不詳",
    "date": "13世紀",
    "url": "https://ml.naxos.jp/work/10483023"
  },
  {
    "session": "第6回 14世紀のフランスとイタリア音楽",
    "title": "ある人々は見出した／長き時を経て／告げ知らせる者たち（Aucun ont trouvé／Lonc tans／Annuntiantes）",
    "composer": "ペトルス・デ・クルーチェ（Petrus de Cruce）",
    "date": "13世紀後半",
    "url": "https://ml.naxos.jp/work/8091080"
  },
  {
    "session": "第6回 14世紀のフランスとイタリア音楽",
    "title": "ネブカドネザルの像のもと／ユーグ／嫉妬深き師（Cum statua／Hugo／Magister invidie）",
    "composer": "フィリップ・ド・ヴィトリー（Philippe de Vitry）",
    "date": "14世紀前半",
    "url": "https://ml.naxos.jp/work/259109"
  },
  {
    "session": "第6回 14世紀のフランスとイタリア音楽",
    "title": "ノートルダム・ミサ曲〈キリエ〉（La Messe de Nostre Dame: Kyrie）",
    "composer": "ギヨーム・ド・マショー（Guillaume de Machaut）",
    "date": "1364年頃",
    "url": "https://ml.naxos.jp/track/3869878"
  },
  {
    "session": "第6回 14世紀のフランスとイタリア音楽",
    "title": "ノートルダム・ミサ曲〈グローリア〉（La Messe de Nostre Dame: Gloria）",
    "composer": "ギヨーム・ド・マショー（Guillaume de Machaut）",
    "date": "1364年頃",
    "url": "https://ml.naxos.jp/track/3869879"
  },
  {
    "session": "第6回 14世紀のフランスとイタリア音楽",
    "title": "甘き淑女よ（Douce dame jolie）",
    "composer": "ギヨーム・ド・マショー（Guillaume de Machaut）",
    "date": "14世紀中頃",
    "url": "https://ml.naxos.jp/work/6070253"
  },
  {
    "session": "第6回 14世紀のフランスとイタリア音楽",
    "title": "ばらよ、ゆりよ、春よ、緑よ（Rose, liz, printemps, verdure）",
    "composer": "ギヨーム・ド・マショー（Guillaume de Machaut）",
    "date": "14世紀",
    "url": "https://ml.naxos.jp/work/10679442"
  },
  {
    "session": "第6回 14世紀のフランスとイタリア音楽",
    "title": "恋人を喜ばせることができない（Non al suo amante）",
    "composer": "ヤコポ・ダ・ボローニャ（Jacopo da Bologna）",
    "date": "14世紀中頃",
    "url": "https://ml.naxos.jp/work/519620"
  },
  {
    "session": "第6回 14世紀のフランスとイタリア音楽",
    "title": "彼女は決して哀れまないだろう（Non avrà ma’ pietà）",
    "composer": "フランチェスコ・ランディーニ（Francesco Landini）",
    "date": "14世紀後半",
    "url": "https://ml.naxos.jp/work/101537"
  },
  {
    "session": "第7回 ルネサンス期の音楽（1）：総説、15世紀の音楽",
    "title": "アレルヤ：新たなるみわざ（Alleluia: a newë work）",
    "composer": "作曲者不詳",
    "date": "15世紀前半",
    "url": "https://ml.naxos.jp/work/6906670"
  },
  {
    "session": "第7回 ルネサンス期の音楽（1）：総説、15世紀の音楽",
    "title": "だんだんと（De plus en plus se）",
    "composer": "バンショワ（Gilles de Bins dit Binchois）",
    "date": "1425年頃",
    "url": "https://ml.naxos.jp/work/10514802"
  },
  {
    "session": "第8回 ルネサンス期の音楽（2）：16世紀の音楽",
    "title": "あなたは何者にもまして美しい（Quam pulchra es, JD 44）",
    "composer": "ジョン・ダンスタブル（John Dunstaple）",
    "date": "15世紀前半",
    "url": "https://ml.naxos.jp/work/11316214"
  },
  {
    "session": "第8回 ルネサンス期の音楽（2）：16世紀の音楽",
    "title": "さようなら、また会うときまで（Adieu jusques je vous revoye）",
    "composer": "バンショワ（Gilles de Bins dit Binchois）",
    "date": "15世紀前半",
    "url": "https://ml.naxos.jp/work/11077599"
  },
  {
    "session": "第8回 ルネサンス期の音楽（2）：16世紀の音楽",
    "title": "私の顔が青ざめているなら（Se la face ay pale）",
    "composer": "ギヨーム・デュファイ（Guillaume Du Fay）",
    "date": "1430年代",
    "url": "https://ml.naxos.jp/work/4751450"
  },
  {
    "session": "第8回 ルネサンス期の音楽（2）：16世紀の音楽",
    "title": "《ミサ曲：私の顔が青ざめているなら》より〈グローリア〉（Missa Se la face ay pale: Gloria）",
    "composer": "ギヨーム・デュファイ（Guillaume Du Fay）",
    "date": "1453年頃",
    "url": "https://ml.naxos.jp/track/2100753"
  },
  {
    "session": "第9回 ルネサンス期の音楽（3）：オケゲム、印刷技術、ジョスカン",
    "title": "レクイエム（Requiem／Missa pro defunctis）",
    "composer": "ヨハネス・オケゲム（Johannes Ockeghem）",
    "date": "15世紀後半",
    "url": "https://ml.naxos.jp/work/9372170"
  },
  {
    "session": "第9回 ルネサンス期の音楽（3）：オケゲム、印刷技術、ジョスカン",
    "title": "ミサ・ミ・ミ（Missa Mi-mi）",
    "composer": "ヨハネス・オケゲム（Johannes Ockeghem）",
    "date": "15世紀後半",
    "url": "https://ml.naxos.jp/work/2725336"
  },
  {
    "session": "第9回 ルネサンス期の音楽（3）：オケゲム、印刷技術、ジョスカン",
    "title": "ミサ・プロラツィオーヌム〈キリエ II〉（Missa prolationum: Kyrie II）",
    "composer": "ヨハネス・オケゲム（Johannes Ockeghem）",
    "date": "15世紀後半",
    "url": "https://ml.naxos.jp/track/6165300"
  },
  {
    "session": "第9回 ルネサンス期の音楽（3）：オケゲム、印刷技術、ジョスカン",
    "title": "千々の悲しみ（Mille regretz）",
    "composer": "ジョスカン・デ・プレ（Josquin des Prez）",
    "date": "1520年頃",
    "url": "https://ml.naxos.jp/work/10655478"
  },
  {
    "session": "第9回 ルネサンス期の音楽（3）：オケゲム、印刷技術、ジョスカン",
    "title": "アヴェ・マリア……清らかなる乙女（Ave Maria … virgo serena）",
    "composer": "ジョスカン・デ・プレ（Josquin des Prez）",
    "date": "1480年代頃",
    "url": "https://ml.naxos.jp/work/11205184"
  },
  {
    "session": "第10回 ルネサンス期の音楽（4）：世俗音楽と音楽の社会的拡散",
    "title": "さようなら、わが愛するものたちよ（Adieu mes amours）—ヴィオール編曲版",
    "composer": "ジョスカン・デ・プレ（Josquin des Prez）",
    "date": "15世紀後半",
    "url": "https://ml.naxos.jp/work/9406052"
  },
  {
    "session": "第10回 ルネサンス期の音楽（4）：世俗音楽と音楽の社会的拡散",
    "title": "可愛いカミュゼット（Petite camusette）",
    "composer": "ジョスカン・デ・プレ（Josquin des Prez）",
    "date": "15世紀後半～16世紀初頭",
    "url": "https://ml.naxos.jp/work/9406054"
  },
  {
    "session": "第10回 ルネサンス期の音楽（4）：世俗音楽と音楽の社会的拡散",
    "title": "深い悲しみと痛ましい喜びよ（Parfons regretz）",
    "composer": "ジョスカン・デ・プレ（Josquin des Prez）",
    "date": "15世紀後半～16世紀初頭",
    "url": "https://ml.naxos.jp/work/9406074"
  },
  {
    "session": "第10回 ルネサンス期の音楽（4）：世俗音楽と音楽の社会的拡散",
    "title": "苦しみが私をさいなみ（Douleur me bat）",
    "composer": "ジョスカン・デ・プレ（Josquin des Prez）",
    "date": "15世紀後半～16世紀初頭",
    "url": "https://ml.naxos.jp/work/9406051"
  },
  {
    "session": "第10回 ルネサンス期の音楽（4）：世俗音楽と音楽の社会的拡散",
    "title": "今日は食べて飲んで（Oy comamos y bebamos）",
    "composer": "フアン・デル・エンシーナ（Juan del Encina）",
    "date": "1495年頃",
    "url": "https://ml.naxos.jp/work/10766338"
  },
  {
    "session": "第10回 ルネサンス期の音楽（4）：世俗音楽と音楽の社会的拡散",
    "title": "純白の美しい白鳥（Il bianco e dolce cigno）",
    "composer": "ジャック・アルカデルト（Jacques Arcadelt）",
    "date": "1538～1539年頃",
    "url": "https://ml.naxos.jp/work/11667330"
  },
  {
    "session": "第10回 ルネサンス期の音楽（4）：世俗音楽と音楽の社会的拡散",
    "title": "美しき東の郷から（Da le belle contrade d’oriente）",
    "composer": "チプリアーノ・デ・ローレ（Cipriano de Rore）",
    "date": "16世紀中頃",
    "url": "https://ml.naxos.jp/work/10453545"
  },
  {
    "session": "第10回 ルネサンス期の音楽（4）：世俗音楽と音楽の社会的拡散",
    "title": "孤独で、憂えて（Solo e pensoso i più deserti campi）",
    "composer": "ルカ・マレンツィオ（Luca Marenzio）",
    "date": "1599年頃",
    "url": "https://ml.naxos.jp/work/6832403"
  },
  {
    "session": "第11回 ルネサンス期の音楽（5）：宗教改革と器楽の台頭",
    "title": "われらが神は堅き砦（Ein feste Burg ist unser Gott）—4声版",
    "composer": "ヨハン・ヴァルター（Johann Walter）",
    "date": "1551年",
    "url": "https://ml.naxos.jp/work/287400"
  },
  {
    "session": "第11回 ルネサンス期の音楽（5）：宗教改革と器楽の台頭",
    "title": "《教皇マルチェルスのミサ曲》より〈アニュス・デイ I〉（Missa Papae Marcelli: Agnus Dei I）",
    "composer": "ジョヴァンニ・ピエルルイージ・ダ・パレストリーナ（Giovanni Pierluigi da Palestrina）",
    "date": "1560年頃",
    "url": "https://ml.naxos.jp/track/199800"
  },
  {
    "session": "第12回 バロック期の音楽（1）：バロック期総説",
    "title": "つれないアマリッリ（Cruda Amarilli, che col nome ancora, SV 94）",
    "composer": "クラウディオ・モンテヴェルディ（Claudio Monteverdi）",
    "date": "1590年代",
    "url": "https://ml.naxos.jp/track/5470243"
  },
  {
    "session": "第13回 バロック期の音楽（2）：17世紀音楽の新しい語法と声楽ジャンル",
    "title": "わが太陽を見ん（Vedrò ’l mio sol）—独唱とハープによる演奏",
    "composer": "ジュリオ・カッチーニ（Giulio Caccini）",
    "date": "1590年代",
    "url": "https://ml.naxos.jp/work/8651682"
  },
  {
    "session": "第13回 バロック期の音楽（2）：17世紀音楽の新しい語法と声楽ジャンル",
    "title": "わが太陽を見ん（Vedrò ’l mio sol）—複数楽器によるコンチェルタート的演奏",
    "composer": "ジュリオ・カッチーニ（Giulio Caccini）",
    "date": "1590年代",
    "url": "https://ml.naxos.jp/work/7064659"
  },
  {
    "session": "第13回 バロック期の音楽（2）：17世紀音楽の新しい語法と声楽ジャンル",
    "title": "ニンファの嘆き（Lamento della ninfa）",
    "composer": "クラウディオ・モンテヴェルディ（Claudio Monteverdi）",
    "date": "1638年所収",
    "url": "https://ml.naxos.jp/work/10822690"
  },
  {
    "session": "第13回 バロック期の音楽（2）：17世紀音楽の新しい語法と声楽ジャンル",
    "title": "西の風がもどり好天をもたらす（Zefiro torna e di soavi accenti）",
    "composer": "クラウディオ・モンテヴェルディ（Claudio Monteverdi）",
    "date": "1632年所収",
    "url": "https://ml.naxos.jp/work/10822684"
  },
  {
    "session": "第13回 バロック期の音楽（2）：17世紀音楽の新しい語法と声楽ジャンル",
    "title": "私の涙（Lagrime mie）",
    "composer": "バルバラ・ストロッツィ（Barbara Strozzi）",
    "date": "1650年代",
    "url": "https://ml.naxos.jp/work/11529949"
  }
];
