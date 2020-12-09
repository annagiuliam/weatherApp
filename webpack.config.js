const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
        mode: 'development',
        entry: './src/index.js',
        output: {
                filename: 'main.js',
                path: path.resolve(__dirname, 'dist'),
        },
        devtool: 'inline-source-map',
        devServer: {
                contentBase: './dist',
        },
        module: {
                rules: [
                        {
                                test: /\.(s*)css$/,
                                use: ExtractTextPlugin.extract({
                                        fallback: 'style-loader',
                                        use: ['css-loader', 'sass-loader'],
                                }),
                        },
                        {
                                test: /\.(png|jp(e*)g|svg)$/,
                                use: [
                                        {
                                                loader: 'url-loader',
                                                // options: {
                                                //         limit: 8000, // Convert images < 8kb to base64 strings
                                                //         name: 'images/[hash]-[name].[ext]',
                                                // },
                                        },
                                ],
                        },
                ],
        },
        plugins: [new Dotenv()],
};
