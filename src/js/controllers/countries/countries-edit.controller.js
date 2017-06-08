angular
.module('Wanderpal')
.controller('CountriesEditCtrl', CountriesEditCtrl);

CountriesEditCtrl.$inject = ['$stateParams', '$state', 'CountryFactory'];
function CountriesEditCtrl($stateParams, $state, CountryFactory) {
  const vm = this;

  vm.trip = CountryFactory.get($stateParams);
  vm.update = countriesUpdate;

  function countriesUpdate() {
    CountryFactory
    .update({ id: $stateParams.id }, vm.country)
    .$promise
    .then(()=> {
      $state.go('countriesIndex');
    });
  }
}
