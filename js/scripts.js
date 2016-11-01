var quiz_hp = {
"name":"Harry Potter Quiz",
"description":"What is your HP IQ?",
"question":"Do You Remember: ",
"questions": [
{ "question": "Who invented the Headless Hat?", "answer": "Fred and George Weasley" },
{ "question": "In Harry Potter and the Prisoner of Azkaban, who orders a cherry syrup and soda with ice and umbrella from the Three Broomsticks?", "answer": "Cornelius Fudge" },
{ "question": "What is the name of Dumbledore's phoenix?", "answer": "Fawkes" }
]
}

var quiz_sp = {
"name":"Super Hero Name Quiz",
"description":"How many super heroes can you name?",
"question":"What is the real name of ",
"questions": [
{ "question": "Superman", "answer": "Clarke Kent" },
{ "question": "Batman", "answer": "Bruce Wayne" },
{ "question": "Wonder Woman", "answer": "Dianna Prince" }
]
}

var quiz_play = quiz_hp;

//// views ////
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $start = document.getElementById("start");
var $form = document.getElementById("answer");

/// view functions ///

function update(element,content,klass) {
  var p = element.firstChild || document.createElement("p");
  p.textContent = content;
  element.appendChild(p);
  if(klass) {
    p.className = klass;
  }
}

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

// Event listeners
$start.addEventListener('click', function() { play(quiz_play) } , false);

// hide the form at the start of the game
hide($form);
  
//// function definitions ////

function play(quiz_play){
  var score = 0 // initialize score
  update($score,score);
  // hide button and show form
  hide($start);
  show($form);
  // add event listener to form for when it's submitted
  $form.addEventListener('submit', function(event) { 
    event.preventDefault();
    check($form[0].value);
    }, false);
  var i = 0;
  chooseQuestion();

  // nested functions
  
  function chooseQuestion() {
    var question = quiz_play.questions[i].question;
    ask(question);
  }
  
  function ask(question) {
    update($question,quiz_play.question + question+"?");
    $form[0].value = "";
    $form[0].focus();
  }

  function check(answer) {
    if(answer === quiz_play.questions[i].answer){
      update($feedback,"Correct!","correct");
      // increase score by 1
      score++;
      update($score,score)
    } else {
      update($feedback,"Wrong!","wrong");
    }
    i++;
    if(i === quiz_play.questions.length) {
      gameOver();
    } else {
      chooseQuestion();
    }
  }

  function gameOver(){
    // inform the player that the game has finished and tell them how many points they have scored
    update($question,"Game Over, you scored " + score + " points");
    hide($form);
    show($start);
  }
}
