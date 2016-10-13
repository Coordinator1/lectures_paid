lectures.controller('LessonsCtrl', function($scope, $state, CommunicationWithServerService, $location, $timeout) {
    // receiving and processing data from the server 
    CommunicationWithServerService.getFreeLesson().then(function(data) {
        $scope.lessonsList = data.data;
        console.log("free lessons", data);
    }).finally(function(error) {});

    // path to Lesson description
    $scope.goToLessonDescription = function(lessondescriprionId) {
        $location.path('app/lesson_description/' + lessondescriprionId);
        console.log("$scope.goToLessonDescription", lessondescriprionId);
    };
});
