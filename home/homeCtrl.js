(function(){
    'use strict';
    angular.module('appRudra').controller('homeCtrl',['$scope','$rootScope','$routeParams','$route', '$location', function($scope,$rootScope,$routeParams,$route,$location){

        init();

        function init(){

            $('#fullpage').fullpage();

        //    https://github.com/alvarotrigo/fullPage.js
        }


    }]);

})();
