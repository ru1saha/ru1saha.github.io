(function(){
    'use strict';
    angular.module('appRudra').controller('homeCtrl',['$scope','$rootScope','$routeParams','$route', '$location', function($scope,$rootScope,$routeParams,$route,$location){

        init();

        function init(){

            if (typeof $.fn.fullpage.destroy == 'function') {
                $.fn.fullpage.destroy('all');
            }

            $('#fullpage').fullpage();

           // https://github.com/alvarotrigo/fullPage.js
        }


    }]);

})();
