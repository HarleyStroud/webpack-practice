// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",                            // filename of the output bundle.
        path: path.resolve(__dirname, "dist"),          // Path to output directory (dist). Directory will be created automatically if it doesn't exist.
        clean: true,                                    // Option to empty the output directory every time Webpack runs, so dist only contains files produced by the most recent bundling.
    },
    devtool: "eval-source-map",                         // Adds source map which allows source files to be seen in chrome devtools and makes error messages contain accurate file names and line numbers.
    devServer: {
        watchFiles: ["./src/template.html"],            // Adds html file to files that should be watched for changes that should trigger auto-bundling.
    },
    plugins: [
        new HtmlWebpackPlugin({                         // Package for loading HTML.
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],    // Loaders to process CSS file.
            },
            {
                test: /\.html$/i,                       // Package for loading image files.
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gifs)$/i,    // Package for loading image files used in JavaScript.
                type: "assets/resource",
            }
        ],
    },
};