//ao contrario do que foi feito em main.js, aqui estamos usando um modelo existente 'alurapic' e não criando um novo.
//$scope serve para fazer o bind com o elemento ao qual o controller se refere
//$http serve para requisicoes ajax
angular.module('alurapic').controller('FotosController', function($scope, $http){

/*
  // carga manual da lista de fotos
  $scope.fotos = [
    {
      titulo: 'Leão 1',
      url: 'http://4.bp.blogspot.com/--u8QGfQAtKw/U69t3WEVyPI/AAAAAAAAA4I/Ujn3KaD25Zw/s1600/leao.png'
    },
    {
      titulo: 'Leão 2',
      url: 'https://img00.deviantart.net/bf61/i/2017/003/8/6/predator_lion_on_a_transparent_background__by_prussiaart-dau1uhi.png'
    },
    {
      titulo: 'Leão 3',
      url: 'http://nobacks.com/wp-content/uploads/2014/11/Lion-3-471x500.png'
    }
  ]
*/
  //carga da lista de fotos a partir de um ajax
  $scope.fotos = [];

  //implementando filtro
  $scope.filtro = '';

  /*
  $http.get('v1/fotos') //$http usa padrao promise. necessário o uso do metodo then para saber que o processmento ocorreu
    .then(function(retorno){
      $scope.fotos = retorno.data;
    }).catch(function(error){
      console.log(error);
    });
  */
  // implementação alternativa a de cima. em vez de usar then e catch, usamos success e error
  $http.get('v1/fotos')
    .success(function(fotos){
      $scope.fotos = fotos;
    })
    .error(function(e){
      console.log(e);
    })
});
