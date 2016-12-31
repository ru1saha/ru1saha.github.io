/**
 * Created by saharudra.
 */

(function(){
   'use strict';
    angular.module('appRudra').controller('resumeCtrl',['$scope','$rootScope','$routeParams','$route', function($scope,$rootScope,$routeParams,$route){


        init();

        function init(){

            if($('html').hasClass('fp-enabled')){
                $.fn.fullpage.destroy('all');
            }

        }

    }]);

})();
