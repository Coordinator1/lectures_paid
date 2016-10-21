lectures.controller('SpecialLessonsCtrl', function($scope, CommunicationWithServerService, $location) {
    // receiving and processing data from the server 
    CommunicationWithServerService.getSpecialLessons().then(function(data) {
        $scope.specialList = data.data;

        var i = 1;
        angular.forEach($scope.specialList, function(value, key) {
            value.number = i;
            i++;
        });
    }).finally(function(error) {});

    // path to Lesson description
    $scope.goToSpecialLessonDescription = function(specildescriptionId) {
        $location.path('app/special_description/' + specildescriptionId);
    };
});
