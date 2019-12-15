const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    // donde inicia el archivo
    app: path.join(__dirname, 'src', 'index.js')
  },
  output: {
    // Donde va enviar los archivos
    path: path.join(__dirname, 'dist'),
    // como se van a llamar los archivos
    filename: 'js/[name].[hash].js', // quedaría app.js
    publicPath: '/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  // configurar loaders
  module: {
    rules: [
      {// configuracion de js
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        // configuracion de imagenes, videos y fuentes
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000, // limite de peso de archivo (bytes)
            fallback: 'file-loader',
            name: '[name].[hash].[ext]',
            outputPath: 'assets'
          }
        }]
      },
      {
        // configuracion de imagenes y fuentes
        test: /\.(ico)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets'
          }
        }]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin()
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!**/js*', '!**/modules.*'],
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: 'Takay',
      template: path.join(__dirname, 'src', 'index.html'),
      // favicon: path.join(__dirname, 'src', 'img/favicon.ico'),
      filename: 'index.html' // salida del archivo
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    hot: false,
    port: 8081,
    inline: true,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true
  }
}
