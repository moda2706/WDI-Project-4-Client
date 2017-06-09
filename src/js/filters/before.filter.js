angular
  .module('Wanderpal')
  .filter('before', Before);

function Before() {
  return function(stops) {
    const now  = new Date();
    return stops.filter(stop => {
      const date = new Date(stop.date);
      return date.getTime() < now.getTime();
    });
  };
}
