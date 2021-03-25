const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: {
       index:"./src/index.js",
       card:"./src/card.js"
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
           template: "./src/index.html",
           filename: "index.html",
           chunks : ['index']
       }),
       new HtmlWebpackPlugin({
        template: "./src/card.html",
        filename: "card.html",
        chunks : ['card']
    })
   ]
}