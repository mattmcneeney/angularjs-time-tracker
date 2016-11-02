angular.module('yourApp', [])
.directive('timeTracker', [ '$timeout', function($timeout) {
   return {
      restrict: 'E',
      link: function(scope, element, attrs, ctrl) {

         // The durations (in seconds) that we want to track
         scope.durations = [ 0, 5, 10, 20, 30, 60, 120, 300 ];

         // Setup the Google Analytics tracking calls
         scope.trackDuration = function(secondsElapsed) {
            ga('send', 'event', 'Time Tracker', 'Seconds elapsed', secondsElapsed, { 'nonInteraction': 1 });
         };

         // Setup the tracking calls
         scope.durations.forEach(function(duration) {
            $timeout(function() {
               scope.trackDuration(duration);
            }, (duration * 1000));
         });

         // Log that time tracking is starting
         console.log('Time tracker started');
      }
   };
}]);
