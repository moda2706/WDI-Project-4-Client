angular
.module('Wanderpal')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$stateParams', 'UserFactory'];
function UsersShowCtrl($stateParams, UserFactory) {
  const vm = this;
  vm.user  = UserFactory.get($stateParams);
}
