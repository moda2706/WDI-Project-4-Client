angular
.module('Wanderpal')
.controller('StopsNewCtrl', StopsNewCtrl);

StopsNewCtrl.$inject = ['$state', 'StopFactory'];
function StopsNewCtrl($state, StopFactory) {
  const vm = this;
  vm.create = stopsCreate;

  function stopsCreate() {
    StopFactory
    .save(vm.stop)
    .$promise
    .then(() => {
      $state.go('stopsIndex');
    });
  }
}
