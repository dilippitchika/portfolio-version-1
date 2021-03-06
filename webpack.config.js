const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                } 
            }]
        },
        {
            test: /\.woff$/,
            use: [{
              loader: "url-loader",
              options: {
                limit: 50000,
              }
            }]
          },
    {
        test:/\.s?css$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    }
};