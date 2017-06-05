angular
  .module('Wanderpal')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['UserFactory', 'CurrentUserService', '$state'];
function RegisterCtrl(UserFactory, CurrentUserService, $state) {
  const vm = this;
  vm.register = () => {
    UserFactory
    .register(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('usersProfile');
    }, (err) => {
      console.log(err, 'error in the register controller');
    });
  };
}
