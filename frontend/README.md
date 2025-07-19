# 3 校合同学内コンテスト(映画情報サイト)

## プロジェクトの実行・閲覧手順

1. zip ファイルを解凍し、プロジェクトの frontend ディレクトリに移動してください。

2. ターミナルを開き、以下のコマンドを入力して依存関係をインストールしてください：

   ```bash
   npm install
   ```

3. 続けて以下のコマンドを入力してローカルサーバーを起動してください：

   ```bash
   npm run dev
   ```

   または

   ```bash
   npx vite
   ```

4. ターミナルに表示される URL（`http://localhost:5173`）をブラウザで開いてください。

5. 各ページへのアクセス方法：
   - トップページ: `http://localhost:5173/`
   - セカンドページ: `http://localhost:5173/second.html`
   - サードページ: `http://localhost:5173/third.html`

## プロジェクト概要

- HTML/CSS に関するコードはプロジェクトのルートディレクトリに、React に関するコードは src ディレクトリ配下に配置しています。

- 動的・複雑な UI は React で作成し、HTML ファイル内の以下の形式のコメント部分に挿入されます：

```html
<!-- ⚛️ XXX ⚛️ -->
<div id="XXX"></div>
```

※ XXX は React エントリーポイントで指定したコンポーネント ID に対応

## プロジェクト構成

### 各 HTML ファイルで読み込んでいる CSS ファイル

```
css/
├── style.css           # トップページ用スタイル
├── second.css          # セカンドページ用スタイル
└── third.css           # サードページ用スタイル
```

### 静的ファイル

```
public/
└── images/             # 画像・アイコン類を格納
```

### React に関するソースコード

```
src/
├── pages/              # ページ別コンポーネント
│   ├── home/           # ホームページ関連
│   │   ├── main.tsx    # ⚛️ React エントリーポイント
│   │   └── components/ # ホーム固有コンポーネント
│   │
│   ├── second/         # セカンドページ関連
│   │   ├── main.tsx    # ⚛️ React エントリーポイント
│   │   └── components/ # セカンド固有コンポーネント
│   │
│   └── third/          # サードページ関連
│       ├── main.tsx    # ⚛️ React エントリーポイント
│       └── components/ # サード固有コンポーネント
│
└── tailwind.css        # TailwindCSS本体の読み込み&独自クラス定義
```

### HTML エントリーポイント

```
├── index.html          # ⭐ トップページ (/)
├── second.html         # セカンドページ (/second)
└── third.html          # サードページ (/third)
```

## 全体構成

```
frontend/
├── css/
│   ├── style.css
│   ├── second.css
│   └── third.css
│
├── public/
│   └── images/
│
├── src/
│   ├── pages/
│   │   ├── home/
│   │   │   ├── main.tsx
│   │   │   └── components/
│   │   ├── second/
│   │   │   ├── main.tsx
│   │   │   └── components/
│   │   └── third/
│   │       ├── main.tsx
│   │       └── components/
│   └── tailwind.css
│
├── index.html
├── second.html
└── third.html
```
