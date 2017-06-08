angular
.module('Wanderpal')
.controller('StopsEditCtrl', StopsEditCtrl);

StopsEditCtrl.$inject = ['$stateParams', '$state', 'StopFactory'];
function StopsEditCtrl($stateParams, $state, StopFactory) {
  const vm = this;

  vm.trip = StopFactory.get($stateParams);
  vm.update = stopsUpdate;

  function stopsUpdate() {
    StopFactory
    .update({ id: $stateParams.id }, vm.stop)
    .$promise
    .then(()=> {
      $state.go('stopsIndex');
    });
  }
}
