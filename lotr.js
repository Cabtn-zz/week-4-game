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
var theGrey = './assets/gandalf.jpg';
var theWhite = './assets/gwhite.jpg';
var music = './assets/background.mp3';
var horn = './assets/gondor.mp3';


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
var playersChosenAndAlive = heroChosen === true && enemyChosen === true && health > 0 && enemyHealth > 0;
var isPlayerDead = health <= 0;
var isEnemyDead = enemyHealth <= 0;

  if (playersChosenAndAlive){
    health = health - enemyAttack;
    enemyHealth = enemyHealth - attack;
    attack = Number(attack) + 6;
    $(".health").text(yourHero + " " + "HP: " + health);
    $(".enemyHealth").text(enemyName + " " + "HP: " + enemyHealth);
  }
  checkVictory();
});
//Special buttons (works mostly)
$("#special").on("click", function(){ 
  if (yourHero === "Boromir" && hasSpecial === true){
    alert("HORN OF GONDOR. Your health has been doubled and you are strong");
    $('audio[src="' + music + '"]').attr('src', horn);
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
    attack = Number(attack) * 3
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

function checkVictory(){
  if(enemyHealth <= 0){
    $(enemy).fadeOut();
    // $(".enemyHealth").toggle();
    score++;
    console.log(score);
    alert("YOU BEAT THE GAME, Choose your next opponent");
  }
  else if (health <= 0){
      if (yourHero === "Gandalf"){
        console.log('is this running?')
        $('img[src="' + theGrey + '"]').attr('src', theWhite);
        alert("I come back to you now at the turn of the tide")
        health = 1000;
        attack = 1000; 
      }
    else {
      alert("The enemy has found the Ring");
    }
  }
}










