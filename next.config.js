const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const urlPrefix = isProd ? process.env.DOMAIN : 'http://localhost:3000'

const nextConfig = {
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,
    ]
    return config
  },
  env: {
    URLPREFIX: urlPrefix,
  },
  publicRuntimeConfig: {
    urlPrefix: urlPrefix,
  },
}

const config = nextConfig

module.exports = config
