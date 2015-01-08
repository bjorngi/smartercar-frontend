'use strict';

describe('Directive: mediaPlayer', function () {

  // load the directive's module
  beforeEach(module('smartercarApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<media-player></media-player>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mediaPlayer directive');
  }));
});
