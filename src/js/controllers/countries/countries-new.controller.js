angular
.module('Wanderpal')
.controller('CountriesNewCtrl', CountriesNewCtrl);

CountriesNewCtrl.$inject = ['$state', 'CountryFactory'];
function CountriesNewCtrl($state, CountryFactory) {
  const vm = this;
  vm.create = countriesCreate;

  function countriesCreate() {
    CountryFactory
    .save(vm.trip)
    .$promise
    .then(() => {
      $state.go('countriesIndex');
    });
  }
}
