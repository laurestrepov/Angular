// Archivo principal de aplicación AngularJS
(function () {
  // Carga de Módulos
  var mainApp = angular.module('peopleManager', ['ui.router',
                                                'ui.gravatar',
                                                'ui.bootstrap',
                                                'ngStorage',
                                                'toaster',
                                                'peopleManager.login'])

  // Ruta por default
  mainApp.run(['$state', function ($state) {
    $state.transitionTo('login')
  }])

  mainApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('login', {
              url: '/login',
              templateUrl: 'components/login/views/loginView.html',
              controller: 'loginController'
          })
          .state('newaccount', {
             url: '/login/new',
             templateUrl: './components/login/views/newAccount.html',
             controller: 'newUserController'
         })
          .state('people', {

          })
        $urlRouterProvider.otherwise('login');
    }]);

})()
