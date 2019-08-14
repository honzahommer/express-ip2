const { expect } = require('chai');
const httpMocks = require('node-mocks-http');

const ip2 = require('../lib/ip2');

describe('ip2', () => {
  it('req.geoip.ip = req.ip', done => {
    const req = httpMocks.createRequest({
      _parsedUrl: {
        pathname: '/'
      }
    });
    const res = httpMocks.createResponse();
    const next = function() {};

    ip2()(req, res, next);

    expect(req.geoip.ip).to.not.be.equal(req.ip);
    done();
  });
});