import chalk from 'chalk';
import readlinesync from 'readline-sync'

let score = 0;

const highScores = [{
  name: "Prajwal",
  score: 3
}, {
  name: "Mike",
  score: 2
}];

const username = readlinesync.question(`${chalk.blue('Hi')}, what's your name? `);
console.log('Hi ' +  `${chalk.red(username)}` + " , let's see how well you know about F1?");

function checkAnswer(question, answer, type) {
  let useranswer;
  if(type) {
    useranswer = readlinesync.keyInYN(question);
  } else {
    useranswer = readlinesync.question(question);
  }

  if(type) {
    if(useranswer === answer) {
      console.log("You are right!");
      score = score + 1;
    } else {
      console.log('You are wrong!');
      score = score - 1;
    }
    return;
  } 
  
  if(useranswer.toUpperCase() == answer.toUpperCase()) {
    console.log('You are right!');
    score = score + 1;
  } else {
    console.log('You are wrong!');
    score = score - 1;
  }
}

const questions = [{question: `How many ${chalk.underline.green('world championships')} Sir Lewis Hamilton has won? `, answer: "7"}, {question: `Have ${chalk.underline.bgBlue('Nikita Mazepin')} scored any points in 2021 season? `, answer: false, type: "YN"}, {question: `What's ${chalk.underline.bold.red('Redbull')}'s 3rd driver name? `, answer: "Daniel Riccardo"}, {question: `has ${chalk.black('Sebestian Vettel')} retired from Formula 1?`, answer: "Yes"}, { question: "How are many races are going to be there in 2023 season?", answer: "24"}];

for(let i = 0; i < questions.length; i++) {
  checkAnswer(questions[i].question, questions[i].answer, questions[i].type);
}

console.log('Your final score is: ', score);

let beaten = '';
for(let i = 0; i < highScores.length; i++) {
  const highScore = highScores[i].score;
  const name = highScores[i].name;

  if(score > highScore) {
    beaten += name;
    beaten += "'s ";
  }
}

if(beaten != '') {
    console.log(`Yayy! ${chalk.green(username)} you have broken ${chalk.underline.green(beaten)} highscore`);
}