angular
  .module('Wanderpal')
  .controller('UsersProfileCtrl', UsersProfileCtrl);

UsersProfileCtrl.$inject = ['UserFactory', 'TokenService', 'CurrentUserService'];
function UsersProfileCtrl(UserFactory, TokenService, CurrentUserService) {
  const vm = this;
  console.log(CurrentUserService.currentUser);

  vm.user = UserFactory.get({ id: CurrentUserService.currentUser.id });
  // vm.user = UserFactory.query();
}
