angular
.module('Wanderpal')
.factory('TripFactory', TripFactory);

TripFactory.$inject = ['API', '$resource'];
function TripFactory(API, $resource) {
  return $resource(`${API}/trips/:id`,
    { id: '@_id'},
    { 'update': { method: 'PUT' } }
);
}
