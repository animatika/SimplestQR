// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) { //alert('run')
	
  $ionicPlatform.ready(function() { //scanBarcode();
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
	
	/*
	$rootScope.$on('$viewContentLoaded', function(){ alert('viewContentLoaded');
    //Here your view content is fully loaded !!
  }); */
});

app.controller("ExampleController", function($scope, $cordovaBarcodeScanner) {
 
	$scope.scanBarcode = function() { //alert('scanBarcode');
		
			$cordovaBarcodeScanner.scan()
			.then(function(imageData) {
					//alert(imageData.text);
					window.open(imageData.text, '_system');
					console.log("Barcode Format -> " + imageData.format);
					console.log("Cancelled -> " + imageData.cancelled);
			}, function(error) {
					console.log("An error happened -> " + error);
			});
			
	};
});


app.directive( 'elemReady', function( $parse ) {
   return {
       restrict: 'A',
       link: function( $scope, elem, attrs ) {    
          elem.ready(function(){
            $scope.$apply(function(){
                var func = $parse(attrs.elemReady);
                func($scope);
            })
          })
       }
    }
});