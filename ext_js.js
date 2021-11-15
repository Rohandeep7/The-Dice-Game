function myFunc(){

  location.reload();

}
function dice_img(n,id){
  document.getElementById(id).src="images/dice"+n.toString()+".png"
}
function game(){
  var p1=Math.floor(Math.random()*6)+1;
  var p2=Math.floor(Math.random()*6)+1;
  dice_img(p1,"img1");dice_img(p2,"img2");
  if(p1>p2){
    document.querySelector("h1").innerHTML=" <i class=\"fas fa-trophy\"></i> Player 1 Wins !";
  }
  else if(p2>p1){
    document.querySelector("h1").innerHTML="Player 2 Wins ! <i class=\"fas fa-trophy\"></i>";
  }
  else{
    document.querySelector("h1").innerHTML="It's a Draw ! <i class=\"fas fa-handshake\"></i>";
  }
}
