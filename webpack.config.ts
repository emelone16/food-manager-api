import path from "path"
import webpack from "webpack"

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  resolve: {
    alias: {
      types: path.resolve(__dirname, "src/types/"),
      routes: path.resolve(__dirname, "src/routes/")
    },
    extensions: [".ts", ".js"],
    modules: ["src", "node_modules"]
  },
  target: "node"
}

export default config
