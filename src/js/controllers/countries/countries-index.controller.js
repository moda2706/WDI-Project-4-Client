angular
.module('Wanderpal')
.controller('CountriesIndexCtrl', CountriesIndexCtrl);

CountriesIndexCtrl.$inject = ['CountryFactory'];
function CountriesIndexCtrl(CountryFactory) {
  const vm = this;

  // vm.delete = tripsDelete;

  // tripsIndex();
  // function tripsIndex() {
  vm.countries = CountryFactory.query();
  console.log(vm.countries);
  // }

  // function tripsDelete(trip) {
  //   Countrie
  //   .remove({ id: trip.id })
  //   .$promise
  //   .then(() => {
  //     tripsIndex();
  //   });
}
