angular
.module('Wanderpal')
.controller('TripsNewCtrl', TripsNewCtrl);

TripsNewCtrl.$inject = ['$state', 'TripFactory', 'CurrentUserService'];
function TripsNewCtrl($state, TripFactory, CurrentUserService) {
  const vm  = this;
  vm.create = create;

  function create() {
    TripFactory
      .save(vm.trip)
      .$promise
      .then(() => {
        $state.go('usersShow', { id: CurrentUserService.currentUser.id });
      });
  }
}
