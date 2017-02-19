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
//Select your hero (Works)
  $(".hero").on("click", function(){
    if (heroChosen === false) {
      yourHero = $(this).attr('data-name');
      heroChosen = true;
      health = $(this).attr('data-health');
      attack = $(this).attr('data-attack');
      $(this).appendTo(".yourChar");
    }
  });
//Select your opponent (doesn't work)
  for (i=0; i<charArray.length; i++){
    if(i === -1){
      console.log("test");
    }
  }
//Attack Button (Works) I need to define an enemy attack variable. 
  $("#attack").on("click", function(){
    if (heroChosen === true && health >= 0)
    {
      health = health - attack;
      console.log(attack);
      console.log(health);
      attack = Number(attack) + 6;
    }
    else if(health <= 0)
      console.log("you're dead")
  })












    $(".hero").on("click", function(){
      if (!yourHero) {
        enemy = $(this).attr("id");
        console.log(health);
        $(this).appendTo(".yourOpp");
      }

});
