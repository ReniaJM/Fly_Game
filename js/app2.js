document.addEventListener("DOMContentLoaded", function(){
    function Coin() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    };

    function Furry() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";
    };
    function Game() {
        this.board = document.querySelectorAll("#board div");
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.index = function (x, y) {
            return x + (y * 10);
        };

        this.showfurry = function showFurry() {
            this.hideVisibleFurry();
            this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
        };
        this.showCoin = function showCoin() {
            this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
        };

        this.startGame = function () {
            var self = this;
            idInterval = setInterval(function () {
                self.moveFury();
            }, 250);
        };

        this.moveFury = function () {
            if (this.furry.direction === "right") {
                this.furry.x = this.furry.x + 1;
            }
            else if (this.furry.direction === "left") {
                this.furry.x = this.furry.x - 1;
            }
            else if (this.furry.direction === "down") {
                this.furry.y = this.furry.y + 1;
            }
            else if (this.furry.direction === "up") {
                this.furry.y = this.furry.y - 1;
            }
            this.checkCoinCollision();
            var bool = this.gameOver();
            if(!bool) {
                this.showfurry();
                this.showCoin();
            }
        };

        this.checkCoinCollision = function(){
            if(this.furry.x == this.coin.x && this.furry.y == this.coin.y){
                var coin = document.querySelector(".coin");
                coin.classList.remove('coin');
                this.score ++;
                this.coin = new Coin();
                this.showCoin();
                this.updateScore(this.score);
            }
        };

        this.gameOver = function () {
            if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9 ){
                clearInterval(idInterval);
                alert("GAME OVER!!!");
                return true;
            }
        };


        this.hideVisibleFurry = function () {
            var temp = document.querySelector(".furry");
            if(temp != null) {
                temp.classList.remove("furry");
            }
        };

        this.turnFurry = function(event) {
            switch (event.which) {
                case 37:
                    this.furry.direction = "left";
                    break;
                case 38:
                    this.furry.direction = "up";
                    break;
                case 39:
                    this.furry.direction = "right";
                    break;
                case 40:
                    this.furry.direction = "down";
                    break;

            }
        };

        this.updateScore = function(points){
            var score = document.querySelector("#score div strong");
            score.innerText = points;
        };

    };


    document.addEventListener('keydown', function (event) {
        one.turnFurry(event);
    });


    var one = new Game();
    one.showfurry();
    one.startGame();



});