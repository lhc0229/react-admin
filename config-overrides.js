const path = require('path')
const addLessLoader = require("customize-cra-less-loader");
const { override, addWebpackAlias } = require('customize-cra');
module.exports = override(
    addWebpackAlias( { '@' : path.resolve(__dirname, "src") }),
    addLessLoader()
)
