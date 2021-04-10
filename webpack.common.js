const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: {
       index:"./src/js/index.js",
       card:"./src/js/card.js",
       apod : "./src/js/apod.js",
       insight : "./src/js/insight.js",
       astronomy : "./src/js/astronomy.js",
       news : "./src/js/news.js"
    },
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "[name].bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           },
           {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          }
       ]
   },
   plugins: [
        new HtmlWebpackPlugin({
           template: "./src/html/index.html",
           filename: "index.html",
           chunks : ['index']
        }),
        new HtmlWebpackPlugin({
            template: "./src/html/card.html",
            filename: "card.html",
            chunks : ['card']
        }),
        new HtmlWebpackPlugin({
            template: "./src/html/apod.html",
            filename: "apod.html",
            chunks : ['apod']
        }),
        new HtmlWebpackPlugin({
            template: "./src/html/insight.html",
            filename: "insight.html",
            chunks : ['insight']
        }),
        new HtmlWebpackPlugin({
            template: "./src/html/astronomy.html",
            filename: "astronomy.html",
            chunks : ['astronomy']
        }),
        new HtmlWebpackPlugin({
            template: "./src/html/news.html",
            filename: "news.html",
            chunks : ['news']
        })
    ]
}