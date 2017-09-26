
var routerApp = angular.module('routerApp', ['ui.router', 'oc.lazyLoad']);
routerApp.config(['$ocLazyLoadProvider', '$compileProvider', function ($ocLazyLoadProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $ocLazyLoadProvider.config({
        debug: true,
        events: false
    });
}])
routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider

        .state('dashboard', {
            url: '/dashboard',
            controller: 'dashboardCtrl',
            templateUrl: 'components/dashboard/dashboard.html',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'components/dashboard/dashboardSvc.js',
                        'components/dashboard/dashboardCtrl.js'
                    ]);
                }]
            }
        })
});