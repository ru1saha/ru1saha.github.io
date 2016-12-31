/**
 * Created by rudra on 12/30/16.
 */
(function(){
    'use strict';
    angular.module('appRudra').controller('aboutCtrl',['$scope','$rootScope','$routeParams','$route', function($scope,$rootScope,$routeParams,$route){


        init();

        function init(){

            if($('html').hasClass('fp-enabled')){
                $.fn.fullpage.destroy('all');
            }

        }

    }]);

})();