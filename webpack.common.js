const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/Index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash].js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
  ],
};
