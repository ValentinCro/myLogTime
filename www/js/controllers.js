angular.module('starter.controllers', [])

.controller('AccueilCtrl', function($scope, $interval) {

  //VARIABLE DECLARATION
  $scope.activityStartedTimes = [];
  $scope.activities = [];
  $scope.paused = false;
  //FUNCTION
  $scope.startNewActivity = function() {
    $scope.activityStartedTimes.push(new Date());
  };

  $scope.stopNewActivity = function() {
    $scope.activityStartedTimes.push(new Date());
    var duration = 0;
    var i = 0;
    while(i < $scope.activityStartedTimes.length) {
      var tmp = $scope.activityStartedTimes[i + 1] - $scope.activityStartedTimes[i];
      tmp = tmp/1000;
      console.log(tmp);
      tmp = (tmp - (tmp % 60)) / 60;
      console.log(tmp);
      tmp = (tmp - (tmp % 60)) / 60;
      console.log(tmp);
      duration = tmp;
      i += 2;
    }
    var activity = {
        number : "",
        name : "",
        durationInHour : duration,
        startingDate : $scope.activityStartedTimes[0],
        endingDate : $scope.activityStartedTimes[$scope.activityStartedTimes.length - 1],
        date : $scope.activityStartedTimes[0]
    };
    $scope.activities.push(activity);
    $scope.activityStartedTimes = [];
  };

  $scope.takeABreak = function() {
    $scope.activityStartedTimes.push(new Date());
    $scope.paused = true;
  };

  $scope.continue = function() {
    $scope.activityStartedTimes.push(new Date());
    $scope.paused = false;
  };

  //GETTER & SETTER
  $scope.getActivityStartedTimes = function() {
    return $scope.activityStartedTimes;
  };


  $scope.getActivities = function() {
    return $scope.activities;
  };

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
