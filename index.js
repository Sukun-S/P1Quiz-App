const readLineSync = require('readline-sync');

var name = readLineSync.question("Hey there !!! Please enter your name ..");



console.log("Welcome " + name);

var answer = readLineSync.question("Do u want to play Quiz (Y/N)");

if (answer === "Y") {
    console.log("Let' play the quiz");
}
else {
    console.log("Ciao");
    process.exit();
}


var score = 0;

var toppers = [
    {
        name: "Gugul",
        points: 5
    },
    {
        name: "Sikun",
        points: 4
    }

]

var questions = [
    {
        question: "What's my favourite Sports ?",
        answer: "VolleyBall"
    },
    {
        question: "Am I Shy?",
        answer: "Yes"
    },
    {
        question: "Where do I live ?",
        answer: "Earth"
    },
    {
        question: " Who I love the most ?",
        answer: "me"
    },
    {
        question: "My fav pop Star?",
        answer: "Dua Lipa"
    }

]

function play(question, answer) {
    var userAnswer = readLineSync.question(question);
    if (userAnswer === answer) {
        console.log("Absolutely Correct !");
        score += 1;
    }
    else {
        console.log("Well you are wrong, once more");

    }
    console.log("The Score is " + score);
    console.log("--------------------");

}


for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}


console.log("Your final score is " + score)
if (score >= toppers[0].points || score >= toppers[1].points) {
    console.log("Oh my my, You are one of the highest scorer");
    

}

console.log("Thanks for taking the quiz");
