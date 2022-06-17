const mode = process.env.NODE_ENV || 'development';
console.log('mode ', mode);

module.exports = {
  mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    static: "./dist",
  },
};
