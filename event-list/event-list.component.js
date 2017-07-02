/**
 * Created by dpesmdr on 7/2/17.
 */
angular.
    module('eventList').
    component('eventList',{
        templateUrl: 'event-list/event-list.template.html',
    controller: ['$http',
        function XYZController($http) {
            var self = this;
            self.orderProp = 'age';

            $http.get('phones.json').then(function(response) {
                self.phones = response.data;
            });
        }
    ]
});