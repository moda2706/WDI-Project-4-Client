angular
.module('Wanderpal')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$stateParams', 'UserFactory'];

function UsersShowCtrl($stateParams, UserFactory) {
  const vm = this;
  // $stateParams returns a resource but nothing inside
  vm.user  = UserFactory.get($stateParams);
}
