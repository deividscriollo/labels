'use strict';

describe('Service: servicePacientes', function () {

  // load the service's module
  beforeEach(module('bookmedikApp'));

  // instantiate service
  var servicePacientes;
  beforeEach(inject(function (_servicePacientes_) {
    servicePacientes = _servicePacientes_;
  }));

  it('should do something', function () {
    expect(!!servicePacientes).toBe(true);
  });

});
