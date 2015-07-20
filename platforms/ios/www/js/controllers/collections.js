/**
 * Created by justinkahn on 7/16/15.
 */

angular.module('train.controllers.playlists', ['ionic', 'train.services', 'train.database'])
    .controller('PlaylistCtrl', function($scope, $state, $ionicNavBarDelegate, NavBarService, CollectionsDBFactory){

        var showDetails = {};

        $scope.setNavTitle = function(title) {
            $ionicNavBarDelegate.title(title);
            console.log("set title");
        };
        $scope.toggleShowBar = function() {
            $ionicNavBarDelegate.showBar(!$ionicNavBarDelegate.showBar());
        }
        NavBarService.setTransparency(true);

        $scope.playlist = [];
        $scope.updatePlaylist = function()   {

            CollectionsDBFactory.allCollections().then(function (collections) {
                $scope.playlist = collections;
                console.log(collections);
            });
        };

        $scope.updatePlaylist();

        $scope.onStepDetailClick = function (index) {
            if (showDetails[index] === true) {
                showDetails[index] = false;
            }
            else {
                showDetails[index] = true;
            }
            console.log("onStepDetailClick: " + showDetails[index]);
        };

        $scope.showStepDetails = function (index) {
            console.log("showStepDetails: " + showDetails[index]);
            return showDetails[index];
        };

        $scope.showCollection = function (index) {
            console.log("collection index: " + index);
            var collection = $scope.playlist[index];
            var collectionURI = collection.URI;
            var collectionURL = '#/';
            //$state.transitionTo('url', {url: })
            $state.transitionTo('tab.playlist-collection', {collectionId: collectionURI});
        };


    })
.controller('CollectionCtrl', function ($scope) {

    })
;
