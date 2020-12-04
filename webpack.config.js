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
                                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                                type: 'asset/resource',
                        },
                ],
        },
        plugins: [new Dotenv()],
};
