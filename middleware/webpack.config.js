import nodeExternals from 'webpack-node-externals';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const config = {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  externalsPresets: {
    node: true // in order to ignore built-in modules like path, fs, etc. 
 },
  entry: {
    'index': './index.js' 
  },
  devServer: {
    port: 8080,
    host: '192.168.1.10',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs-module'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        
        options: {
          presets: [
            ['@babel/preset-env', {
              'targets': {
                'node': 'current'
              }
            }]
          ]
        }
      }
     
    }]
  },
  resolveLoader: {
    modules: ['node_modules']
}
}

export default [config]