angular
.module('Wanderpal')
.controller('CountriesIndexCtrl', CountriesIndexCtrl);

CountriesIndexCtrl.$inject = ['CountryFactory'];
function CountriesIndexCtrl(CountryFactory) {
  const vm = this;

  vm.delete = countriesDelete;

  countriesIndex();
  function countriesIndex() {
    vm.countries = CountryFactory.query();
    console.log(vm.countries);
  }

  function countriesDelete(country) {
    CountryFactory
    .remove({ id: country.id })
    .$promise
    .then(() => {
      countriesIndex();
    });
  }
}
