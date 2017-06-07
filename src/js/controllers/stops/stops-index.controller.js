angular
.module('Wanderpal')
.controller('StopsIndexCtrl', StopsIndexCtrl);

StopsIndexCtrl.$inject = ['StopFactory'];
function StopsIndexCtrl(StopFactory) {
  const vm = this;

  vm.delete = stopsDelete;

  stopsIndex();
  function stopsIndex() {
    vm.stops = StopFactory.query();
    console.log(vm.stops);
  }

  function stopsDelete(stop) {
    StopFactory
    .remove({ id: stop.id })
    .$promise
    .then(() => {
      stopsIndex();
    });
  }
}
