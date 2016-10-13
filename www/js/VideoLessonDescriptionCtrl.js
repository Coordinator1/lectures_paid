lectures.controller('VideoLessonDescriptionCtrl', function($scope, CommunicationWithServerService, $timeout, $stateParams) {
    // receiving and processing data from the server with 0.3 sec delay 
    // delay is necessary for the correct display of all the elements
    $timeout(function() {
        CommunicationWithServerService.getVideoLessonDescription($stateParams.videodescriptionId).then(function(data) {
            $scope.videoDescription = data.data;
            console.log("$scope.videoDescription", $scope.videoDescription);
        }).finally(function(error) {});
    }, 300);
});
