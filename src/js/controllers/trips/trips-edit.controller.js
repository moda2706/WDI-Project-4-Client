angular
.module('Wanderpal')
.controller('TripsEditCtrl', TripsEditCtrl);

TripsEditCtrl.$inject = ['$stateParams', '$state', 'TripFactory'];
function TripsEditCtrl($stateParams, $state, TripFactory) {
  const vm = this;

  vm.trip = TripFactory.get($stateParams);
  vm.update = tripsUpdate;

  function tripsUpdate() {
    TripFactory
    .update({ id: $stateParams.id }, vm.trip)
    .$promise
    .then(()=> {
      $state.go('tripsIndex');
    });
  }
}
