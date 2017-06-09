angular
.module('Wanderpal')
.controller('TripsIndexCtrl', TripsIndexCtrl);

TripsIndexCtrl.$inject = ['TripFactory'];
function TripsIndexCtrl(TripFactory) {
  const vm = this;

  vm.delete = tripsDelete;

  tripsIndex();
  function tripsIndex() {
    vm.stops = TripFactory.query();
    console.log(vm.trips);
  }

  function tripsDelete(trip) {
    TripFactory
    .remove({ id: trip.id })
    .$promise
    .then(() => {
      tripsIndex();
    });
  }
}
