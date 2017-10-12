{
    "name": "default",
    "addServiceWorker": true,
    "insertPrefetchLinks": true,
    "swPrecacheConfig": "sw-precache-config.js",
    "js": {
      "compile": false,
      "minify": true
    },
    "css": {
      "minify": true
    },
    "html": {
      "minify": true
    }
  },
  ,
  {
    "name": "dev",
    "addServiceWorker": true,
    "swPrecacheConfig": "sw-precache-config.js"
  },
  {
    "name": "bundled",
    "bundle": true,
    "addServiceWorker": true,
    "swPrecacheConfig": "sw-precache-config.js",
    "js": {
      "minify": true
    },
    "css": {
      "minify": true
    },
    "html": {
      "minify": true
    }
  },
  {
    "name": "unbundled",
    "addServiceWorker": true,
    "swPrecacheConfig": "sw-precache-config.js",
    "js": {
      "minify": false
    },
    "css": {
      "minify": true
    },
    "html": {
      "minify": true
    }
  }