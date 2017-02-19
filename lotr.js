var yourHero = '';
var enemy = '';
var charArray = ["Boromir", "Gandalf", "Legolas", "Saruman", "Sauron"];
var score = 0;
var health = '';
var heroChosen = false


function newGame() {
  yourHero = "";
  enemy = "";
  charArray = [];
  hasWon = false;
  hasSpecial = true;

  $(".yourChar, .yourOpp, .currOpp").empty();
}

  $(".caption").on("click", function(){
  alert('test');
  // if (heroChosen === false) {
  //   yourHero = $(this).attr("data-name")
  //   console.log(yourHero);
  });



