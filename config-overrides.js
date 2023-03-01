const path = require('path')
const addLessLoader = require('customize-cra-less-loader')
const { override, addWebpackAlias, addWebpackModuleRule } = require('customize-cra')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = override(
  addWebpackAlias({ '@': path.resolve(__dirname, 'src') }),
  addWebpackModuleRule({
    test: /\.svg$/,
    include: [resolve('src/icons')],
    use: [
        {
            loader: 'svg-sprite-loader',
            options: {
                extract: true,
                symbolId: 'icon-[name]'
            }
        }
    ]
  }),
  addLessLoader()
)
