import app from "./src/app";
import chalk from "chalk";

const PORT = process.env.PORT || 3000;

// Expressサーバーを起動
app.listen(PORT, () => {
  // ターミナルに出力されるログの見た目をいい感じにする
  console.log();
  console.log(`${chalk.green.bold("  Express")}${chalk.green(" v5.1.0")}`);
  console.log();
  console.log(
    `  ${chalk.green("➜")}  ${chalk.bold("Local")}:   ${chalk.magenta(
      `http://localhost:${PORT}/`
    )}`
  );
});
