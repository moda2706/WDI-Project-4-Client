angular
.module('Wanderpal')
.factory('StopFactory', StopFactory);

StopFactory.$inject = ['API', '$resource'];
function StopFactory(API, $resource) {
  return $resource(`${API}/stops/:id`,
  { id: '@_id'},
    { 'update': { method: 'PUT' }
    }
);
}
