const { webpackConfig, environment} = require('@rails/webpacker')

webpackConfig.module.rules = [
    ...webpackConfig.module.rules,
    {
        test: /\.coffee$/,
        use: ["babel-loader", "coffee-loader"]
    }
]

console.log("------>")
console.log(webpackConfig.module.rules)
console.log("<------")

module.exports = webpackConfig
