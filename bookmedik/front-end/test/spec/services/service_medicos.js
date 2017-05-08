'use strict';

describe('Service: serviceMedicos', function () {

  // load the service's module
  beforeEach(module('bookmedikApp'));

  // instantiate service
  var serviceMedicos;
  beforeEach(inject(function (_serviceMedicos_) {
    serviceMedicos = _serviceMedicos_;
  }));

  it('should do something', function () {
    expect(!!serviceMedicos).toBe(true);
  });

});
