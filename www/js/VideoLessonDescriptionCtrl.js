lectures.controller('VideoLessonDescriptionCtrl', function($scope, $rootScope, CommunicationWithServerService, $timeout,
    $stateParams, $cordovaInAppBrowser) {
    // receiving and processing data from the server with 0.3 sec delay 
    // delay is necessary for the correct display of all the elements
    $timeout(function() {
        CommunicationWithServerService.getVideoLessonDescription($stateParams.videodescriptionId).then(function(data) {
            $scope.videoDescription = data.data;
            console.log("$scope.videoDescription", $scope.videoDescription);
        }).finally(function(error) {});
    }, 300);

    $scope.downloadLessons = function(){
    	window.open($scope.videoDescription.link,'_system','location=yes'); 
    };

    /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'no'
    };


    document.addEventListener("deviceready", function() {
        $rootScope.downloadLessons = function() {
        	console.log("downoloadLessons");
            $cordovaInAppBrowser.open($scope.videoDescription.link, '_blank', options)
                .then(function(event) {
                    // success
                })
                .catch(function(event) {
                    // error
                });
            $cordovaInAppBrowser.close();
        };
    }, false);*/

});
