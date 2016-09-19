/// <reference path="../app.ts" />
/// <reference path="../Service/Custom.ts" />

module App.Controller {
    "user strict";

    /**
     * Main controller
     */
    class ToDoController {

        public static $inject: string[] = [
            "$scope",
            "$log",
            Service.NCustom,
        ];

        constructor($scope: ToDoScope, $log: ng.ILogService, CustomService: Service.ICustom) {

            $scope.message = CustomService.get();

            $log.info($scope);

        }

    }

    angular.module("app").controller("ToDoController", ToDoController);

    interface ToDoScope extends ng.IScope {
        message: string;
    }

}
