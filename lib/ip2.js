const loc = require('ip2location-nodejs');
const db5 = require('@ip2.bin/db5lite');

module.exports = function ip2 (db = db5) {
  loc.IP2Location_init(db);

  return function (req, res, next) {
    req.geoip = loc.IP2Location_get_all(req.ip);
    next();
  };
};
