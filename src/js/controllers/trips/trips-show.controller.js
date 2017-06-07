angular
.module('Wanderpal')
.controller('TripsShowCtrl', TripsShowCtrl);

TripsShowCtrl.$inject = ['$stateParams', 'TripFactory'];
function TripsShowCtrl($stateParams, TripFactory) {
  const vm = this;
  vm.trip = TripFactory.get($stateParams);
}
