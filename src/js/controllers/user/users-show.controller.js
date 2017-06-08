angular
.module('Wanderpal')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$stateParams', 'UserFactory', 'TripFactory'];
function UsersShowCtrl($stateParams, UserFactory, TripFactory) {
  const vm = this;
  vm.user  = UserFactory.get($stateParams);
  console.log(vm.user);
  vm.trip = TripFactory.get($stateParams);
  console.log(vm.trip);
}
