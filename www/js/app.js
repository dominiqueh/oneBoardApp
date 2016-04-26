// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var oBapp = angular.module('starter', ['ionic', 'ngCordova'])
// var db = new  --- later for database

// oneBoard.config(function($stateProvider, $urlRouterProvider) {
  // $stateProvider
    // .state("login", {
    //   url: "/login",
    //   templateUrl: "templates/login.html",
    //   controller: "loginController",
    //   cache: false
    // })
    // .state("secure", {
    //   url: "/secure",
    //   templateUrl: "templates/secure.html",
    //   controller: "secureController"
    // });
    // $urlRouterProvider.otherwise("/secure");
// });
// login authentication
// oBapp.controller("loginController", function($scope, $state, $mongoAuth) {
//   var dbAuth = $fire
// })


// this appears to take photos :D
oBapp.controller('PictureCtrl', function($scope, $ionicHistory, $cordovaCamera) {
  $scope.pictureUrl = 'http:placeholder.it/200x200';
  $ionicHistory.clearHistory();
  // $scope.images = [];

  // var fbAuth = fb.getAuth();
  // if(fbAuth){
  //   var userReference = fb.child("users/" + fbAuth.uid);
  //   var syncArray = $firebaseArray(userReference.child("images"));
  //   $scope.images = syncArray;
  // }
  //   else{
  //     $state.go("login");
  //   }
  // }
$scope.takeImage("deviceready", function(){
  // $scope.takeImage = function() {
    console.log("I am running.. Fingers crossed!")
      var options = {
          quality: 80,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 500,
          targetHeight: 500,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
            correctOrientation: true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
          var image = $scope.getElementById('myImage');
          image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        console.log(err)
      });
  }, false);
// Retrieve Image File Location
  document.getImageFile("deviceready", function () {
    var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
    };
    $cordovaCamera.getPicture(options).then(function(imageURI) {
      var image = $scope.getElementById('myImage');
      image.src = imageURI;
    }, function(err) {
      // error
    });
    $cordovaCamera.cleanup().then(...); // only for FILE_URI
  }, false);
});

oBapp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      // cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
