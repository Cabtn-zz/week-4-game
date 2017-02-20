var yourHero = '';
var enemy = '';
var score = 0;
var health = '';
var heroChosen = false;
var enemyChosen = false;
var enemyHealth = '';
var enemyAttack = '';
var enemyName = '';
var hasSpecial = true;
var audioElement = '';

function newGame() {
  yourHero = "";
  enemy = "";
  hasWon = false;
  hasSpecial = true;
  $(".remainingChar").appendTo(".panel-title");
  heroChosen = false;
  enemyChosen = false;
  $(".yourChar, .yourOpp, .currOpp").empty();
}
//Select your hero (Works)
  $(".hero").on("click", function(){
    if (heroChosen === false) {
      yourHero = $(this).attr('data-name');
      heroChosen = true;
      health = $(this).attr('data-health');
      attack = $(this).attr('data-attack');
      // $(".stats").replaceWith(yourHero + " " + "HP: " + health)
      $(this).appendTo(".yourChar");
      $(".remainingChar").appendTo(".yourOpp");
    }
    else {
      enemyName = $(this).attr('data-name');
      enemyChosen = true;
      enemy = this;
      $(this).appendTo(".currOpp");
      enemyHealth = $(this).attr('data-health')
      enemyAttack = $(this).attr('data-attack')
    }
  });

//Attack Button (Works) 
  $("#attack").on("click", function(){
    victory();
    if (heroChosen === true && enemyChosen === true && health > 0 && enemyHealth > 0){
      health = health - enemyAttack;
      enemyHealth = enemyHealth - attack;
      attack = Number(attack) + 6;
      $(".health").text(yourHero + " " + "HP: " + health);
      $(".enemyHealth").text(enemyName + " " + "HP: " + enemyHealth);
    }
    else if(health <= 0){
      console.log("you're dead");
    }
    else if (enemyHealth <= 0){
      console.log("win");
      $(enemy).fadeOut();
      $(".enemyHealth").text('')
    }
  });
//Special buttons (works mostly)
  $("#special").on("click", function(){ 
    if (yourHero === "Boromir" && hasSpecial === true){
      alert("HORN OF GONDOR. Your health has been doubled and you are strong");
      health = Number(health) * 2;
      attack = Number(attack) + 20;
      return hasSpecial = false;
    }
    if (yourHero === "Gandalf" && hasSpecial === true){
      alert("YOU SHALL NOT PASS");
      attack = 1000;
      health = Number(health) + 20
      return hasSpecial = false;

    }
    if (yourHero === "Legolas" && hasSpecial === true){
      alert("My arrows fly true. Your damage has increased and your enemies attack decreased");
      attack = Number(attack) * 5
      enemyAttack = 1
      health = Number(health) + 20;
      return hasSpecial = false;
    }
    if (yourHero === "Saruman" && hasSpecial === true){
      alert("YOU MUST JOIN SAURON. Enemy health is now 1");
      enemyHealth = 1;
      health = Number(health) + 50;
      return hasSpecial = false;
    }
  });

  function victory(){
    if(enemyHealth <= 0){
      alert("YOU BEAT THE GAME");
      score ++;
      console.log(score);
    }
    else if (score >= 3){
      newGame();
      console.log("new game");
    }
  }

 










