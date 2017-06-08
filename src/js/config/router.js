angular
.module('Wanderpal')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersNew', {
    url: '/users/new',
    templateUrl: '/js/views/users/new.html',
    controller: 'UsersNewCtrl',
    controllerAs: 'usersNew'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('usersEdit', {
    url: '/users/edit', // took out the :id as we're not using the id, using main.user
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl',
    controllerAs: 'usersEdit'
  })
  .state('tripsIndex', {
    url: '/trips',
    templateUrl: '/js/views/trips/index.html',
    controller: 'TripsIndexCtrl',
    controllerAs: 'tripsIndex'
  })
  .state('tripsNew', {
    url: '/trips/new',
    templateUrl: '/js/views/trips/new.html',
    controller: 'TripsNewCtrl',
    controllerAs: 'vm'
  })
  .state('tripsShow', {
    url: '/trips/:id',
    templateUrl: '/js/views/trips/show.html',
    controller: 'TripsShowCtrl',
    controllerAs: 'tripsShow'
  })
  .state('tripsEdit', {
    url: '/trips/:id/edit',
    templateUrl: '/js/views/trips/edit.html',
    controller: 'TripsEditCtrl',
    controllerAs: 'tripsEdit'
  })
  .state('countriesIndex', {
    url: '/countries',
    templateUrl: '/js/views/countries/index.html',
    controller: 'CountriesIndexCtrl',
    controllerAs: 'countriesIndex'
  })
  .state('countriesNew', {
    url: '/countries/new',
    templateUrl: '/js/views/countries/new.html',
    controller: 'CountriesNewCtrl',
    controllerAs: 'countriesNew'
  })
  .state('countriesShow', {
    url: '/countries/:id',
    templateUrl: '/js/views/countries/show.html',
    controller: 'CountriesShowCtrl',
    controllerAs: 'countriesShow'
  })
  .state('countriesEdit', {
    url: '/countries/:id/edit',
    templateUrl: '/js/views/countries/edit.html',
    controller: 'CountriesEditCtrl',
    controllerAs: 'countriesEdit'
  })
  .state('stopsIndex', {
    url: '/stops',
    templateUrl: '/js/views/stops/index.html',
    controller: 'StopsIndexCtrl',
    controllerAs: 'stopsIndex'
  })
  .state('stopsNew', {
    url: '/stops/new',
    templateUrl: '/js/views/stops/new.html',
    controller: 'StopsNewCtrl',
    controllerAs: 'stopsNew'
  })
  .state('stopsShow', {
    url: '/stops/:id',
    templateUrl: '/js/views/stops/show.html',
    controller: 'StopsShowCtrl',
    controllerAs: 'stopsShow'
  })
  .state('stopsEdit', {
    url: '/stops/:id/edit',
    templateUrl: '/js/views/stops/edit.html',
    controller: 'StopsEditCtrl',
    controllerAs: 'stopsEdit'
  });

  $urlRouterProvider.otherwise('/');
}
