angular
.module('Wanderpal')
.controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['UserFactory', '$state', 'TokenService', 'CurrentUserService'];

function UsersEditCtrl(UserFactory, $state, TokenService, CurrentUserService) {
  const vm = this;

  vm.user = UserFactory.get({ id: TokenService.decodeToken().id });

  vm.update = usersUpdate;

  function usersUpdate() {
    UserFactory
    .update({ id: vm.user.id }, vm.user)
    .$promise
    .then(user => {
      CurrentUserService.getUser();
      $state.go('usersProfile', { id: user._id });
    });
  }
}
