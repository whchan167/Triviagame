$(document).ready(function(){
//create and object obtains questions and array of answers.
var questions = ["Besides Tom Cruise, who is the only actor appear in all five 'Mission:Impossible' movies?",
				 "In which time period do 'The Lord of the Rings' and 'The hobbits' take place?",
				 "In the movie 'Dr. Strange', what does Stephen Strange do to defend Earth from Dormammu?",
				 "In 'Fast and Furious 7', who plays a 'bad guy' role and injure the Rock?",
				 "Who will play 'Belle' in the latest 'Beauty and the Beast' movie?",
				 "How many total superheros show up at the airport fight scene in the 'Captain America: Civil War'"
				];
var AnswerOption = [ ["Jeremy Renner", "Ving Rhames", "Simon Pegg", "Daniel Craig"],
					 ["Forth Age", "Second Age", "Third Age", "Sixth Age"],
					 ["Calling all Avengers", "Using ultimate weapon", "Creating infinite time loop", "Using mind control"], 
					 ["Jason Statham", "Van Diesel", "Tyrese Gibson", "Paul Walker"],	
   					 ["Gugu Mbatha", "Lily James", "Emma Watson", "Chloe Moretz"],
					 ["10", "11", "12", "13"]
					];	

//create an array for correct answer:
var corrAns = ["B","C","C","A","C","C"];

var images = ["MI.gif", "LR.gif", "strange.gif", "FF7.gif", "BB.gif", "CA.gif"];

//create the same array with different variables to push content back to empty array later
var questions2=["Besides Tom Cruise, who is the only actor appear in all five 'Mission:Impossible' movies?",
				 "In which time period do 'The Lord of the Rings' and 'The hobbits' take place?",
				 "In the movie 'Dr. Strange', what does Stephen Strange do to defend Earth from Dormammu?",
				 "In 'Fast and Furious 7', who plays a 'bad guy' role and injure the Rock?",
				 "Who will play 'Belle' in the latest 'Beauty and the Beast' movie?",
				 "How many total superheros show up at the airport fight scene in the 'Captain America: Civil War'"
				]; 
var AnswerOption2=[ ["Jeremy Renner", "Ving Rhames", "Simon Pegg", "Daniel Craig"],
					 ["Forth Age", "Second Age", "Third Age", "Sixth Age"],
					 ["Calling all Avengers", "Using ultimate weapon", "Creating infinite time loop", "Using mind control"], 
					 ["Jason Statham", "Van Diesel", "Tyrese Gibson", "Paul Walker"],	
   					 ["Gugu Mbatha", "Lily James", "Emma Watson", "Chloe Moretz"],
					 ["10", "11", "12", "13"]
					];
var corrAns2=["B","C","C","A","C","C"];

var images2 = ["MI.gif", "LR.gif", "strange.gif", "FF7.gif", "BB.gif", "CA.gif"];


//set a variable for the timer counting down from 60s: 
var time = 30;

//activate the timer:
timer();
//hiddenBtn is hid.
$("#hiddenBtn").hide();


//create variable for number of correct or incorrect:
var correct = 0;
var incorrect = 0;

//create a random number
var ran = Math.floor(Math.random()*questions.length);
console.log(ran);

//display questions and AnswerOptions 
$("#quest").html(questions[ran]);
$("#A").html(AnswerOption[ran][0]);
$("#B").html(AnswerOption[ran][1]);
$("#C").html(AnswerOption[ran][2]);
$("#D").html(AnswerOption[ran][3]);



//create the timer counting down from 60s
function timer() {
	counter = setInterval(decrement, 1000);
};
function stop() {
	clearInterval(counter);
};
function decrement(){
	time --;
	$("#timeclock").html("<h3> Seconds left:" + "<hr>"+ "00:" + time + "s"+ "</h3>");
//if time up, alert user. Reset game and add incorrect count	
	if (time === 0){
		stop();
		alert("Time Up! Please try again");
		incorrect++;
		$("#incorrect").html("incorrect:" + incorrect);
		time = 30;
		reset();
		questions.splice(ran, 1);
		AnswerOption.splice(ran, 1);
		corrAns.splice(ran, 1);
		images.splice(ran,1);
		};
};
function resetgame(){
		timer();
		correct=0;	
		incorrect=0;
		$("#correct").html("correct:" + correct);
		$("#incorrect").html("incorrect:" + incorrect);
		
		ran = Math.floor(Math.random()*questions.length);

		$("#quest").html(questions[ran]);
		$("#A").html(AnswerOption[ran][0]);
		$("#B").html(AnswerOption[ran][1]);
		$("#C").html(AnswerOption[ran][2]);
		$("#D").html(AnswerOption[ran][3]);

		$("#timeclock").show();
		$("#rightwrong").show();
		$("#quest").show();
		$("#button").show();
		$("#hiddenBtn").hide();
		$("#question").empty();

};

//create reset for the game on the situation when the incorrect answer was entered or time up!
function reset() {
	timer();
	$("#quest").show();
	$("#button").show();
	$("#question").empty();
	questions.splice(ran, 1);
	AnswerOption.splice(ran, 1);
	corrAns.splice(ran, 1);
	images.splice(ran,1);

	ran = Math.floor(Math.random()*questions.length);

	if (questions.length===0){
		stop();
		$("#timeclock").hide();
		$("#rightwrong").hide();
		$("#quest").hide();
		$("#button").hide();
		$("#question").html("<div><strong>Fantastic Job!</strong></div>"
						+"<div>Your result is:</div>"
						+"<div>Number of correct answer:"+correct+"</div>"
						+"<div>Number of incorrect answer:"+incorrect+"</div");
		$("#hiddenBtn").show();
		for (var i=0; i<questions2.length; i++){
			questions.push(questions2[i]);
			AnswerOption.push(AnswerOption2[i]);
			corrAns.push(corrAns2[i]);
			images.push(images2[i]);
			}
		$("#hiddenBtn").on("click", function(){
				resetgame();
		});
		return;
	};


	$("#quest").html(questions[ran]);
	$("#A").html(AnswerOption[ran][0]);
	$("#B").html(AnswerOption[ran][1]);
	$("#C").html(AnswerOption[ran][2]);
	$("#D").html(AnswerOption[ran][3]);
	};	

//Correct answer clicked and display the correct message and image
	function CorrImage() {
		stop();
		correct++;
		$("#quest").hide();
		$("#button").hide();
		$("#correct").html("correct:" + correct);
		$("#question").html("<div>You are Correct!</div>" + "<div>" + "<img src='assets/images/"+ images[ran] + "' width='400' height='300'>" +"</div>");
		setTimeout(reset, 3000);
		time = 30;
		}

//Incorrect answer clicked and alert user that the answer is incorrect
	function IncorrImage() {
		stop();
		incorrect++;
		$("#quest").hide();
		$("#button").hide();
		$("#question").html("<div>Sorry Incorrect!</div>" + "<div>" + "<img src='assets/images/ultron.gif' width='400' height='300'>" + "</div>");
		$("#incorrect").html("incorrect:" + incorrect);
		setTimeout(reset, 3000);
		time =30;
	}

//on click button to choose the answer
	$("#A").on("click",function(){
		if (corrAns[ran]=="A") {
			CorrImage();
		}
		else { 
			IncorrImage();

		}
	});

	$("#B").on("click",function(){
		if (corrAns[ran]=="B") {
			CorrImage();

		}
		else { 
			IncorrImage();
		}
	});

	$("#C").on("click",function(){
		if (corrAns[ran]=="C") {
			CorrImage();
			
		}
		else { 
			IncorrImage();

		}
	});

	$("#D").on("click",function(){
		if (corrAns[ran]=="D") {
			CorrImage();

		}
		else { 
			IncorrImage();
		}
	});
});

