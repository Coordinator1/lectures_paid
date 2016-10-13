lectures.controller('SpecialLessonsCtrl', function($scope, CommunicationWithServerService, $location) {
    // receiving and processing data from the server 
    CommunicationWithServerService.getSpecialLessons().then(function(data) {
        $scope.specialList = data.data;
        console.log("special lessons", data);
    }).finally(function(error) {});

    // path to Lesson description
    $scope.goToSpecialLessonDescription = function(specildescriptionId) {
        $location.path('app/special_description/' + specildescriptionId);
        console.log("$scope.goToSpecialLessonDescription", specildescriptionId);
    };
});
