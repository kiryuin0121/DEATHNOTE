# 課題 07 映画サイト backend

## ディレクトリ構成

backend/
├─ index.ts                        # サーバー起動用のエントリーポイント
├─ src/
│   ├─ app.ts                      # Expressアプリ本体（ミドルウェア設定とルートハンドラー登録）
│   ├─ lib/
│   │   └─ prisma.ts               # PrismaClient（DBクライアント）を生成・輸出
│   ├─ routes/
│   │   └─ XXXController.ts        # 各リソースに対するルーティング設定(XXX=リソース名)
│   │   └─ newsController.ts       # ニュース記事
│   │   └─ personController.ts     # 登場人物(キャラクター、キャスト)
│   │   └─ songsController.ts      # 楽曲(曲、アーティスト、歌詞)
│   │   └─ specialController.ts    # スペシャル記事
│   │   └─ trailercontroller.ts    # 予告映像
│   └─ controllers/
│       └─ XXXController.ts        # 各リソースに対するhttpリクエストごとの具体的な処理(XXX=リソース名)
├─ prisma/
│   ├─ schema.prisma               # Prismaスキーマ（DBのモデル定義）
│   ├─ dev.db                      # SQLiteの開発用DBファイル(npx prisma studioと入力するとGUIツールで閲覧可能)
│   └─ seed.ts                     # 初期データ投入スクリプト
└─ package.json


## 使用技術

- express          api実装

- prisma           db操作

- sqlite           開発用データベース

- dotenv           環境変数の読み込み

- morgan           httpリクエストが来た際にターミナル上にログを出力

- helmet           セキュリティ強化

- cors             frontendとの通信を許可

- chalk            サーバーを起動したときに出る文字列の見た目を変更

- ts-node-dev      index.tsを実行(変更を検知したら自動的に再起動)

