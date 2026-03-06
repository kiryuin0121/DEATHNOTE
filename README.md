# 課題 07 映画サイト

## プロジェクトの実行・閲覧方法

1. zip ファイルを解凍し、プロジェクトのルートディレクトリに移動してください。(Node.js のバージョンは、v22.14.0 です)

2. ターミナルを開き、以下のコマンドを入力し依存関係をインストールしてください：
   `npm install`

3. 続けて以下のコマンドを入力し、数十秒～数分待機してください。(frontend & backend ディレクトリ内の依存関係を一括インストールした後、それぞれの開発用サーバーを一括起動)：
   `npm start`

4. ターミナルに表示される 水色の URL（`http://localhost:5173`）にアクセスしてください。(水色：frontend,ピンク色:backend)

5. 2 回目以降は`npm run dev`と入力することで実行・閲覧が可能です。

## プロジェクトの概要

### frontend(詳細は frontend/README.md)

- HTML/CSS に関するコードは frontend ディレクトリ直下にある html,css ファイルに記述しています。

- 画像などの素材は public ディレクトリ内に配置しています。

- 動的・複雑な UI は React で実装しており、それらは HTML ファイル内の以下の形式のコメント部分に組み込まれます：

```html
<!-- ⚛️ React:XXX ⚛️ -->
<div id="XXX"></div>
```

※ id は、React エントリーポイント(frontend/src/pages/XXX/main.ts)で指定したコンポーネントの id に対応

- React に関するコードは frontend/src ディレクトリ配下に配置しています。

### backend(詳細は backend/README.md)

- Express を用いて API を作成しています。

- backend/index.ts で サーバーを起動しています。Express サーバーの具体的な実装については backend/src 配下で行っています。

- DB モデルに関する記述は、`backend/prisma/shcema.prisma`で行っています。
# Three-school-joint-intramural-contest
# DeathNote
