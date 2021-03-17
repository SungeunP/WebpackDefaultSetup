const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production', // 'production', 'development'
  // entry: [
  //     './js/index.js',
  //     './js/index_2.js'
  // ], // Start point
  entry: './js/index.js', // Start point
  output: { // Set output path of bundled file
    path: path.resolve(__dirname, 'dist'), // Output path
    filename: 'bundle.js' // Output file name
  },
  devServer: { // Dev server option
    port: 3001, // Port
    writeToDisk: true
  },
  plugins: [ // Webpack plugins
    new HtmlWebpackPlugin({ // Apply html-webpack-plugin
      template: path.resolve(__dirname, 'index.html'), // From template path
      filename: path.resolve(__dirname, 'dist/index.html'), // Create template path
      inject: true // Inject bundled js file (default set: true)
    })
  ],
  optimization: { // Optimization
    minimize: true // No minify
  }
}