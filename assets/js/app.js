(function(){

    var app = angular.module('myApp', []).config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    });

    /* DELETE THIS CONTROLLER AND START WORKING ON YOUR APP */
    app.controller('DemoController', function() {
        this.ready = "Angular.JS works!";
        this.notes = [
            'Running version: ' + angular.version.full,
            'Because Twig uses double curly braces, Angular star and end symbols are set to: {[{ and }]}',
            'Open assets/js/app.js and start working on your Angular app'
        ];
    });

})();