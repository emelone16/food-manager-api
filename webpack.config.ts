import webpack from "webpack";

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
    path: "/home/erik/Desktop/Projects/food-manager-api/build/"
    // path: path.resolve(__dirname, "build")
  },
  resolve: {
    alias: {
      types: "/home/erik/Desktop/Projects/food-manager-api/src/types/",
      routes: "/home/erik/Desktop/Projects/food-manager-api/src/types/"
      // types: path.resolve(__dirname, "src/types/"),
      // routes: path.resolve(__dirname, "src/routes/")
    },
    extensions: [".ts", ".js", ".json"],
    modules: ["src", "node_modules"]
  },
  target: "node"
};

export default config;
