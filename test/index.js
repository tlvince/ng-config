'use strict';

var ngConfig = require('../');

describe('ng-config', function() {
  it('return an Angular module as a string', function() {
    var actual = ngConfig();
    var expected = '(function() {\n    \'use strict\';\n\n    angular.module(\'config\');\n\n})();';
    actual.should.equal(expected);
  });

  it('should produce constant blocks', function() {
    var options = {
      constants: {
        shallow: 'test',
        db: {
          url: 'example.com'
        }
      }
    };
    var actual = ngConfig(options);
    actual.should.endWith('example.com"\n        });\n\n})();');
  });
});
