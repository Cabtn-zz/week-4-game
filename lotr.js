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

//   $(".yourChar, .yourOpp, .currOpp").empty();
}



  $(".thumbnail").on("click", function(){
    console.log('test');
  if (heroChosen === false) {
    yourHero = $("<div>");
    yourHero = $(this).attr("data-name")
    console.log(yourHero);
    $(" .yourChar").append(yourHero);
    heroChosen = true;
  }
});


var fridgeMagnet = $("<div>");
      // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
      fridgeMagnet.addClass("letter fridge-color")
      // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
      fridgeMagnet.text($(this).attr("data-letter"))
      // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
      $("#display").append(fridgeMagnet)