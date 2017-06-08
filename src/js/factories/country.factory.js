angular
.module('Wanderpal')
.factory('CountryFactory', CountryFactory);

CountryFactory.$inject = ['API', '$resource'];
function CountryFactory(API, $resource) {
<<<<<<< HEAD
  return $resource(`${API}/countries/:id`,
=======
  return $resource(`${API}/countires/:id`,
>>>>>>> ccc3bde2bbb10feb28fec6c0df5f837642ca1fcb
  { id: '@_id'},
    { 'update': { method: 'PUT' }
    }
);
}
