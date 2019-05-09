// Création de l'app angular
var validationApp = angular.module('validApp', []);

// Création du controller angular
validationApp.controller('monCtrl', function($scope) {
  // Fonction si tout les champs sont valides
	$scope.submitForm = function(isValid) {
    // Vérifie si tout les champs du form sont valides
		if (isValid) {
			alert('Votre formulaire a bien été envoyé !');
		}
	};
});
