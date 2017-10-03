# preact-cli-sw-precache
Preact cli plugin for configuring [sw-precache](https://github.com/GoogleChrome/sw-precache).

This plugin allows you to customize the behaviour of auto bundled `sw-precache` module.
You can specify all the custom config that `sw-precache` accepts and hence make your service worker more powerful.

## Getting started
```
npm i -D preact-cli-sw-precache
```

## Example
In order to provide custom confguration, add the following code to preact.config.js. :point_down:

```js
const preactCliSwPrecachePlugin = require('preact-cli-sw-precache');

export default function (config) {
  const precacheConfig = {
    staticFileGlobs: [
        'build/*.css',
        'build/*.js',
        'build/*.html',
        'build/assets/logo.png',
      ],
      stripPrefix: 'build/',
      minify: true,
      navigateFallback: 'start.html',
      runtimeCaching: [{
        urlPattern: /.(wav|png)/,
        handler: 'cacheFirst'
      }],
      filename: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      staticFileGlobsIgnorePatterns: [
        /polyfills(\..*)?\.js$/,
        /\.map$/,
        /push-manifest\.json$/,
        /.DS_Store/
      ]
  };

  return preactCliSwPrecachePlugin(config, precacheConfig);
}
```
