angular
  .module('Wanderpal')
  .controller('UsersProfileCtrl', UsersProfileCtrl);

UsersProfileCtrl.$inject = ['UserFactory'];
function UsersProfileCtrl(UserFactory) {
  const vm = this;

  vm.user = UserFactory.query();
}
