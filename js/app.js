document.addEventListener("DOMContentLoaded", function(){

var Game = require('./game.js');

var game = new Game();
game.showfurry();
game.showCoin();
game.startGame();


    document.addEventListener('keydown', function (event) {
        game.turnFurry(event);
    });

});