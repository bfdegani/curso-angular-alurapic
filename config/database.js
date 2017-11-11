var Datastore = require('nedb')
    ,dbName = 'data.db'
    ,db;
/*
var doc = [
  {
  	"titulo": "Rinoceronte",
  	"url": "http://www.infoescola.com/wp-content/uploads/2008/05/rinoceronte-450x337.jpg",
  	"descricao": "Mamãe rinoceronte e seu filhote."
  },
  {
  	"titulo": "Lobo",
  	"url": "https://www.poesiafaclube.com/sites/default/files/ImagensPoemas/lobo-5739.jpg",
  	"descricao": "O Leão pode ser mais forte, mas o Lobo não trabalha no circo."
  },
  {
  	"titulo": "Gatinho",
  	"url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0BpZp8aXzb6HtNpew2rR_txwNczmOKEtvo2jD_Br_zf5FIJD",
  	"descricao": "Eu acho que vi um gatinho."
  },
  {
  	"titulo": "Ponte",
  	"url": "http://opiniaoenoticia.com.br/wp-content/uploads/2016/12/ponte-china.jpg",
  	"descricao": "A ponte mais alta do mundo é chinesa."
  },
  {
  	"titulo": "Futebol",
  	"url": "https://abrilvejasp.files.wordpress.com/2016/12/rogerio-ceni.jpeg?quality=70&strip=info&w=1000&h=666&crop=1",
  	"descricao": "Que frango!"
  },
  {
  	"titulo": "Pão de Açúcar",
  	"url": "http://www.dmsvaloistours.com/site/wp-content/uploads/2012/07/bondinho-p%C3%A3o-de-a%C3%A7%C3%BAcar-rio-de-janeiro.jpeg",
  	"descricao": "O Rio de Janeiro continua lindo."
  }
]
*/
if(!db) {
    db = new Datastore({
        filename: dbName,
        autoload: true
    });
/*
    //carga inicial do banco
    db.insert(doc, function(err, newDoc){
      if(err) {
        console.log(err);
      } else {
        console.log(newDoc);
      }
    });
    console.log('Banco ' + dbName + ' pronto para uso')
*/
};

module.exports = db;
