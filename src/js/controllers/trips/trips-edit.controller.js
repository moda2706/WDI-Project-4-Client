angular
.module('Wanderpal')
.controller('TripsEditCtrl', TripsEditCtrl);

TripsEditCtrl.$inject = ['$stateParams', '$state', 'TripFactory', 'CurrentUserService'];
function TripsEditCtrl($stateParams, $state, TripFactory, CurrentUserService) {
  const vm = this;

  vm.trip = TripFactory.get($stateParams);
  vm.update = tripsUpdate;

  function tripsUpdate() {
    TripFactory
    .update({ id: $stateParams.id }, vm.trip)
    .$promise
    .then(()=> {
      $state.go('usersShow', { id: CurrentUserService.currentUser.id });
    });
  }
}
