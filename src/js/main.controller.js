angular
.module('Wanderpal')
.controller('MainCtrl', MainCtrl);


// MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
// function MainCtrl($rootScope, CurrentUserService, $state) {
//   const vm = this;
//   CurrentUserService.getUser();
//   $rootScope.$on('LoggedIn', () => {
//     vm.user = CurrentUserService.currentUser;
//     vm.loggedIn = true;
//   });
//   vm.logout = () => {
//     vm.loggedIn = false;
//     CurrentUserService.removeUser();
//   };
//   $rootScope.$on('LoggedOut', () => {
//     vm.user = null;
//     $state.go('home');
//   });
// }

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.getUser();
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
  };
}
