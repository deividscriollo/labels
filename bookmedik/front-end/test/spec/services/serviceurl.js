'use strict';

describe('Service: serviceUrl', function () {

  // load the service's module
  beforeEach(module('bookmedikApp'));

  // instantiate service
  var serviceUrl;
  beforeEach(inject(function (_serviceUrl_) {
    serviceUrl = _serviceUrl_;
  }));

  it('should do something', function () {
    expect(!!serviceUrl).toBe(true);
  });

});
