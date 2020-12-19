const chalk = require('chalk');
var readlineSync = require('readline-sync');
const log = console.log;
var userName = readlineSync.question(chalk.bold.greenBright("\nWhat is your Name?\n"))

var count =0;

var counting=[{
  name:"Sakshi",
  score:"2"
},
]

log("\nHello! "+chalk.italic.blueBright.bold(userName.toUpperCase())+ " Welcome to " + chalk.bold.bgWhite.black("Javascript Quiz") );
log(chalk.yellowBright("\n--------------------------------------------\n"));

function quiz(question,answer){
  var userAnswer = readlineSync.question(chalk.bold(question));
  
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    log("\nYour answer is "+chalk.bold.green("Correct"));
    count++;
  }else{
    log("\nYour answer is "+chalk.bold.red("Incorrect"));
    count--;
  }

  
  log(chalk.yellowBright("\n-----------------------------------------\n"));
}

var questions =[{
  question:"1. Inside <script> HTML element do we put the JavaScript?(Yes or No)",
  answer: "Yes"
},
{
  question:"2.Which operator is used to assign a value to a variable?",
  answer:"="
},
{
  question:"3.The external JavaScript file must contain the <script> tag(True or False).",
  answer:"False"
},
{
  question:"4.What will the following code return: Boolean(10 > 9)",
  answer:"True"
},
{
  question:"5.JavaScript is the same as Java(True or False).",
  answer:"False"
}
];

for(i=0;i<questions.length;i++){
 var currQue = questions[i];
 quiz(currQue.question,currQue.answer);
}
log(chalk.yellowBright.bold.underline("\nYour score is ")+ chalk.bgMagenta.bold(count));

for(i=0;i<counting.length;i++){
  var highScore=counting[i];
  if(count>highScore.score){
    log(chalk.bgWhite.magentaBright.bold("\nHurray! Your Score is HIGHEST"));
  }else{
    log(chalk.bgWhite.red("Read Again"));
  }
}

slog(chalk.yellow.bold("\nIf your Score is Highest send me the Screenshot"));