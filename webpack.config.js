const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), //nosso arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'public'), //vai jogar o bundle - o código que foi transpilado para o navegador
    filename: 'bundle.js', //arquivo bundle/output
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: { //dentro do module vamos informar ao webpack o que ele deve utilizar para cada tipo de arquivo
    rules: [
      {
        test: /\.js$/,//para arquivos JS vamos utilizar o babel - para que ele possa transpilar para que o navegador interprete. Estamos passando a expressão regular que informa qual é a extensão dos arquivos
        exclude: /node_modules/, //os arquivos que estão no node_modules já estão transpilados pelo babel na maioria das vezes
        use: {
          loader: 'babel-loader', //para arquivos JS utilize o babel-loader
        }
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, //loaders para arquivos CSS
          { loader: 'css-loader' }, //
        ]
      }, {
        test: /.*\.(gif|png|jpe?g)$/i, //aceita imagens com extensão .gif, .png, .jpg e .jpeg
        use: [
          { loader: 'file-loader' }, //loader para upload de imagens
        ]
      }
    ]
  }
};