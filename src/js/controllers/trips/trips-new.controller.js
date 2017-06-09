angular
.module('Wanderpal')
.controller('TripsNewCtrl', TripsNewCtrl);

TripsNewCtrl.$inject = ['$state', 'TripFactory', 'StopFactory', 'CountryFactory', 'CurrentUserService'];
function TripsNewCtrl($state, TripFactory, StopFactory, CountryFactory, CurrentUserService) {
  const vm  = this;

  vm.stops = [];

  vm.countries = CountryFactory.query();

  vm.create = create;

  function create() {
    TripFactory
      .save(vm.trip)
      .$promise
      .then(data => {
        vm.trip = data;
      });
  }

  vm.stopsCreate = stopsCreate;

  function stopsCreate(trip, stop) {
    vm.stop.trip_id = trip.id;
    if (stop) {
      stop.country_id = stop.country;
      StopFactory
        .update({ id: stop.id }, { stop: stop })
        .$promise
        .then(() => {
          TripFactory
          .get({ id: vm.trip.id })
          .$promise
          .then(data => {
            data.stops = data.stops.map(stop => {
              stop.date = new Date(stop.date);
              return stop;
            });
            vm.trip = data;
          });
        });
    } else {
      StopFactory
        .save(vm.stop)
        .$promise
        .then(() => {
          vm.stop = {};
          TripFactory
          .get({ id: vm.trip.id })
          .$promise
          .then(data => {
            data.stops = data.stops.map(stop => {
              stop.date = new Date(stop.date);
              return stop;
            });
            vm.trip = data;
          });
        });
    }
  }

  vm.finish = finish;
  function finish() {
    $state.go('usersShow', { id: CurrentUserService.currentUser.id });
  }
}
