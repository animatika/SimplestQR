// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller("ExampleController", function($scope, $cordovaBarcodeScanner) {
 
    $scope.scanBarcode = function() { //alert('scanBarcode');
			cloudSky.zBar.scan(
			{
					text_title: 'Скан QR Code', // Android only 
					text_instructions: 'Please направьте your camera at the QR code.', // Android only 
					//camera: "front" || "back" // defaults to "back" 
					//flash: "on" || "off" || "auto" // defaults to "auto". See Quirks 
					drawSight: true || false //defaults to true, create a red sight/line in the center of the scanner view. 
			}, function(s) { alert ('success: '+s);
			
			}, function(s) { alert ('failed: '+s);
			
			});
			/*
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
				*/
				
    };
 
});