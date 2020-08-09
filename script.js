function submitAnswers(){
	var total = 5;
	var score = 0;
	
	// Get User Input
	var q1 = document.forms["quizForm"]["question1"].value;
	var q2 = document.forms["quizForm"]["question2"].value;
	var q3 = document.forms["quizForm"]["question3"].value;
	var q4 = document.forms["quizForm"]["question4"].value;
	var q5 = document.forms["quizForm"]["question5"].value;
	
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('You missed question '+ i);
			return false;
		}
	}
	
	// Set Correct Answers
	var answers = ["c","c","b","d","b"];
	
	// Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}
	
	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	
	return false;
}