lectures.controller('FaqCtrl', function($scope, $ionicModal, CommunicationWithServerService, $rootScope, $ionicPopup) {

    // bloc responsible for the operation of modal window
    $ionicModal.fromTemplateUrl('templates/modals/faq_modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalFaq = modal;
    });
    $scope.openModalFaq = function() {
        $scope.modalFaq.show();
    };
    $scope.closeModalFaq = function() {
        $scope.modalFaq.hide();
    };

    /*// Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });*/

    // receiving and processing data from the server
    CommunicationWithServerService.getFaq().then(function(data) {
        $scope.faqList = data.data;
        console.log("$scope.faqList", $scope.faqList);
    }).finally(function(error) {});

    // object takes a value from the ng-model 
    $rootScope.faq = {};

    $scope.checkInput = function() {
        if ($scope.faq.username == undefined || $scope.faq.email == undefined || $scope.faq.title == undefined || $scope.faq.question == undefined) {
            var alertPopup = $ionicPopup.alert({
                title: 'Внимание',
                template: 'Заполните все поля!'
            });
        } else {
            $scope.sendFaqQuestion();
        }
    };

    // function to send data from a modal window
    $scope.sendFaqQuestion = function() {
        CommunicationWithServerService.sendQuestion().then(function(data) {
            if (data.status == 200) {
                // An alert dialog
                var alertPopup = $ionicPopup.alert({
                    title: 'Сообщение',
                    template: 'Ваш вопрос отправлен'
                });
            };
        }).finally(function(error) {
            $scope.closeModalFaq();
            $rootScope.faq = {};
        });
    };

    /*
     * if given answer is the selected answer, deselect it
     * else, select the given answer
     */
    $scope.toggleAnswer = function(lesson) {
        if ($scope.isAnswerShown(lesson)) {
            $scope.shownAnswer = null;
        } else {
            $scope.shownAnswer = lesson;
        }
    };

    $scope.isAnswerShown = function(lesson) {
        return $scope.shownAnswer === lesson;
    };

});
