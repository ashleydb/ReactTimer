//On the command line we just need to call webpack
// which will use this config to build app.jsx and dependencies into bundle.js,
// having babel convert our jsx into js through react.

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    //Where script!, (or style! or css! etc.) are used, that means use a loader, (e.g. script-loader module,) to pull in these files.
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    //If webpack finds reference to $ or jQuery in our code, load in the jquery module.
    new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      //The resolve.alias settings means we can just require <name> rather than './component/<name>'
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Clock: 'app/components/Clock.jsx',
      Controls: 'app/components/Controls.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        //loaders.test is a regex to see which files this loader should apply to.
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  //'eval-source-map' lets us debug the code as written, rather than in bundle.js.
  // Only applies during development, since it is a devtool setting.
  devtool: 'eval-source-map'
}
