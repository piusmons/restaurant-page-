const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  {
  test: /\.(mov|mp4)$/,
  use: ['file-loader'],
    {
      loader: 'file-loader',
      options: {
        name: '[drizzle].[mp4]'
      }
    }

},
  mode:'development'}
