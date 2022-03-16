const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            hash: true
        }),
        new MiniCSSExtractPlugin()
    ],
    devtool: false, //nos permite ver de mejor manera el codigo en nuestro output
    entry: {
        index: "./src/index.js"
    },
    output: {
      filename: "index.bundle.js", // nombre del archivo que deseamos generar para nuestro bundle
      path: path.resolve(__dirname, "bundle"), //almacenamos nuestro output en un nuevo directorio dentro de nuestro root path
    },
    module: {

        rules:[{
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        {
            test: /\.(gif|png|jpe?g)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }
            ]
        }
    ]  } 
};