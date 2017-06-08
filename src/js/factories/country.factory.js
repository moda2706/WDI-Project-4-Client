angular
.module('Wanderpal')
.factory('CountryFactory', CountryFactory);

CountryFactory.$inject = ['API', '$resource'];
function CountryFactory(API, $resource) {
  return $resource(`${API}/countires/:id`,
    { id: '@_id'},
    { 'update': { method: 'PUT' } }
);
}
