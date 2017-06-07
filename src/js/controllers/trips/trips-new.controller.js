angular
.module('Wanderpal')
.controller('TripsNewCtrl', TripsNewCtrl);

TripsNewCtrl.$inject = ['$state', 'TripFactory'];
function TripsNewCtrl($state, TripFactory) {
  const vm = this;
  vm.create = tripsCreate;

  function tripsCreate() {
    TripFactory
    .save(vm.trip)
    .$promise
    .then(() => {
      $state.go('tripsIndex');
    });
  }
}
