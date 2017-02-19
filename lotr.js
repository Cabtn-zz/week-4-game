var yourHero = '';
var enemy = '';
var charArray = ["Boromir", "Gandalf", "Legolas", "Saruman", "Sauron"];
var score = 0;
var health = '';
var heroChosen = false
//not sure if this oppenent variable is the right approach
var oppenent = charArray.indexOf("data-name");


function newGame() {
  yourHero = "";
  enemy = "";
  hasWon = false;
  hasSpecial = true;

  $(".yourChar, .yourOpp, .currOpp").empty();
}



  $(".hero").on("click", function(){
  if (heroChosen === false) {
    yourHero = $(this).attr("id");
    heroChosen = true;
    $(this).appendTo(".yourChar");
    charArray.splice("id", 1);
    console.log(charArray);
  }
  else {
    console.log(charArray);
    console.log(oppenent);
    // charArray.addClass("enemy");
    // $(".enemy").appendTo(".yourOpp");
  }
});
