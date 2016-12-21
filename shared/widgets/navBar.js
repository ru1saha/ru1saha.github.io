/**
 * Created by rudasaha on 12/21/16.
 */
(function () {
    angular.module('appRudra').directive('nkNavBar', function () {
        return {
            restrict: 'AE',
            controller: 'homeCtrl',
            replace: 'true',
            templateUrl: 'shared/widgets/navBar.html',
            link: function (scope, element) {
                var items = element.find('li');
                items.on('click', function () {
                    items.removeClass('active');
                    $(this).addClass('active');
                });
            }

        };

    });


    angular.module('appRudra').directive('nkNavBarFooter', function () {
        return {

            restrict: 'AE',
            controller: 'homeCtrl',
            replace: 'true',
            templateUrl: 'shared/widgets/navBarFooter.html',
            link: function (scope, element) {
                var items = element.find('li');
                items.on('click', function () {
                    items.removeClass('active');
                    $(this).addClass('active');
                });
            }


        };


    });

}());
