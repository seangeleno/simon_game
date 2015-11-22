var playerGuess = []
,   currentCombo = []
,   playerScore = 0
,   count = 0
,   buttons = $('.buttons')
,   sound1 = document.querySelector("#sound1")
,   sound2 = document.querySelector("#sound2")
,   sound3 = document.querySelector("#sound3")
,   sound4 = document.querySelector("#sound4")
,   sound5 = document.querySelector("#sound5")
,   soundsArray = [sound1, sound2, sound3, sound4, sound5];

//flash button effect
function flashButton(index){
  $(buttons[index]).fadeTo('fast', 0.2).fadeTo('fast', 1.0);
  playSound(index);
};

//start button
var buttonClick = document.querySelectorAll('.buttons');
var startGame = document.querySelector('.startButton');
  startGame.addEventListener('click', function(){
    if (currentCombo.length < 1){
      currentCombo.push(randomize());
      console.log(currentCombo);
      flashButton(currentCombo[0]);
    }
  count++;
  });
