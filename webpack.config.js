const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.ttf$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext][query]'
                }
            }
        ]
    }
};