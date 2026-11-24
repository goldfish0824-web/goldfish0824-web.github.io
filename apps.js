/* =========================================================
   アプリ一覧データ（生徒用 index.html と 教員用 teachers.html で共通）
   ---------------------------------------------------------
   ・アプリを追加するときは { ... } を1つコピーして書き換えるだけ。
   ・url が空 "" のアプリは「準備中」と表示されます。
   ・video に YouTube などのURLを入れると「使い方動画」ボタンが出ます。
   ・載せたくないものは hidden: true にすると、どちらのページにも出ません。
   ---------------------------------------------------------
   項目の意味
     name        表示名
     short       生徒用ページ上部のカード束に入れる短い名前（hero: true のものだけ）
     color       カードの色
     catch       ひとことで言うと何か
     desc        生徒向けの説明
     tags        生徒用ページの絞り込み（単語・話す・書く・英検・進路・動画）
     student     生徒用ページに出すか
     teacher     教員用ページに出すか
     url         アプリの公開URL
     video       使い方動画のURL
     repo        GitHubリポジトリのURL（教員用ページにだけ表示）
     mic         マイクを使うか
     inClass     授業で先生の指示があったときに使うものか
     password    パスワードについての案内（不要なら ""）。パスワードそのものは絶対に書かない
     level       レベルや対象の目安
     group       教員用ページの分類："english"（英語の授業）/ "all"（全教科・学年・進路）
     api         "none"（API不要）/ "author"（作者のAPIキー・作者負担）/ "byo"（各先生が自分のAPIキーを入れる）
     teacherNote 教員向けの説明（授業での使い方など）
     license     ライセンス
     isNew       true で NEW マーク
   ========================================================= */

window.SITE = {
  // 生徒用ページの公開URL（教員用ページのQRコードに使います）
  studentUrl: "https://goldfish0824-web.github.io/"
};

