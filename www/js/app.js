// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var lectures = angular.module('starter', ['ionic'])

.run(function($ionicPlatform, $rootScope, ROUTES) {
    $rootScope.ROUTES = ROUTES;
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.constant('ROUTES', (function() {
    return {
        API: 'http://tenderapi.dev-topsu.ru/v1/',

        APP: '/app',

        TENDERS: '/tenders',

        FAQ: '/faq',
        LESSONS: '/lessons',
        LESSONDESCRIPTION: '/lesson_description',
        VIDEOLESSONS: '/video_lessons',
        VIDEODESCRIPTION: '/video_description',
        SPECIALLESSONS: '/special_lessons',
        SPECIALDESCRIPTION: '/special_description',

        INFO: '/info',
        CONTACTS: '/contacts',
        PROJECTDESCRIPTION: '/project_description',
    }
})())

.config(function($stateProvider, $urlRouterProvider, ROUTES, $httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    var tpl = "templates/";

    $stateProvider

        .state('app', {
        url: ROUTES.APP,
        abstract: true,
        templateUrl: tpl + 'menu.html',
        controller: 'TendersCtrl'
    })

    .state('app.tenders', {
        url: ROUTES.TENDERS,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'tenders.html',
                controller: 'TendersCtrl'
            }
        }
    })

    .state('app.lessons', {
        url: ROUTES.LESSONS,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'lessons.html',
                controller: 'LessonsCtrl'
            }
        }
    })

    .state('app.lesson_description', {
        url: ROUTES.LESSONDESCRIPTION + "/:lessondescriprionId",
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'lesson_description.html',
                controller: 'LessonDescriptionCtrl'
            }
        }
    })

    .state('app.video_lessons', {
        url: ROUTES.VIDEOLESSONS,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'video_lessons.html',
                controller: 'VideoLessonsCtrl'
            }
        }
    })

    .state('app.video_description', {
        url: ROUTES.VIDEODESCRIPTION + "/:videodescriptionId",
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'video_description.html',
                controller: 'VideoLessonDescriptionCtrl'
            }
        }
    })

    .state('app.special_lessons', {
        url: ROUTES.SPECIALLESSONS,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'special_lessons.html',
                controller: 'SpecialLessonsCtrl'
            }
        }
    })

    .state('app.special_description', {
        url: ROUTES.SPECIALDESCRIPTION + "/:specildescriptionId",
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'special_description.html',
                controller: 'SpecialLessonDescriptionCtrl'
            }
        }
    })

    .state('app.faq', {
        cache: false,
        url: ROUTES.FAQ,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'faq.html',
                controller: 'FaqCtrl'
            }
        }
    })

    .state('app.info_project', {
        url: ROUTES.INFO,
        cache: false,
        views: {
            cache: false,
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'info_project.html',
                controller: 'InfoProjectCtrl'
            }
        }
    })

    .state('app.info_project.contacts', {
        url: ROUTES.CONTACTS,
        cache: false,
        views: {
            cache: false,
            'contacts': {
                cache: false,
                templateUrl: tpl + 'contacts.html',
                controller: 'InfoProjectCtrl'
            }
        }
    })

    .state('app.info_project.project_description', {
        url: ROUTES.PROJECTDESCRIPTION,
        cache: false,
        views: {
            cache: false,
            'project_description': {
                cache: false,
                templateUrl: tpl + 'project_description.html',
                controller: 'InfoProjectCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/tenders');
});
