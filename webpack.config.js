const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 8080;

module.exports = {
  mode:'development',
  entry:'./src/index.tsx',
  output:{
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  module:{
    rules:[
      {
        test:/.(ts|tsx)$/,
        loader:['ts-loader']
      },
      { // 첫번째 룰
        test:/.js?$/,
        exclude:/node_modules/,
        use:['babel-loader']
      },
      { // 두번째 룰
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext].[hash]",
              publicPath: "/dist",
              limit: 200000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico' 파비콘은 준비가 되어있지 않아 주석처리합니다.
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    historyApiFallback: true
  },
};