(function (){
  var login= angular.module('peopleManager.login')
  login.controller('loginController', ['$scope',
                                        '$state',
                                        '$stateParams',
                                        'userFactory',
                                        'toaster',
                                        '$sessionStorage',
                                        '$localStorage',
  function ($scope, $state, $stateParams, userFactory, toaster, $sessionStorage, $localStorage) {
    $scope.user = {}

    $scope.login = function () {
      $scope.isEnrolled = false //creo e inicializo la variable
      if ($scope.user && $scope.user.email && $scope.user.password) {
        $scope.isEnrolled = userIsEnrolled()
      }

      if ($scope.isEnrolled) {
        $sessionStorage.currentUser = $scope.user// Guarda cosas en el browser
        toaster.success('Login successful')// mostrar en pantalla
        $state.go('people')// estado definido en las rtas del app.js. Cambio de url
      } else {
        toaster.error('User does not exist')// mostrar en pantalla
      }
    }

    function userIsEnrolled () {
      var enrolled = false
      $scope.users = $localStorage.users
      for(var i = 0; i < $scope.users.length; i++) {
        if(($scope.users[i].email === $scope.user.email) &&
            ($scope.users[i].password === $scope.user.password)) {
          enrolled = true
          $scope.user = $scope.users[i]
          break;
        }
      }
      return enrolled
    }


  }])
})()
