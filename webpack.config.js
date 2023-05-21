const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/i, // for scss: test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // {
      //   test: /\.(wav|mp3|ogg)$/i,
      //   use: [
      //     {
      //       // loader: 'file-loader',
      //       options: {
      //         filename: 'win.[ext]',
      //         outputPath: 'assets/audio/', // Укажите путь для сохранения аудиофайлов
      //         publicPath: 'assets/audio/', // Укажите публичный путь для доступа к аудиофайлам
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: "index.html"
    }),
  ],
  devServer: {
    compress: true,
    port: 3000,
  },
}