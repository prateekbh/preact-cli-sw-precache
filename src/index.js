const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const preactCliPrecachePlugin = (config, swPrecacheOptions) => {
    if (!config) {
        throw Error('Webpack config not given!')
    }
    if (!swPrecacheOptions) {
        throw Error('swPrecache options not given!')
    }
    const plugins = config.plugins;
    for (let pluginIndex = 0; pluginIndex < plugins.length; pluginIndex++) {
        const plugin = plugins[pluginIndex]
        if (plugin && plugin.options && plugin.options.cacheId){
            plugin.options = swPrecacheOptions
        }
    }
    return config
}

module.exports = preactCliPrecachePlugin