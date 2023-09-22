const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js"
    },
    mode: "production",
    stats: {
        children: false,
        modules: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.js',
            filename: 'index.html'
        }),
    ],
    devServer: {
        static: "./dist",
        port: 3001,
        hot: false,
        open: true,
        allowedHosts: "all",
        client: {
            logging: "info",
        },
    },
};