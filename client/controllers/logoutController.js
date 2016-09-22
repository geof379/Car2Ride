angular.module('Car2Ride').controller('logoutController',
        ['$scope', '$location', 'AuthService',
            function ($scope, $location, AuthService) {

                $scope.logout = function () {

                    // call logout from service
                    AuthService.logout()
                            .then(function () {
                                $location.path('/login');
                            });

                };

            }]);