window.APPS = [
  {
    id: "koi", name: "恋のことのは", short: "恋のことのは", hero: true, color: "#ff7a93",
    catch: "英単語を声に出して答えると、恋の物語が進むノベルゲーム",
    desc: "ハルト・レン・イツキ、3人のキャラクターのルートを、英語を話しながら進めます。",
    tags: ["単語", "話す"], student: true, teacher: true,
    url: "https://goldfish0824-web.github.io/koi-no-kotonoha/", video: "", repo: "https://github.com/goldfish0824-web/koi-no-kotonoha",
    mic: true, inClass: false, password: "", level: "",
    group: "english", api: "none",
    teacherNote: "家庭学習向けの英単語ゲーム。生徒にはQRコードを見せるだけで始められます。音声認識を使うので、教室で使うならイヤホンがあると安心です。",
    license: "CC BY-NC-SA 4.0", isNew: false
  },
  {
    id: "vox9", name: "VOX-9 音声討伐", short: "VOX-9", hero: true, color: "#5b6cff",
    catch: "英単語を声で唱えて敵を倒す、SFホラー風の単語ゲーム",
    desc: "全12ステージ・約1,200語。中学レベルの単語から短いフレーズまで。全部クリアすると……？",
    tags: ["単語", "話す"], student: true, teacher: true,
    url: "https://goldfish0824-web.github.io/vox-9/", video: "", repo: "https://github.com/goldfish0824-web/vox-9",
    mic: true, inClass: false, password: "", level: "中学レベル〜",
    group: "english", api: "none",
    teacherNote: "家庭学習向け。ステージ1〜6は中学レベルの単語、7〜12は短いフレーズ。音声認識を使います。",
    license: "CC BY-NC-SA 4.0", isNew: false
  },
  {
    id: "dear", name: "Dear, ことのは", short: "Dear, ことのは", hero: true, color: "#ffb347",
    catch: "システム英単語 No.1〜1200に対応した、留学生との恋の物語",
    desc: "1ステージ100語×12ステージ。前半は英語を声かキーボードで答え、後半は意味を4択で選びます。単語の小テスト対策に。",
    tags: ["単語", "話す"], student: true, teacher: true,
    url: "https://goldfish0824-web.github.io/dear-kotonoha/", video: "", repo: "https://github.com/goldfish0824-web/dear-kotonoha",
    mic: true, inClass: false, password: "", level: "システム英単語 No.1〜1200",
    group: "english", api: "none",
    teacherNote: "システム英単語の小テストと同じ形式（No.1〜600は日本語→英語、No.601〜は英語→意味の4択）で練習できます。",
    license: "", isNew: false
  },
  {
    id: "kotodama", name: "言霊法廷 VOICE OF REASON", short: "言霊法廷", hero: true, color: "#7c5cff",
    catch: "英熟語300で裁判に挑む、法廷ドラマ型の学習ゲーム",
    desc: "18歳の裁判員・芹沢陽（ハル）が主人公。全12ステージの物語を読み進めながら、英熟語を身につけます。",
    tags: ["単語"], student: true, teacher: true,
    url: "https://goldfish0824-web.github.io/voice-of-reason/", video: "", repo: "https://github.com/goldfish0824-web/voice-of-reason",
    mic: false, inClass: false, password: "", level: "英熟語300",
    group: "english", api: "none",
    teacherNote: "熟語の家庭学習用。13章・約15,000字の物語を読み進めながら、300の英熟語に触れます。",
    license: "CC BY-NC-SA 4.0", isNew: false
  },
  {
    id: "chatgpt-hs", name: "ChatGPT英会話プロンプト（高校生版）", color: "#2bb3a3",
    catch: "コピーしてChatGPTに貼るだけで、AIと英会話の練習ができる",
    desc: "トピック別Q&A・ロールプレイ・ディスカッション・面接練習の4種類。ChatGPTの無料版で、声でも文字でも練習できます。",
    tags: ["話す"], student: true, teacher: true,
    url: "https://goldfish0824-web.github.io/harudake-eikaiwa/hs/", video: "", repo: "https://github.com/goldfish0824-web/harudake-eikaiwa",
    mic: false, inClass: false, password: "", level: "高校生向け",
    group: "english", api: "none",
    teacherNote: "APIは使わず、ChatGPT無料版で使います。ChatGPTの利用規約では、18歳未満は保護者の同意が必要です。",
    license: "", isNew: false
  },
  {
    id: "nijitore", name: "ニジトレ", color: "#ff8c42",
    catch: "英検二次試験（面接）を本番と同じ流れで練習。AIがコメントをくれる",
    desc: "話した音声をAIが聞いて、コメントやアドバイスをくれます。合否の判定は出ません。",
    tags: ["英検", "話す"], student: true, teacher: true,
    url: "https://goldfish0824-web.github.io/niji-tore/", video: "", repo: "https://github.com/goldfish0824-web/niji-tore",
    mic: true, inClass: false, password: "パスワードは、一次試験に合格した人に先生が伝えます。",
    level: "英検3級・準2級・2級",
    group: "english", api: "author",
    teacherNote: "一次試験の合格者にパスワードを伝え、二次試験まで自由に練習させる想定です。AIの評価はぶれるため、合否やABC評価は出しません。各先生が自分のAPIキーで使える配布版も準備中です。",
    license: "", isNew: false
  },
  {
    id: "talkscale", name: "Talk Scale", color: "#3fa7f5",
    catch: "授業で受けるスピーキングテスト。発音・文法・語彙・流暢さをA〜Dで評価",
    desc: "音読・写真描写・質問応答・意見の4パート、5〜10分。成績には入りません。AIによる評価なので、多少のばらつきがあります。",
    tags: ["話す"], student: true, teacher: true,
    url: "", video: "", repo: "",
    mic: true, inClass: true, password: "授業で先生が伝えた回だけ受けられます。",
    level: "Basic（英検3級）・Standard（準2級）・Advanced（2級）",
    group: "english", api: "author",
    teacherNote: "タブレットとマイク付きイヤホンで受ける授業内テスト。3レベル×各10回で、回ごとにパスワードが違います。動機づけ用で、成績には入れない想定です。",
    license: "", isNew: false
  },
  {
    id: "eiken-check", name: "英検 学習チェック", color: "#f2c12e",
    catch: "英検2級・準2級の合格をめざす、2週間ごとの課題と単語学習",
    desc: "リーディング・リスニングは答え合わせしたプリントを写真で提出。要約・英作文はアプリで書くと、その場でAIが添削します。",
    tags: ["英検", "書く", "単語"], student: true, teacher: true,
    url: "https://ichitore.goldfish0824.workers.dev/", video: "", repo: "",
    mic: false, inClass: false, password: "参加登録した人向けです。課題のパスワードはプリントと一緒に配ります。",
    level: "英検準2級・2級",
    group: "english", api: "author",
    teacherNote: "希望者（各級10〜20人程度）向け。提出状況と単語の学習状況を、参加者どうしがニックネームで見られます。要約・英作文に点数は付けません。",
    license: "", isNew: false
  },
  {
    id: "oreo", name: "OREO Live", color: "#3b3030",
    catch: "ディベートのあとに書いた英文を、AIがすぐに添削",
    desc: "授業で先生の指示があったときに使います。クラスのみんなの意見もまとめて表示されます。",
    tags: ["書く", "話す"], student: true, teacher: true,
    url: "https://goldfish0824-web.github.io/oreo-live/", video: "", repo: "https://github.com/goldfish0824-web/oreo-live",
    mic: false, inClass: true, password: "", level: "",
    group: "english", api: "author",
    teacherNote: "ディベート後のライティング（OREOの型）をAIが即時添削・評価し、同時にクラスの意見を集約してモニターに映します。余った授業時間向けのミニディベート版（OREO Live Free／OREO Live＋）も構想中です。",
    license: "", isNew: false
  },
  {
    id: "bunseki", name: "分析くん", color: "#58b368",
    catch: "志望理由書・自己PRを書く前に、自分の経験から“材料”を掘り出す",
    desc: "紙のワークシートに書いた内容を入力すると、AIが下書きを作ります。下書きは必ず自分の言葉に直してから、担任の先生に提出しよう。",
    tags: ["進路"], student: true, teacher: true,
    url: "https://goldfish0824-web.github.io/hrt-future/", video: "", repo: "https://github.com/goldfish0824-web/hrt-future",
    mic: false, inClass: false, password: "", level: "大学入試・就職試験",
    group: "all", api: "author",
    teacherNote: "教員は添削役ではなく、素材・裏づけ・空欄を確認する側に回れます。紙のワークシート（B4両面）に手書き→入力→下書き生成→自分の言葉に直す→ロイロノートで担任に提出、の流れです。",
    license: "", isNew: false
  },
  {
    id: "jolly", name: "Jolly English（瞬間英作文）", color: "#ff5a5f",
    catch: "日本語を見て、すぐに英語で言う。瞬間英作文の練習動画",
    desc: "YouTubeで見られる練習動画です。スキマ時間に少しずつどうぞ。",
    tags: ["動画", "話す"], student: true, teacher: true,
    url: "", video: "", repo: "",
    mic: false, inClass: false, password: "", level: "",
    group: "english", api: "none",
    teacherNote: "YouTubeチャンネル「Jolly English」で公開している瞬間英作文の動画シリーズです。",
    license: "", isNew: false
  },
  {
    id: "chatgpt-adv", name: "ChatGPT英会話プロンプト（中〜上級版）", color: "#1a8f84",
    catch: "英語に自信がある人向けの、英会話練習用プロンプト集",
    desc: "",
    tags: ["話す"], student: false, teacher: true,
    url: "https://goldfish0824-web.github.io/harudake-eikaiwa/adv/", video: "", repo: "https://github.com/goldfish0824-web/harudake-eikaiwa",
    mic: false, inClass: false, password: "", level: "中〜上級",
    group: "english", api: "none",
    teacherNote: "先生自身の英会話練習に。高校生版と同じく、ChatGPT無料版で使えます。",
    license: "", isNew: false
  },
  {
    id: "tensaku-excel", name: "英作文AI一括添削（Excel）", color: "#1f7a4d",
    catch: "Excelに集めた英作文を、Claude APIでまとめて添削",
    desc: "",
    tags: ["書く"], student: false, teacher: true,
    url: "", video: "", repo: "",
    mic: false, inClass: false, password: "", level: "",
    group: "english", api: "byo",
    teacherNote: "VBAマクロからClaude APIを呼び出して一括添削し、結果はWordの差し込み印刷で返却用プリント（B5両面）にします。",
    license: "", isNew: false
  },
  {
    id: "form-plus", name: "英作文入力フォーム＋", color: "#64748b",
    catch: "英作文の入力フォームに、AI添削を組み込んだもの",
    desc: "",
    tags: ["書く"], student: false, teacher: true,
    url: "https://eisakubun-tensaku.goldfish0824.workers.dev/", video: "", repo: "",
    mic: false, inClass: false, password: "", level: "",
    group: "english", api: "byo",
    teacherNote: "各先生が自分でAPIキーを取得・入力して使う配布版を準備中です。",
    license: "", isNew: false
  },
  {
    id: "wordfighter", name: "ワードファイター", color: "#e4572e",
    catch: "英単語を声に出して発音すると拳がとどく、格闘ゲーム風の単語ゲーム",
    desc: "中1〜中2前半の英単語300語・全10ステージ。武器を持たない主人公レンが、声だけで十人の王に挑みます。マイクが使えないときはキーボードでも遊べます。",
    tags: ["単語", "話す"], student: true, teacher: true,
    url: "https://goldfish0824-web.github.io/word-fighter/", video: "", repo: "https://github.com/goldfish0824-web/word-fighter",
    mic: true, inClass: false, password: "", level: "中1〜中2前半の英単語300語",
    group: "english", api: "none",
    teacherNote: "家庭学習向けの英単語ゲーム。中学レベルの単語の復習に。音声認識を使います。言えなかった単語は自動で記録され、あとで復習できます。",
    license: "CC BY-NC-SA 4.0", isNew: false
  },
  {
    id: "shoronbun", name: "小論文入力フォーム", color: "#8b5e3c",
    catch: "生徒が書いた小論文に、AIが観点別評価・講評・添削の下書きを作る",
    desc: "",
    tags: ["進路", "書く"], student: false, teacher: true,
    url: "https://shoronbun-tensaku.goldfish0824.workers.dev/", video: "", repo: "",
    mic: false, inClass: false, password: "", level: "大学入試の小論文",
    group: "all", api: "author",
    teacherNote: "生徒はスマホ・PCで、入試に出そうなテーマ10個から選ぶか、課題を自分で入力して書きます。AIの評価・講評・添削は先生の下書き係で、先生が確かめて返却したものだけが生徒に見えます。先生用の画面は /teacher.html です。",
    license: "", isNew: false
  },
  {
    id: "sprout", name: "Sprout（AI英会話・高校生版）", color: "#4caf50",
    catch: "場面ごとのロールプレイを、AIとターン制で練習する英会話アプリ",
    desc: "",
    tags: ["話す"], student: false, teacher: true,
    url: "https://goldfish0824-web.github.io/eikaiwa-app/student-claude/", video: "", repo: "https://github.com/goldfish0824-web/eikaiwa-app",
    mic: true, inClass: false, password: "", level: "高校生向け・12場面×2レベル",
    group: "english", api: "author",
    teacherNote: "ヒントや日本語サポートを使いながら、AI（Claude）と英語でロールプレイします。使うにはパスワードが必要です。試験運用の前なので、生徒用ページにはまだ出していません。",
    license: "", isNew: false
  }
];
