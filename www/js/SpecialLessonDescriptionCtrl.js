lectures.controller('SpecialLessonDescriptionCtrl', function($scope, CommunicationWithServerService, $timeout, $stateParams) {
    // receiving and processing data from the server with 0.3 sec delay 
    // delay is necessary for the correct display of all the elements
    $timeout(function() {
        CommunicationWithServerService.getSpecialLessonDescription($stateParams.specildescriptionId).then(function(data) {
            $scope.specialDescription = data.data;
        }).finally(function(error) {});
    }, 300);
});
