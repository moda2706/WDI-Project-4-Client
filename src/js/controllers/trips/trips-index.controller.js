angular
.module('Wanderpal')
.controller('TripsIndexCtrl', TripsIndexCtrl);

TripsIndexCtrl.$inject = ['TripFactory'];
function TripsIndexCtrl(TripFactory) {
  const vm = this;

  // vm.delete = tripsDelete;

  // tripsIndex();
  // function tripsIndex() {
  vm.trips = TripFactory.query();
  console.log(vm.trips);
  // }

  // function tripsDelete(trip) {
  //   Trip
  //   .remove({ id: trip.id })
  //   .$promise
  //   .then(() => {
  //     tripsIndex();
  //   });
}
