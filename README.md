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
      'app/css/**.css',
      'app/**.html',
      'app/images/**.*',
      'app/js/**.js'
    ],
    stripPrefix: 'app/',
    runtimeCaching: [{
      urlPattern: /this\\.is\\.a\\.regex/,
      handler: 'networkFirst'
    }]
  };

  return preactCliSwPrecachePlugin(config, precacheConfig);
}
```
