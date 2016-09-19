/// <reference path="../app.ts" />

namespace App.Service {

    class Custom {
        public static $inject: string[] = [];

        constructor() {
            return;
        }

        public get(): string {
            return "You got me!";
        }
    }

    export interface ICustom {
        get(): string;
    }

    export let NCustom: string = "CustomService";

    angular.module("app").service(NCustom, Custom);

}
