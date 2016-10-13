lectures.controller('TendersCtrl', function($scope, $state, $ionicPopup){
	// path to free lessons
	$scope.goToFreeLessons = function(){
		$state.go("app.lessons");
	};

	// path to free lessons
	$scope.goToVideoLessons = function(){
		$state.go("app.video_lessons");
	};

	// path to free lessons
	$scope.goToSpecialLessons = function(){
		$state.go("app.special_lessons");
	};

	// path to registration
	$scope.goToRegistration = function(){
		$state.go('app.registration');
	};

	// path to authorization
	$scope.goToAuthorization = function(){
		$state.go('app.authorization');
	};

	// path to faq
	$scope.goToFaq = function(){
		$state.go('app.faq');
	};
});