angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Contacts) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.contacts = Contacts.all()
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Contacts) {
  $scope.contacts = Contacts.all();

  var contactID = $stateParams.chatId;
  $scope.contact = $scope.contacts[contactID]; 
  console.log($scope.contact);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
