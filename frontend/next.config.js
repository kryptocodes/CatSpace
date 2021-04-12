const withPlugins = require('next-compose-plugins');
const OptimizedImages = require('next-optimized-images');
const withSourceMaps = require( '@zeit/next-source-maps' );

const customConfig = {
    devIndicators: { autoPrerender: false },

    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };
        return config

    },

    generateInDevMode: false,
    workboxOpts: {
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 5000000,
        runtimeCaching: [
            {
                urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'images',
                    expiration: {
                        maxEntries: 10,
                    },
                },
            },
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                        maxEntries: 200,
                    },
                },
            },
        ],
    }

};

module.exports = withPlugins([
    [withSourceMaps],
    [OptimizedImages],
], customConfig);
