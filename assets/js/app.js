/// <reference path="../../typings/index.d.ts" />
var App;
(function (App) {
    angular.module("app", []);
})(App || (App = {}));

/// <reference path="../app.ts" />
var App;
(function (App) {
    var Service;
    (function (Service) {
        var Custom = (function () {
            function Custom() {
                return;
            }
            Custom.prototype.get = function () {
                return "You got me!";
            };
            Custom.$inject = [];
            return Custom;
        }());
        Service.NCustom = "CustomService";
        angular.module("app").service(Service.NCustom, Custom);
    })(Service = App.Service || (App.Service = {}));
})(App || (App = {}));

/// <reference path="../app.ts" />
/// <reference path="../Service/Custom.ts" />
var App;
(function (App) {
    var Controller;
    (function (Controller) {
        "user strict";
        /**
         * Main controller
         */
        var ToDoController = (function () {
            function ToDoController($scope, $log, CustomService) {
                $scope.message = CustomService.get();
                $log.info($scope);
            }
            ToDoController.$inject = [
                "$scope",
                "$log",
                App.Service.NCustom,
            ];
            return ToDoController;
        }());
        angular.module("app").controller("ToDoController", ToDoController);
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));

//# sourceMappingURL=app.js.map
