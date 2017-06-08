angular
.module('Wanderpal')
.controller('CountriesShowCtrl', CountriesShowCtrl);

CountriesShowCtrl.$inject = ['$stateParams', 'CountryFactory'];
function CountriesShowCtrl($stateParams, CountryFactory) {
  const vm = this;
  vm.trip = CountryFactory.get($stateParams);
}
