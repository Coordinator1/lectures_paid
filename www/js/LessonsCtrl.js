lectures.controller('LessonsCtrl', function($scope, $state, CommunicationWithServerService, $location, $timeout) {
    // receiving and processing data from the server 
    CommunicationWithServerService.getFreeLesson().then(function(data) {
        $scope.lessonsList = data.data;
        
        var i = 1;
        angular.forEach($scope.lessonsList, function(value, key) {
            value.number = i;
            i++;
        });
        console.log("$scope.lessonsList", $scope.lessonsList);

    }).finally(function(error) {});

    // path to Lesson description
    $scope.goToLessonDescription = function(lessondescriprionId) {
        $location.path('app/lesson_description/' + lessondescriprionId);
    };


});
