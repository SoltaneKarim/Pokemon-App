var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  // `entry` gives a path to the file that is the "root" of the dependency
  // tree, since Webpack walks through your files and builds a bundle by
  // reading `require` statements in each of them. So think of `entry` as
  // the top-level file that then `requires` some other files, which then
  // `require` some other files, etc. Webpack pulls these all into a modularized
  // bundle.
  entry: `${SRC_DIR}/index.jsx`,

  // `output` is an object with options for the bundle that Webpack creates
  // out of your source files.
  output: {

    // `filename` tells Webpack what to call the file/files it outputs.
    filename: 'bundle.js',

    // `path` is a path to the directory where your bundle will be written.
    path: DIST_DIR
  },

  // `module` is an object with options for how Webpack processes the files it loads
  // when it scans a `require` statement. 99% of the time, `loaders` will be the only
  // thing you specify inside of `module`.
  module: {
    loaders: [
      {

        // `test` is a test condition that causes the rule to be applied when a
        // filename passes. In this case, when any filename contains either `.js` or `.jsx`
        // as its terminating characters, this rule will be applied.
        test: /\.jsx?/,

        // `include` lets you specify tests that, when passed by a filename, cause those
        // files to be transformed by the rules. There's also an `exclude` option
        // that works in the inverse way.
        include: SRC_DIR,

        // `loader` names the actual rules that is to be applied. In this case,
        // this object requires 'babel-loader' to do the transformation.
        // We could actually apply multiple loaders here by using the property `loaders`
        // instead of `loader`, which takes an array of loader names.
        // 
        // When you're declaring loaders in this field, you can leave off the `-loader` part
        // of the package name. Webpack will interpret `babel` as `babel-loader` here,
        // `coffee` as `coffee-loader`, etc. But you can also just write out `babel-loader`,
        // if you prefer.
        loader: 'babel-loader',
        
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
