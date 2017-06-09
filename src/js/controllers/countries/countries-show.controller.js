angular
.module('Wanderpal')
.controller('CountriesShowCtrl', CountriesShowCtrl);

CountriesShowCtrl.$inject = ['$stateParams', 'CountryFactory', '$filter'];
function CountriesShowCtrl($stateParams, CountryFactory, $filter) {
  const vm = this;
  CountryFactory
  .get($stateParams)
  .$promise
  .then(data => {
    vm.country = data;
    vm.before = $filter('before')(vm.country.stops);
    vm.after = $filter('after')(vm.country.stops);
  });
}
