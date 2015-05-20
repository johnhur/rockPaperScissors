
var compChoice;
var rock = document.getElementById('rock'); 
var scissors = document.getElementById('scissors');
var paper = document.getElementById('paper');

var arr = [rock, scissors, paper];
var userChoice;
var wins = 0, losses = 0;

// for(var i = 0; i<3; i++){

// 	console.log(arr[i])
// 	arr[i].addEventListener('click', function(){
// 		userChoice = i+1;
// 		//var compChoice = Math.floor(Math.random()*3)+1;
// 		compChoice = 1
// 		if (userChoice === compChoice) {
// 		console.log("it's a tie");


// 	}

// 	console.log("clicked")
// 	})
	
//}

rock.addEventListener('click', function(){
	var compChoice = Math.floor(Math.random()*3)+1;
	userChoice = 1;	
	compare(userChoice, compChoice, revealCC(compChoice)); 
})

scissors.addEventListener('click', function(){
	var compChoice = Math.floor(Math.random()*3)+1;
	userChoice = 2;	
	compare(userChoice, compChoice, revealCC(compChoice)); 
})

paper.addEventListener('click', function(){
	var compChoice = Math.floor(Math.random()*3)+1;
	userChoice = 3;	
	compare(userChoice, compChoice, revealCC(compChoice)); 
})

function compare(userChoice, compChoice, compChoiceName) {
	if (userChoice === compChoice) {
		alert('tie! computer choice was ' + compChoiceName);
	}
	else if (compChoice === 3 && userChoice === 1 ||
		     compChoice === 2 && userChoice === 3 ||
		     compChoice === 1 && userChoice === 2) {
		alert('computer wins! computer choice was ' + compChoiceName);
	    losses++;
	    document.getElementById('losses').innerHTML = 'Losses:'+losses;
	}
	else if (userChoice === 3 && compChoice === 1 ||
		     userChoice === 2 && compChoice === 3 ||
		     userChoice === 1 && compChoice === 2) {
		alert('YOU win! computer choice was ' + compChoiceName);
	    wins++;
	    document.getElementById('wins').innerHTML = 'Wins:'+wins;
	}
}

function revealCC(compChoice) {
	if (compChoice === 1) {
		return 'rock'
	}
	else if (compChoice === 2) {
		return 'scissors'
	}
	else if (compChoice === 3) {
		return 'paper'
	}
}




