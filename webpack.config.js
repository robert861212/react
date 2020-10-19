const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: `./src/index.js`,
    output: {
      path: path.resolve(__dirname, './www'),
      filename: '[name].js',
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
            test: /\.jsx?$/,
            // loader: 'babel-loader',
            include: [
              path.resolve(__dirname, './src'),
              path.resolve(__dirname, './node_modules'),
            ],
            use: [{
                loader: 'babel-loader',
            }]
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loaders: ['file-loader'],
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            minify: {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            },
        })
    ],
}
