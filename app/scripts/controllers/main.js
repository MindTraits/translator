'use strict';

var TranslatorControllers = angular.module('TranslatorControllers', []);

/**
 * This controller will convert the text file in a array and call respective Json file. 
 */

	TranslatorControllers.controller('MainCtrl', function ($scope, $http) {
	  
	  $scope.language ='Spanish';
	  $scope.lang = ['Spanish','Italian','German'];
	  
	  $http.get('lib/lutherSpeech.txt').success(function(data){
		  $scope.speech = [];
		  
		  var speech = data.split(/\s+/g);
		  var wordObjects = [];
		  for (var i=0;i<speech.length;i++) {
			 wordObjects.push(speech[i]);
		  }
		  
		  if ((speech.length == 1) && (speech[0] === '')) {
			    $scope.speech = [];
		  } else {
			    $scope.speech = wordObjects;
		  }
	  });
	  
	  
/**
 * This getWord function call respective Json file to fetch the data. 
 */		
	  
	  $scope.getSelected = function() {
		  $scope.getWord($scope.selectedWord,$scope.selectedIndex)
	  }
	  
	  
	  $scope.selectedIndex = "-1";
	  $scope.getWord= function(word,$index){
		  $scope.selectedWord = word;
		  $scope.selectedIndex = $index;
		  $http.get('lib/'+$scope.language+'.json').success(function(data){
			  $.each(data, function (i, val) {
				  var w = word.replace(",", "");
				  var w1 = w.replace(".", "");
				  $scope.words = w1;
				  if(val.word == w1){
					  $scope.meaning = val.meaning;
					  $scope.code = val.code;
					  $scope.clang = val.lang;
				  }
			  });
		  });
	  };
 });