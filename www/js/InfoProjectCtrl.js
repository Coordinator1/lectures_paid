lectures.controller('InfoProjectCtrl', function($scope, $ionicModal, $rootScope, CommunicationWithServerService, $ionicPopup) {

    // bloc responsible for the operation of modal window
    $ionicModal.fromTemplateUrl('templates/modals/contact_form.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalContactForm = modal;
    });
    $scope.openModalContactForm = function() {
        $scope.modalContactForm.show();
    };
    $scope.closeModalContactForm = function() {
        $scope.modalContactForm.hide();
    };

    // receiving and processing data from the server
    CommunicationWithServerService.getAbout().then(function(data) {
        $scope.about = data.data;
        console.log("getAbout()", data);
    }).finally(function(error) {});

    // object takes a value from the ng-model 
    $rootScope.contacts = {};
    
    $scope.checkInput = function(){
        if($scope.contacts.username == undefined || $scope.contacts.email == undefined || $scope.contacts.message == undefined){
            var alertPopup = $ionicPopup.alert({
                    title: 'Внимание',
                    template: 'Заполните все поля!'
                });
        } else {
            $scope.sendContactForm();
        }
    };

    // function to send data from a modal window
    $scope.sendContactForm = function() {
        CommunicationWithServerService.sendContact().then(function(data) {
            console.log("sendContact()", data);
             if (data.status == 200) {
                // An alert dialog
                var alertPopup = $ionicPopup.alert({
                    title: 'Сообщение',
                    template: 'Ваш запрос отправлен'
                });
            }
        }).finally(function(error) {
            $scope.closeModalContactForm();
            $rootScope.contacts = null;
        });
    };

});
