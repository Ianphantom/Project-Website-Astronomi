const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
 
module.exports = merge(common, {
   mode: "production",
   module: {
       rules: [
           {
               test: /\.js$/,
               exclude: "/node_modules/",
               use: [
                   {
                       loader: "babel-loader",
                       options: {
                           presets: ["@babel/preset-env"]
                       }
                   }
               ]
           }
       ]
   },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'assets/image'),
                    to: path.resolve(__dirname, 'dist/assets/image')
                },
                {
                    from: path.resolve(__dirname, 'pages'),
                    to: path.resolve(__dirname, 'dist/pages')
                }
            ]
        })
    ]
})