# express-ip2

[![npm version][npm-image]][npm-url]
[![npm download][downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/honzahommer/express-ip2.svg)](https://greenkeeper.io/)

> Express middleware to add req.geoip object, which contains results of IP2 database lookup.

## Usage

In `app.js`

	const ip2 = require('express-ip2');

	app.use(ip2('path/to/db.bin'));

Then, in your routes, check `req.geoip` for the lookup results.

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-ip2.svg
[npm-url]: https://npmjs.org/package/express-ip2
[travis-image]: https://img.shields.io/travis/honzahommer/express-ip2/master.svg
[travis-url]: https://travis-ci.org/honzahommer/express-ip2
[downloads-image]: https://img.shields.io/npm/dm/express-ip2.svg