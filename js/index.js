var app = angular.module("myApp", []);
app.controller("myCtrl", function( $scope) {

    $scope.lista = [
        "0-9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

    ]

    $scope.clickOptionFun = function (index) {
        $scope.selectLista = index;
        $scope.arealist = [];
  
        angular.forEach($scope.contenido, function(value) {
            $scope.segundo = value;
            angular.forEach($scope.segundo.items, function(value) {
              $scope.name = value;
              var slice2 = $scope.name.nick.slice(0,1).toUpperCase() ;
              console.log("slice2", slice2);
              if(slice2 == $scope.selectLista){
                  $scope.arealist.push($scope.name);
                  console.log("entro", $scope.arealist);
                  }
                });
          });
    }

    $scope.contenido =[{
      "pageTitle": "Listado",
      "viewMoreLabel": "Ver más",
      "items": [
        {
          "id": 1000,
          "nick": "xPeque",
          "team": "xXXx",
          "name": "Pepe",
          "surname": "Perez",
          "role": "DPS",
          "imageURL": "http://img.dummy-image-generator.com/abstract/dummy-320x427-DesiccationCracks.jpg",
          "roleLink": {
            "URL": "http://www.google.com",
            "target": "_blank"
          }
        },
        {
          "id": 1001,
          "nick": "Toneti",
          "role": "Tank",
          "imageURL": "http://img.dummy-image-generator.com/abstract/dummy-320x427-FairyLights.jpg"
        },
        {
          "id": 1002,
          "nick": "SamuLx",
          "role": "Heal",
          "imageURL": "http://img.dummy-image-generator.com/abstract/dummy-320x427-Goemetry.jpg",
          "roleLink": {
            "URL": "http://www.blizzard.com"
          }
        },
        {
          "id": 1004,
          "nick": "xBoltt",
          "team": "xXXx",
          "name": "Juanmi",
          "role": "Tank",
          "imageURL": "http://img.dummy-image-generator.com/abstract/dummy-320x427-DesiccationCracks.jpg",
          "roleLink": {
            "URL": "http://www.google.com",
            "target": "_blank"
          }
        },
        {
          "id": 1005,
          "nick": "Caponata",
          "role": "Ranged"
        },
        {
          "id": 1006,
          "nick": "Lolita",
          "role": "Heal",
          "imageURL": "http://img.dummy-image-generator.com/abstract/dummy-320x427-Goemetry.jpg",
          "roleLink": {
            "URL": "http://www.blizzard.com"
          }
        },
        {
          "id": 1007,
          "nick": "Valeria",
          "name": "Maria",
          "imageURL": "http://img.dummy-image-generator.com/abstract/dummy-320x427-Circus.jpg"
        }
      ]
    }
    ]
    $scope.hola = $scope.contenido[0].items;
    $scope.arealist = $scope.hola;
    $scope.todos= function(){
      $scope.arealist = $scope.hola;
    }
    $scope.pepe = function(event){

      $scope.arealist = [];

      $scope.letra = event.target.id;
      angular.forEach($scope.contenido, function(value) {
          $scope.segundo = value;
          angular.forEach($scope.segundo.items, function(value) {
            $scope.name = value;
            var slice2 = $scope.name.nick.slice(0,1).toUpperCase() ;
            console.log("slice2", slice2);
            if(slice2 == $scope.letra){
                $scope.arealist.push($scope.name);
                console.log("entro", $scope.arealist);
                }
              });
        });

    };


});
