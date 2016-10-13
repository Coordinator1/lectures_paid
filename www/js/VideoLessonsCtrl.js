lectures.controller('VideoLessonsCtrl', function($scope, CommunicationWithServerService, $location) {
    // receiving and processing data from the server 
    CommunicationWithServerService.getVideoLessons().then(function(data) {
        $scope.videoList = data.data;
        console.log("video lessons", data);
    }).finally(function(error) {});

    // path to video lesson description
    $scope.goToVideoDescription = function(videodescriptionId){
        $location.path("app/video_description/" + videodescriptionId);
        console.log("$scope.goToVideoDescription", videodescriptionId);
    };
});
