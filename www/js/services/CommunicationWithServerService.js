lectures.factory('CommunicationWithServerService', function($rootScope, $http, ROUTES, $stateParams) {
    return {
        getFreeLesson: function() {
            return $http.get(ROUTES.API + 'lessons').success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getFreeLesson error", error);
            });
        },
        getFreeLessonDescription: function(lessondescriprionId) {
            console.log("lessondescriprionId", lessondescriprionId);
            return $http.get(ROUTES.API + 'lessons/' + lessondescriprionId).success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getFreeLessonDescription error", error);
            });
        },
        getFaq: function() {
            return $http.get(ROUTES.API + 'faqs').success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getFaq", error);
            });
        },
        getVideoLessons: function() {
            return $http.get(ROUTES.API + 'videolessons').success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getVideoLessons", error);
            });
        },
        getVideoLessonDescription: function(videodescriptionId) {
            return $http.get(ROUTES.API + 'videolessons/' + videodescriptionId).success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getVideoLessonDescription", error);
            });
        },
        getSpecialLessons: function() {
            return $http.get(ROUTES.API + 'specless').success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getSpecialLessons", error);
            });
        },
        getSpecialLessonDescription: function(specildescriptionId) {
            return $http.get(ROUTES.API + 'specless/' + specildescriptionId).success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getSpecialLessonDescription", error);
            });
        },
        getAbout: function() {
            return $http.get(ROUTES.API + 'about').success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getAbout", error);
            });
        },
        sendQuestion: function() {
            var data = $.param({
                "username": $rootScope.faq.username,
                "email": $rootScope.faq.email,
                "title": $rootScope.faq.title,
                "text": $rootScope.faq.question
            });
            return $http.post(ROUTES.API + 'questions', data).success(function(data) {
                return data;
            }).error(function(error) {
                console.log("sendQuestion", error);
            });
        },
        sendContact: function() {
            var data = $.param({
                "username": $rootScope.contacts.username,
                "email": $rootScope.contacts.email,
                "text": $rootScope.contacts.message
            });
            return $http.post(ROUTES.API + 'contact', data).success(function(data) {
                return data;
            }).error(function(error) {
                console.log("sendContact", error);
            });
        }
    }
});
