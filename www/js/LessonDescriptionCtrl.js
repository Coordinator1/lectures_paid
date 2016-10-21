lectures.controller('LessonDescriptionCtrl', function($scope, CommunicationWithServerService, $timeout, $stateParams) {
    // receiving and processing data from the server with 0.3 sec delay 
    // delay is necessary for the correct display of all the elements
    $timeout(function() {
        CommunicationWithServerService.getFreeLessonDescription($stateParams.lessondescriprionId).then(function(data) {
            $scope.descriptionLesson = data.data;
            console.log("$scope.descriptionLesson", $scope.descriptionLesson);
        }).finally(function(error) {});
    }, 300);
});
