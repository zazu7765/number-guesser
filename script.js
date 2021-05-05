let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//return a random integer between 0 and 9
const generateTarget=()=> Math.floor(Math.random()*10);
//get the distance between two numbers
const getAbsoluteDistance=(n1,n2)=>Math.abs(n1-n2);
//determine which guess is closest
const compareGuesses=(user,cpu,target)=>user<10&&user>0?getAbsoluteDistance(target,user)<=getAbsoluteDistance(target,cpu):alert('Not a valid user input!');
//update score after each round
const updateScore=winner=> winner==='human'?humanScore++:computerScore++;
//advance the round
const advanceRound=()=> currentRoundNumber++;