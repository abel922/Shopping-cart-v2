var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping');

var products =  [
  new Product({
  imagePath: 'https://www.boxkeys.co.uk/wp-content/uploads/2017/06/starwars-ps4.jpg',
  title: 'Star Wars Battlefront II Game',
  description: 'Star Wars Battlefront II is an upcoming action shooter video game based on the Star Wars film franchise. It is the fourth major installment of the Star Wars: Battlefront series and seventh overall, and a sequel to the 2015 reboot of the series. It is under development by EA DICE in collaboration with Criterion Games and Motive Studios, and published by Electronic Arts.',
  price: 60
  }),
  new Product({
  imagePath: 'http://store.hbo.com/imgcache/property/resized/000/614/129/catl/inside-hbos-game-of-thrones-hardcover-book-910_1000.jpg?k=ef9a1880&pid=370502&s=catl&sn=hbo',
  title: 'Game of Thrones Book',
  description: 'Set on the fictional continents of Westeros and Essos, Game of Thrones has several plot lines and a large ensemble cast but centers on three primary story arcs. The first story arc centers on the Iron Throne of the Seven Kingdoms and follows a web of alliances and conflicts among the dynastic noble families either vying to claim the throne or fighting for independence from the throne',
  price: 40
  }),
  new Product({
  imagePath: 'http://i.imgur.com/TaY021u.jpg',
  title: 'Kingdom Hearts III',
  description: ' is an upcoming action role-playing game developed and published by Square Enix for the PlayStation 4 and Xbox One. It is the twelfth installment in the Kingdom Hearts series, sequel to Kingdom Hearts II, and the final chapter in the Dark Seeker saga.',
  price: 75
  }),
  new Product({
  imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81Oj9rnePcL.jpg',
  title: 'Supernatural Poster',
  description: 'is an American fantasy horror television series created by Eric Kripke. It was first broadcast on September 13, 2005, on The WB, and subsequently became part of successor The CW lineup. Starring Jared Padalecki as Sam Winchester and Jensen Ackles as Dean Winchester, the series follows the two brothers as they hunt demons, ghosts, monsters, and other supernatural beings',
  price: 25
  }),
  new Product({
  imagePath: 'http://vignette1.wikia.nocookie.net/strangerthings8338/images/0/09/Stranger_Things_Season_1.png/revision/latest?cb=20160814211924',
  title: 'Stranger Things First Season',
  description: 'Set in the fictional town of Hawkins, Indiana in the 1980s, the first season focuses on the investigation into the disappearance of a young boy amid supernatural events occurring around the town including the appearance of a girl with psychokinetic abilities who helps the missing boy friends in their own search.',
  price: 45
  }),
  new Product({
  imagePath: 'http://www.3djuegos.com/juegos/1313/devil_may_cry_3_dantes_awakening/fotos/ficha/devil_may_cry_3_dantes_awakening-1680534.jpg',
  title: 'Devil May Cry 3',
  description: 'The game is a prequel to the original Devil May Cry, with a younger Dante. It retains elements from the two previous games, expanding its combat system with a number of fighting styles. The story is told primarily in cutscenes using the games engine, with several pre-rendered full motion videos.',
  price: 35
  })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result){
    done++;
    if (done === products.length) {
        exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
