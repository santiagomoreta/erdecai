'use strict';
var restaurantApp = angular.module('restaurantApp',['720kb.datepicker']);

restaurantApp.controller('mainController', ['$scope',
	function($scope,$log){

		$scope.init = function(){

			$scope.fotosDesayuno = [
				{
					imagen:'images/portfolio/desayunos/desayuno1.jpg',
					titulo:"Desayuno 1",
					desc:"Descripcion de la foto 1"
				},
				{				
					imagen:'images/portfolio/desayunos/desayuno2.jpg',
					titulo:"Desayuno 2",
					desc:"Descripcion de la foto 2" 					
				}				
			];
			$scope.desayunos =[
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-11.jpg",
					nombre:"Lemon Meringue ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Caramel Pear",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				}												
			];
			$scope.ensaladas =[
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-11.jpg",
					nombre:"Lemon Meringue ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Caramel Pear",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				}												
			];
			$scope.ensaladas =[
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-11.jpg",
					nombre:"Lemon Meringue ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Caramel Pear",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				}												
			];				
			$scope.parrilla =[
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-11.jpg",
					nombre:"Lemon Meringue ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Caramel Pear",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				}												
			];		
			$scope.postres =[
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-11.jpg",
					nombre:"Lemon Meringue ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Caramel Pear",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				},
				{
					imagen :"./images/menu/menu-thumb-12.jpg",
					nombre:"Wildberry (No Sugar) ",
					descripcion:"Stuffed with prosciutto & fontal cheese, breadcrumbed & fried with a fried free-range egg & wild truffle  ",
					precio:"18.50€"	
				}												
			];
			$scope.cocteles = [
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"Black russian ",
					descripcion:"El Black russian es un trago sencillo pero fuerte, con una textura excepcional.  ",
					precio:"10.50€"				
				},
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"White russian ",
					descripcion:"También esta su hermano gemelo el White russian, que perfectamente podría estar en esta lista y que se prepara de la misma manera pero con crema de leche. ",
					precio:"10.50€"				
				},
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"Black russian ",
					descripcion:"El Black russian es un trago sencillo pero fuerte, con una textura excepcional.  ",
					precio:"10.50€"				
				},
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"White russian ",
					descripcion:"También esta su hermano gemelo el White russian, que perfectamente podría estar en esta lista y que se prepara de la misma manera pero con crema de leche. ",
					precio:"10.50€"				
				},
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"Black russian ",
					descripcion:"El Black russian es un trago sencillo pero fuerte, con una textura excepcional.  ",
					precio:"10.50€"				
				},
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"White russian ",
					descripcion:"También esta su hermano gemelo el White russian, que perfectamente podría estar en esta lista y que se prepara de la misma manera pero con crema de leche. ",
					precio:"10.50€"				
				},
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"Black russian ",
					descripcion:"El Black russian es un trago sencillo pero fuerte, con una textura excepcional.  ",
					precio:"10.50€"				
				},
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"White russian ",
					descripcion:"También esta su hermano gemelo el White russian, que perfectamente podría estar en esta lista y que se prepara de la misma manera pero con crema de leche. ",
					precio:"10.50€"				
				},
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"Black russian ",
					descripcion:"El Black russian es un trago sencillo pero fuerte, con una textura excepcional.  ",
					precio:"10.50€"				
				},
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"White russian ",
					descripcion:"También esta su hermano gemelo el White russian, que perfectamente podría estar en esta lista y que se prepara de la misma manera pero con crema de leche. ",
					precio:"10.50€"				
				},
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"Black russian ",
					descripcion:"El Black russian es un trago sencillo pero fuerte, con una textura excepcional.  ",
					precio:"10.50€"				
				},
				{
					imagen :"./images/menu/menu-thumb-10.jpg",
					nombre:"White russian ",
					descripcion:"También esta su hermano gemelo el White russian, que perfectamente podría estar en esta lista y que se prepara de la misma manera pero con crema de leche. ",
					precio:"10.50€"				
				}											
			];
			$scope.randomCoctels();
		}
		$scope.randomNumber = function(i){
			//var num = Math.random() >= 0.5;
			//var chosenValue = Math.random() < 0.5 ? true : false;
			//return true;
			if (i<2)
				return true
			else if(i%5 == 0 || (i-1)%5 == 0  ){
				return true
			}else{
				return false;
			}
		}
		$scope.randomCoctels = function(){
			for (var  i = 0 ; i < $scope.cocteles.length ; i++){
				//$scope.cocteles[i].random = $scope.randomNumber(i);
				$scope.cocteles[i].random = true;
			}
			for (var  i = 0 ; i < $scope.postres.length ; i++){
				//$scope.postres[i].random = $scope.randomNumber(i);
				$scope.postres[i].random = true
			}
			for (var  i = 0 ; i < $scope.parrilla.length ; i++){
				//$scope.postres[i].random = $scope.randomNumber(i);
				$scope.parrilla[i].random = true
			}	
			for (var  i = 0 ; i < $scope.ensaladas.length ; i++){
				//$scope.postres[i].random = $scope.randomNumber(i);
				$scope.ensaladas[i].random = true
			}			
			for (var  i = 0 ; i < $scope.desayunos.length ; i++){
				//$scope.postres[i].random = $scope.randomNumber(i);
				$scope.desayunos[i].random = true
			}				
		}

}]);