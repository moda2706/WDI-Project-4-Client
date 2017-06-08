angular
.module('Wanderpal')
.controller('StopsNewCtrl', StopsNewCtrl);

StopsNewCtrl.$inject = ['$state', 'StopFactory', 'CountryFactory', '$stateParams'];
function StopsNewCtrl($state, StopFactory, CountryFactory, $stateParams) {
  const vm = this;

  vm.countries = CountryFactory.query();
  vm.create = stopsCreate;

  function stopsCreate() {
    vm.stop.trip_id = parseInt($stateParams.id);

    StopFactory
      .save(vm.stop)
      .$promise
      .then(() => {
        $state.go('tripsShow', { id: parseInt($stateParams.id) });
      });
  }
}
