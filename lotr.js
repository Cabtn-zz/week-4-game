function game() {
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
  var secret = false;
  var hitopints = '';
  var enemyHitPoints
  var theGrey = './assets/gandalf.jpg';
  var theWhite = './assets/gwhite.jpg';
  var music = './assets/background.mp3';
  var horn = './assets/gondor.mp3';
  var pass = './assets/shallnotpass.mp3';
  var bow = './assets/legolas.mp3';
  var saruman ='./assets/saruman.mp3';
  var sauron ='./assets/sauron.mp3';
  var gWhite ='./assets/gwhite.mp3';
  var sarumanImg = './assets/saruman.jpg';
  var sauronImg = './assets/sauron.jpg';
  var revive = false; 
  startGame();
  //I need to fix this to work with a restart button. This is essentially a blank slate. [Doesn't work]
  function startGame() {
  //Select your hero (Works)
    $(".hero").on("click", function(){
      if (heroChosen === false) {
        yourHero = $(this).attr('data-name');
        heroChosen = true;
        var element = $(".remainingChar").detach();
        health = $(this).attr('data-health');
        attack = $(this).attr('data-attack');
        $(this).appendTo(".yourChar");
        hitPoints = $(".yourChar").find("p").text(yourHero + " " + "HP: " + health);
        $(element).appendTo(".yourOpp");
      }
      //Your second click selects your enemy
      else {
        enemyName = $(this).attr('data-name');
        enemy = this;
        $(this).appendTo(".currOpp");
        enemyHealth = $(this).attr('data-health')
        enemyAttack = $(this).attr('data-attack')
        enemyHitPoints = $(".currOpp").find("p").text(enemyName + " " + "HP: " + enemyHealth);
        enemyChosen = true;
      }
    });
    //Attack Button (Works) 
    $("#attack").on("click", function(){
      hitPoints = $(".yourChar").find("p").text(yourHero + " " + "HP: " + health +" Attack: " + attack);
      enemyHitPoints = $(".currOpp").find("p").text(enemyName + " " + "HP: " + enemyHealth);
    //Created these variables to make it easer to read the if statement
    var playersChosenAndAlive = heroChosen === true && enemyChosen === true && health > 0 && enemyHealth > 0;
    var isPlayerDead = health <= 0;
    var isEnemyDead = enemyHealth <= 0;
    //This changes the health/attack/and enemy health
      if (playersChosenAndAlive){
        health = health - enemyAttack;
        enemyHealth = enemyHealth - attack;
        attack = Number(attack) + 7;
        hitPoints = $(".yourChar").find("p").text(yourHero + " " + "HP: " + health + " Attack: " + attack);
        enemyHitPoints = $(".currOpp").find("p").text(enemyName + " " + "HP: " + enemyHealth);
      }
      //victory function, will you summon Sauron?
      checkVictory();
    });
    //Special buttons, different depending on your character
    $("#special").on("click", function(){ 
      if (yourHero === "Boromir" && hasSpecial === true){
        alert("HORN OF GONDOR. Your health has been doubled and you are stronger");
        $('audio').attr('src', horn);
        health = Number(health) * 2;
        attack = Number(attack) + 20;
        hitPoints = $(".yourChar").find("p").text(yourHero + " " + "HP: " + health + " Attack: " + attack);
        enemyHitPoints = $(".currOpp").find("p").text(enemyName + " " + "HP: " + enemyHealth);
        return hasSpecial = false;
      }
      if (yourHero === "Gandalf" && hasSpecial === true){
        $('audio').attr('src', pass);
        enemyHealth = Number(enemyHealth) - 300;
        health = Number(health) + 20
        hitPoints = $(".yourChar").find("p").text(yourHero + " " + "HP: " + health + " Attack: " + attack);
        enemyHitPoints = $(".currOpp").find("p").text(enemyName + " " + "HP: " + enemyHealth);
        return hasSpecial = false;
      }
      if (yourHero === "Legolas" && hasSpecial === true){
        alert("My arrows fly true. Your damage has increased and your enemies attack decreased");
        $('audio').attr('src', bow);
        attack = Number(attack) * 3
        enemyAttack = 1
        health = Number(health) + 20;
        hitPoints = $(".yourChar").find("p").text(yourHero + " " + "HP: " + health + " Attack: " + attack);
        enemyHitPoints = $(".currOpp").find("p").text(enemyName + " " + "HP: " + enemyHealth);
        return hasSpecial = false;
      }
      if (yourHero === "Saruman" && hasSpecial === true){
        alert("YOU MUST JOIN SAURON. Enemy health is now 1");
        $('audio').attr('src', saruman);
        enemyHealth = 1;
        health = Number(health) + 50;
        hitPoints = $(".yourChar").find("p").text(yourHero + " " + "HP: " + health + " Attack: " + attack);
        enemyHitPoints = $(".currOpp").find("p").text(enemyName + " " + "HP: " + enemyHealth);
        return hasSpecial = false;
      }
    });
    //check to see if you face sauron, revive as gandalf the white or if you lose.
    function checkVictory(){
      var secretLevel = enemyHealth <=0 && score > 1 && secret === false
      if (secretLevel){
        $('img[src="' + sarumanImg + '"]').attr('src', sauronImg);
        $('audio').attr('src', sauron);
        alert("The Lord of the Ring has arrived")
        enemyHealth = 4000;
        enemyAttack = 100;
        enemyHitPoints = $(".currOpp").find("p").text(enemyName + " " + "HP: " + enemyHealth);
        return secret = true 
      }
      else if(enemyHealth <= 0){
        $(enemy).fadeOut();
        score++;
        console.log(score);
        alert("You won this round, choose your next opponent");
      }
      else if (health <= 0){
          if (yourHero === "Gandalf" && revive === false){
            $('img[src="' + theGrey + '"]').attr('src', theWhite);
            $('audio').attr('src', gWhite);
            health = 1000;
            attack = 400;
            hitPoints = $(".yourChar").find("p").text(yourHero + " " + "HP: " + health);;
            return hasSpecial = true;
            return revive = true; 
          }
        else {
          alert("The enemy has found the Ring");
        }
      }
    }
  }

 $("#restart").on("click", function(){
    $(enemy).fadeIn();
    $(".yourHero, .yourOpp, .yourChar, .currOpp").appendTo(".reset");
    game();
    console.log("test");
  });

}





