var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
 entry: './Src/app/js/index.ts',
 output: {
   filename: 'bundle.js',
   path: __dirname +'/dist/'
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     },
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 plugins: [
   new CopyWebpackPlugin([
            {
                from: 'src/*.html',
                to: __dirname+'/dist/',
                flatten:true
            }
  ]),new CopyWebpackPlugin([
            {
                from: 'src/app/css/*.css',
                to: __dirname+'/dist/',
                flatten:true
            }
  ])
 ]
};