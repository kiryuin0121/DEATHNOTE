import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
// router
import newsRoute from "./routes/newsRoute";
import specialRoute from "./routes/specialRoute";
import trailerRoute from "./routes/trailerRoute";
import personRoute from "./routes/personRoute";
import songRoute from "./routes/songRoute";
const app = express();

// グローバルミドルウェアを登録
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); //frontend側との通信を許可
app.use(helmet()); //セキュリティを強化
app.use(morgan("common")); //リクエストが来た際、ターミナル上にログを出力

// 各リソースごとのルートハンドラーを登録
app.use("/api/news", newsRoute); //ニュース記事
app.use("/api/specials", specialRoute); //スペシャル記事
app.use("/api/trailers", trailerRoute); //予告動画
app.use("/api/persons", personRoute); //登場人物と演者
app.use("/api/songs", songRoute); //曲

// hello world
app.get("/", (_req: Request, res: Response) => {
  res.send("OH_IT11B506_20/backend");
});
export default app;
