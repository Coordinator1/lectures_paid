lectures.controller('VideoLessonsCtrl', function($scope, CommunicationWithServerService, $location) {
    // receiving and processing data from the server 
    CommunicationWithServerService.getVideoLessons().then(function(data) {
        $scope.videoList = data.data;

        var i = 1;
        angular.forEach($scope.videoList, function(value, key) {
            value.number = i;
            i++;
        });
    }).finally(function(error) {});

    // path to video lesson description
    $scope.goToVideoDescription = function(videodescriptionId){
        $location.path("app/video_description/" + videodescriptionId);
    };
});
