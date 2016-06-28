angular.module('starter.controllers', [])

.controller('AccueilCtrl', function($scope, $interval) {

  $scope.hour = 0;
  $scope.minute = 0;
  $scope.second = 0;
  $scope.started = false;
  $scope.paused = false;
  $scope.timer = null;

  $scope.startTimer = function() {
    $scope.timer = $interval(function() {
      if ($scope.second === 60) {
        $scope.second = 0;
        if ($scope.minute === 60) {
          $scope.minute = 0;
          $scope.hour++;
        } else {
          $scope.minute++;
        }

      } else {
        $scope.second++;
      }
    }, 1000);
  };

  $scope.start = function() {
    if ($scope.timer == null) {
      $scope.startTimer();
    }

    if ($scope.started) {
      $scope.paused = false;
      $scope.startTimer();
    } else {
      $scope.started = true;
    }
  };

  $scope.reload = function() {
    $interval.cancel($scope.timer);
    $scope.hour = 0;
    $scope.minute = 0;
    $scope.second = 0;
    $scope.startTimer();
  };

  $scope.pause = function() {
    $interval.cancel($scope.timer);
    $scope.paused = true;
  };

  $scope.stop = function() {
    $interval.cancel($scope.timer);
    $scope.timer = null;
    $scope.started = false;
    $scope.paused = false;
    $scope.hour = 0;
    $scope.minute = 0;
    $scope.second = 0;
  };

  $scope.isStarted = function() {
    return $scope.started;
  };

  $scope.isPaused = function() {
    return $scope.paused;
  };

  $scope.getHour = function() {
    if ($scope.hour < 10) {
      return '0' + $scope.hour;
    }
    return $scope.hour;
  };

  $scope.getMinute = function() {
    if ($scope.minute < 10) {
      return '0' + $scope.minute;
    }
    return $scope.minute;
  };

  $scope.getSecond = function() {
    if ($scope.second < 10) {
      return '0' + $scope.second;
    }
    return $scope.second;
  };

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
