angular.module('minhasDiretivas', [])
  .directive('meuPainel', function(){
    var ddo = {};

    ddo.restrict="AE"; //A = Atribute, E = Element. AE restringe essa diretiva para uso em atributos e elemtnos

    ddo.scope = { //definição do escopo da diretiva
        titulo: '@titulo' // @titulo significa que o parametro titulo no codigo html será atribuido para esse elemento
        //,url: '@url' //em vez de @titulo, pode ser informado apenas @ e o angular assume que o nome do atributo html será o mesmo do elemento do escopo da diretiva
    }

    ddo.transclude = true; //preserva elementos filhos no DOM
/*
    ddo.template =
      '<div class="panel panel-default"> <!-- inicio panel -->'
    + '    <div class="panel-heading">'
    + '      <h3 class="panel-title text-center">{{titulo}}</h3>'
    + '    </div>'
    + '    <div class="panel-body" ng-transclude> <!-- ng-transclude indica onde os elementos filhos serão inseridos -->'
    + '    </div>'
    + '</div> <!-- fim panel -->';
*/
    // para não colocar código html dentro do javascript, em vez de usar ddo.template, pode-se usar ddo.templateUrl
    ddo.templateUrl = 'js/directives/meu-painel.html';
    
    return ddo; // ddo é direct definition object
  });
