$(document).ready(function(){
//creat and object obtains questions and array of answers.
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
var quest = [];
//creat an array for correct answer:
var corrAns = ["B","C","C","A","C","C"]

//set a variable for the timer counting down from 60s: 
var time = 30;

//activate the timer:
timer();

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
		alert("Time Up! Please try again");
		incorrect++;
		$("#incorrect").html("incorrect:" + incorrect);
		time = 30;
		setTimeout(reset, 1000);
		questions.splice(ran, 1);
		AnswerOption.splice(ran, 1);
		corrAns.splice(ran,1);
	};
};

//creat reset for the game on the situation when the incorrect answer was entered or time up!
function reset() {
	//delete the question and answers so they will not appear again
	questions.splice(ran, 1);
	AnswerOption.splice(ran, 1);
	corrAns.splice(ran,1);

	ran = Math.floor(Math.random()*questions.length);

	if (questions.length===0){
		stop();
		$("#timeclock").empty();
		$("#rightwrong").empty();
		$("#qsection").html("<div><strong>Fantastic Job!</strong></div>"
						+"<div>Your result is:</div>"
						+"<div>Number of correct answer:"+correct+"</div>"
						+"<div>Number of incorrect answer:"+incorrect+"</div");
		return;
	}

	console.log(AnswerOption)

	$("#quest").html(questions[ran]);
	$("#A").html(AnswerOption[ran][0]);
	$("#B").html(AnswerOption[ran][1]);
	$("#C").html(AnswerOption[ran][2]);
	$("#D").html(AnswerOption[ran][3]);
	console.log(ran)
	
};

//on click button to choose the answer
	$("#A").on("click",function(){
		if (corrAns[ran]=="A") {
			correct++;
			alert ("correct!");
			$("#correct").html("correct:" + correct);
			
			setTimeout(reset, 1000)
			time =30;
		}
		else { 
			alert("Sorry, incorrect!");
			incorrect++;
			$("#incorrect").html("incorrect:" + incorrect);
			reset()
			time =30;

		}
	});

	$("#B").on("click",function(){
		if (corrAns[ran]=="B") {
			correct++;
			alert ("correct!");
			$("#correct").html("correct:" + correct);
			
			setTimeout(reset, 1000)
			time =30;

		}
		else { 
			alert("Sorry, incorrect!");
			incorrect++;
			$("#incorrect").html("incorrect:" + incorrect);
			reset();
			time =30;

		}
	});

	$("#C").on("click",function(){
		if (corrAns[ran]=="C") {
			correct++;
			alert ("correct!");
			$("#correct").html("correct:" + correct);
			
			setTimeout(reset, 1000);
			time =30;

		}
		else { 
			alert("Sorry, incorrect!");
			incorrect++;
			$("#incorrect").html("incorrect:" + incorrect);
			reset();
			time =30;

		}
	});

	$("#D").on("click",function(){
		if (corrAns[ran]=="D") {
			correct++;
			alert ("correct!");
			$("#correct").html("correct:" + correct);
			
			setTimeout(reset, 1000);
			time =30;

		}
		else { 
			alert("Sorry, incorrect!");
			incorrect++;
			$("#incorrect").html("incorrect:" + incorrect);
			reset();
			time =30;

		}
	});

});