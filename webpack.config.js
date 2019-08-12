const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        "./src/js/index.js"
    ],
    output: {
        filename: "./js/bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src/js"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: "env"
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        publicPath: function(url) {
                            return url.replace('fonts/', '../fonts/')
                        },
                    }
                }]
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                        publicPath: function(url) {
                            return url.replace('img/', '../img/')
                        }
                    }
                }]
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('css/styles.css')
    ]
};
