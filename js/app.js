var turn=0;

var game = {
  count:0 ,
  player:null,
  set_move: function(casilla){
   return function(){
     if(casilla.firstChild===null){
       if(turn%2===0){
         casilla.textContent="X";
         console.log("Jugador X");
       }else{
         casilla.textContent="O";
         console.log("Jugador O");
       }
     turn++;
   }
   };//return
  },
};

document.addEventListener("DOMContentLoaded",function(event){
  var controlpad = document.getElementById("controlpad");
  var buttons =  controlpad.querySelectorAll("#controlpad button");
  var i;
  for(i=0 ; i<buttons.length ; i++){
    buttons[i].addEventListener("click",game.set_move(buttons[i]));
  }
  console.log("Initiated");
});
