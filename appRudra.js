(function () {
    'use strict';
    angular.module('appRudra', ['ngRoute' ])
        .config(function ($routeProvider) {
            $routeProvider.when('/home', {
                title: 'Rudra Saha',
                templateUrl: 'home/home.html',
                controller: 'homeCtrl'
            })
                .when('/resume', {
                    title: 'Resume',
                    templateUrl: 'resume/resume.html',
                    controller: 'resumeCtrl'
                })
                .when('/about', {
                    title: 'About me...',
                    templateUrl: 'about/aboutme.html',
                    controller: 'aboutCtrl'
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


