var quiz_hp = {
"name":"Harry Potter Quiz",
"description":"What is your HP IQ?",
"question":"Do You Remember: ",
"questions": [
{ "question": "Who invented the Headless Hat?", "answer": "Fred and George Weasley", 
		"option1": "Richard",
		"option2": "Bean",
		"option3": "Stalk",
		"option4": "Fred and George Weasley"
},
{ "question": "In Harry Potter and the Prisoner of Azkaban, who orders a cherry syrup and soda with ice and umbrella from the Three Broomsticks?", "answer": "Cornelius Fudge",
		"option1": "Parker",
		"option2": "Harry",
		"option3": "Cornelius Fudge",
		"option4": "Weasley" 
 },
{ "question": "What is the name of Dumbledore's phoenix?", "answer": "Fawkes",
		"option1": "Tennesse",
		"option2": "Fawkes", 
		"option3": "Master Fudge",
		"option4": "Miss Weasley" 
}
]
}

var quiz_sp = {
"name":"Super Hero Name Quiz",
"description":"How many super heroes can you name?",
"question":"What is the real name of ",
"questions": [
{ "question": "Superman", "answer": "Clarke Kent", 
		"option1": "Richard",
		"option2": "Bean",
		"option3": "Stalk",
		"option4": "Clarke Kent"
},
{ "question": "Batman", "answer": "Bruce Wayne", 
		"option1": "Richard",
		"option2": "Bean",
		"option3": "Bruce Wayne",
		"option4": "Fred and George Weasley"
},
{ "question": "Wonder Woman", "answer": "Dianna Prince" ,
		"option1": "Richard",
		"option2": "Dianna Prince",
		"option3": "Stalk",
		"option4": "Fred and George Weasley"
}
]
}

var quiz_play = quiz_hp;

var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $start = document.getElementById("start");
var $choiceform = document.getElementById("formChoice");
var $choice = document.getElementById("quizChoice");
var $form = document.getElementById("answer");
var $begin = document.getElementById("begin");

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

// Event listeners // alert("You have chosen "+$choiceselected.value);
//$choiceform.addEventListener('onchange', function() { play() }, false);
$start.addEventListener('click', function() { play() } , false);

// hide the form at the start of the game
hide($form);
  
//// function definitions ////

function play(){
  switch ($choice.selectedIndex){
	  case 0:
		var quiz_play = quiz_hp;
		break;
	  case 1:
		var quiz_play = quiz_sp;
		break;
  }
  var score = 0 // initialize score
  update($score,score);
  // hide button and show form
  hide($start);
  hide($choiceform);
  hide($begin);
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
//	alert(quiz_play.questions[i].question);
    var question = quiz_play.questions[i].question;
	for (var j = 0; j < 4; j++) {
		//alert("The number is " + j);
		//alert(quiz_play.questions[i].answer);
		var select = document.getElementById("selectOption"); 
		var options = [quiz_play.questions[i].option1, quiz_play.questions[i].option2, quiz_play.questions[i].option3, quiz_play.questions[i].option4]; 
		var opt = options[j];
		//alert("Injected "+(j)+" : "+options[j]);
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
		//alert(select.options[j].text);
	}
    ask(question);
  }
  
  function ask(question) {
    update($question,quiz_play.question + question);
    //$form[0].value = "";
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
//	alert("Next Question: ");
	var select = document.getElementById("selectOption"); 
	//alert(select.options[2].text);
	for (k=0;k<4;k++){
//		select.removeChild(select.options[k]);
		select.remove(select.k);
	}
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
function mySelection() {
    alert("You selected: " + document.getElementById("selectChoice").value);
}