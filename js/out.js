!function(t){var r={};function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,r,n){i.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(r,"a",r),r},i.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},i.p="",i(i.s=3)}([function(t,r){t.exports=function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}},function(t,r){t.exports=function(){this.x=0,this.y=0,this.direction="right"}},function(t,r,i){i(1),i(0);t.exports=function(){this.board=document.querySelectorAll("#board div"),this.furry=new Furry,this.coin=new Coin,this.score=0,this.index=function(t,r){return t+10*r},this.showfurry=function(){this.hideVisibleFurry(),this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")},this.startGame=function(){var t=this;idInterval=setInterval(function(){t.moveFury()},250)},this.moveFury=function(){"right"===this.furry.direction?this.furry.x=this.furry.x+1:"left"===this.furry.direction?this.furry.x=this.furry.x-1:"down"===this.furry.direction?this.furry.y=this.furry.y+1:"up"===this.furry.direction&&(this.furry.y=this.furry.y-1),this.checkCoinCollision(),this.gameOver()||(this.showfurry(),this.showCoin())},this.checkCoinCollision=function(){this.furry.x==this.coin.x&&this.furry.y==this.coin.y&&(document.querySelector(".coin").classList.remove("coin"),this.score++,this.coin=new Coin,this.showCoin(),this.updateScore(this.score))},this.gameOver=function(){if(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9)return clearInterval(idInterval),alert("GAME OVER!!!"),!0},this.hideVisibleFurry=function(){var t=document.querySelector(".furry");null!=t&&t.classList.remove("furry")},this.turnFurry=function(t){switch(t.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="up";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="down"}},this.updateScore=function(t){document.querySelector("#score div strong").innerText=t}}},function(t,r,i){document.addEventListener("DOMContentLoaded",function(){var t=new(i(2));t.showfurry(),t.showCoin(),t.startGame(),document.addEventListener("keydown",function(r){t.turnFurry(r)})})}]);