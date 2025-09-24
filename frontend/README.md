# 課題 07 映画サイト frontend

## ディレクトリ構成

frontend/                         # Viteで作成
├─ index.html                     # トップページ
├─ about.html                     # 詳細ページ
├─ special.html                   # 特設ページ
├─ news.html                      # ニュースページ
├─ css/
│   ├─ global.css                 # 共通スタイル
│   └─ XXX.css                    # ページ固有スタイル（XXX = htmlファイル名）
├─ public/
│   └─ images/
│       ├─ global/                # 共通の画像素材
│       └─ XXX/                   # ページ固有の画像素材
├─ typescript/
│   ├─ global.ts                  # 共通スクリプト
│   └─ XXX.ts                     # ページ固有スクリプト
├─ src/
│   ├─ tailwind.css               # Tailwindの読み込み・カスタムクラス定義
│   ├─ components/                # 共通UIコンポーネント
│   ├─ pages/
│   │   ├─ top/
│   │   │   ├─ components/        # topページ専用コンポーネント
│   │   │   └─ main.tsx           # index.htmlのエントリーポイント
│   │   └─ XXX/
│   │       ├─ components/        # XXXページ専用コンポーネント
│   │       └─ main.tsx           # XXX.htmlのエントリーポイント
│   └─ types/                     # TypeScriptの型定義
└─ package.json


## 使用技術

- axios                       ExpressサーバーにGETリクエストを送信

- date-fns　　　　　　　　　　　Dateオブジェクトを適当な文字列に整形

- motion                      アニメーションを実装

- react                       uiを実装

- react-icons                 アイコンライブラリ

- react-markdown,react-gfm    マークダウン形式の文字列を解釈して画面描画

- swiper                      スライダーを実装

- tailwindcss                 スタイリング

