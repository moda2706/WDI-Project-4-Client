angular
  .module('Wanderpal')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['UserFactory', 'CurrentUserService', '$state'];
function RegisterCtrl(UserFactory, CurrentUserService, $state) {
  const vm = this;
  vm.emailValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  vm.register = () => {
    UserFactory
    .register(vm.user)
    .$promise
    .then(data => {
      CurrentUserService.getUser();
      $state.go('usersShow', { id: data.user.id });
    }, (err) => {
      console.log(err, 'error in the register controller');
    });
  };
}
