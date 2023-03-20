const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const mf = require('@angular-architects/module-federation/webpack');
// const path = require('path');

module.exports = {
  output: {
    uniqueName: 'angulardemo',
    publicPath: 'auto',
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: "angulardemo",
      filename: "remoteEntry.js",
      exposes: {
          './AngularDemoApp': '/src/bootstrap.ts',
      },
    }),
  ]
};