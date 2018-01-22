(function () {
    'use strict';

    angular
        .module('jhipsterAngularApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
