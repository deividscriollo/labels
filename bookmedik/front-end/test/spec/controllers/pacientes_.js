'use strict';

describe('Controller: PacientesCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('bookmedikApp'));

  var PacientesCtrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PacientesCtrlCtrl = $controller('PacientesCtrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PacientesCtrlCtrl.awesomeThings.length).toBe(3);
  });
});
