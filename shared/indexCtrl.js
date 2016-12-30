(function(){
   'use strict';
    angular.module('appRudra').controller('indexCtrl', function ($rootScope){

        $rootScope.spinning = false;

        init();

        function init(){

          if($('html').hasClass('fp-enabled')){
                $.fn.fullpage.destroy('all');
            }

            $('#fullpage').fullpage();

        }
    });

})();
