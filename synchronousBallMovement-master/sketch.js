var canvas, backgroundimage
var gamestate = 0
var playercount
var database
var allplayers
var form,game,player
function setup(){
  canvas = createCanvas(400,400)
  database = firebase.database()
  game=new Game();
  game.getstate();
  game.start();

}
function draw(){
  if(playercount === 4){
    game.update(1)
  }
  if(gamestate===1){
    clear();
    game.play();
  }
}