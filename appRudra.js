(function () {
    'use strict';
    angular.module('appNakul', ['ngRoute' ])
        .config(function ($routeProvider) {
            $routeProvider.when('/home', {
                title: 'Home',
                templateUrl: 'home/home.html',
                controller: 'homeCtrl'
            })
                .when('/resume', {
                    title: 'Resume',
                    templateUrl: 'resume/resume.html',
                    controller: 'resumeCtrl'
                })

                .otherwise({
                    redirectTo: '/home'
                });
            // $httpProvider.interceptors.push('httpInterceptor');
        })
        .run(function($rootScope){
            $rootScope.$on("$routeChangeSuccess",function(event, current,previous){
                document.title =current.title;

            });
        });
}());


