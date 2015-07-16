// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('train', [
  'ionic',
  'train.controllers',
  'train.services',
  'train.controllers.video',
  'train.database'
]).run(function ($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    db = window.sqlitePlugin.openDatabase({name: "train-test.db", createFromLocation: 1});
    //db = $cordovaSQLite.openDB({name : "train-test.db", bgType: 1});
    //db = $cordovaSQLite.openDB("train-test.db");

    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS videos (id integer primary key, firstname text, lastname text)");



});
}).config(function ($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider  // setup an abstract state for the tabs directive
.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })  // Each tab has its own nav history stack:
.state('tab.collections', {
    url: '/collections',
    views: {
      'tab-collections': {
        templateUrl: 'templates/tab-collect.html',
        controller: 'CollectionsCtrl'
      }
    }
  }).state('tab.playlists', {
    url: '/playlists',
    views: {
      'tab-playlists': {
        templateUrl: 'templates/tab-playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  }).state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  }).state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  }).state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  }).state('tab.video', {
    url: '/video',
    views: {
      'tab-video': {
        templateUrl: 'templates/tab-video.html',
        controller: 'VideoCtrl'
      }
    }
  }).state('tab.video-player', {
    url: '/video/:name',
    views: {
      'tab-video': {
        templateUrl: 'templates/tab-video-player.html',
        controller: 'VideoPlayerCtrl'
      }
    }
  }).state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/playlists');
});