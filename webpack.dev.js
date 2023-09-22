const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js"
    },
    mode: "development",
    stats: {
        children: false,
        modules: false,
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.js',
            filename: 'index.html'
        }),
    ],
    devServer: {
        static: "./dist",
        port: 3001,
        hot: true,
        open: true,
        allowedHosts: "all",
        client: {
            logging: "info",
        },
    },
};