

// Declare app level module which depends on views, and components
angular.module('PrintHen', [
  'ui.router',
  'PrintHen.logs_page',
   'PrintHen.app',
   'PrintHen.myApp',
   'PrintHen.print_history'

])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/logs');
    
    $stateProvider
        
 
        .state('logs_page', {
        url: '/logs',
        templateUrl : 'logs_page/logs_page.html',
        controller  : 'HttpGetController'
      })

      // route for the history page
      .state('/printhistory', {
        url: '/printhistory',
        templateUrl : 'print_history/printhistory.html',
        controller  : 'subController'
      });
              
});
