angular
.module('Wanderpal')
.controller('StopsShowCtrl', StopsShowCtrl);

StopsShowCtrl.$inject = ['$stateParams', 'StopFactory'];
function StopsShowCtrl($stateParams, StopFactory) {
  const vm = this;
  vm.stop = StopFactory.get($stateParams);
}
