const path = require('path');

module.exports = {
  entry: './source/index.js',

  output: {
    path: __dirname + '/build',
    filename: 'index.js',
  },
  devtool: 'source-map',

  devServer: {
    inline: true,
    port: 8080
  },
  
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'source')
        ],
        exclude: [
          path.resolve(__dirname + 'node_modules')
        ],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env', {
                  'targets': {
                    'browsers': ['Chrome >= 59']
                  }
                }
              ],
              '@babel/react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }]
      }
    ]
  }
}
