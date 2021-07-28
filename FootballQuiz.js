var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score =0;
var username=readlineSync.question(chalk.greenBright.bold("Please enter your name "));
console.log(chalk.green("Welcome '😊 " +username+" ! Try the quiz that puts your football ⚽​🚶‍♂️​ knowledges to the test.... "));
console.log(chalk.blackBright.bold("-------------------------------------"));
var enterAnykey=readlineSync.question(chalk.magenta.bold("Press Enter to start the quiz ---"));
console.log(chalk.blackBright.bold("-------------------------------------"));

function play(question,answer){
  var useranswer=readlineSync.question(chalk.cyan(question));
  if(useranswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.blackBright.bold("-------------------------------------"));
    console.log(chalk.green.italic("You are right"));
    score = score + 1;
  }
  else{
    console.log(chalk.blackBright.bold("-------------------------------------"));
    console.log(chalk.red.italic("You are wrong"));
    score=score - 1;
  }
  console.log(chalk.white.italic("You scored "+score));
  console.log(chalk.blackBright.bold("-------------------------------------"));
}

var questionAll=[{
  question :"1 : Which Player has scored the most official goals for a single club \n1 : Cristiano Ronaldo \n2 : Lionell Messi \n3 : Pele \nPlease Enter the right option ",
  answer :"2"
},{
  question :"2 : Which Player has scored most goals in international club competitions \n1 : Cristiano Ronaldo \n2 : Lionell Messi \n3 : Neymer \nPlease Enter the right option ",
  answer :"1"
},{
  question :"3 : Which Player has won the most 'FIFA World's Best player awards' \n1 : Cristiano Ronaldo \n2 : Lionell Messi \n3 : Neymer \nPlease Enter the right option",
  answer :"2"
},{
  question :"4 : Which Player has scored 'Fastest 4 goals in a single game'\n1 : Kylian Mbappe \n2 : Robert Lewandowski \n3 : Neymer \nPlease Enter the right option",
  answer :"2"
},{
  question :"5 : Which Player has scored the 'most penalty kicks'\n1 : Zlatan Ibrahimovic \n2 : Robert Lewandowski \n3 : Cristiano Ronaldo \nPlease Enter the right option",
  answer :"3"  
},{
  question :"6 : Which Player has scored '2 goals within less than a minute'\n1 : Zlatan Ibrahimovic \n2 : Ignacio Scocco \n3 : Pogba \nPlease Enter the right option",
  answer :"2"
},{
  question :"7 : Which team has won more number of matches between BARCELONA VS REAL MADRID \n1 : Barcelona \n2 : Real Madrid\nPlease Enter the right option",
  answer :"1"
  
}]



for(var i=0 ; i<questionAll.length; i++){
  var result=questionAll[i];
  play(result.question,result.answer)
}


console.log(chalk.yellow("Good Try " +username+ "\nYour Result : "+score+ " out of 7"));

console.log(chalk.underline.cyanBright("            TOP SCORER           "))

var allHighscore=[{
  name :"Furqhan",
  score : 7
},{
  name :"viru",
  score :6
}]
for ( var k=0 ; k < allHighscore.length ; k++){
  var current = allHighscore[k];

  console.log(chalk.yellow(current.name+ " scored " +current.score));
}
console.log(chalk.blackBright("-------------------------------------"))
 
if(score>5){
  console.log(chalk.greenBright("--------------LEVEL 2----------------"))
  console.log(chalk.blackBright("-------------------------------------"))
  console.log(chalk.yellowBright("Congratulation U have Qualifed for level 2"));
  
  var enterAnykey2=readlineSync.question(chalk.black(username+" Please Enter any key to start level 2"));
  function playTwo(questionL2,answerL2){
    var useranswerL2 = readlineSync.question(chalk.cyan(questionL2));
    if(useranswerL2 === answerL2){
      console.log(chalk.blackBright.bold("-------------------------------------"));
      console.log(chalk.green.italic("You are right"));
      score = score + 1;
    }
    else{
      console.log(chalk.blackBright.bold("-------------------------------------"));
      console.log(chalk.red.italic("You are wrong"));
      score=score - 1;
    }
    console.log(chalk.white.italic("You scored "+score));
    console.log(chalk.blackBright.bold("-------------------------------------"));

  }
  var questionAll=[{
  question :"1 : Which Player has scored the most official goals for a single club \n1 : Cristiano Ronaldo \n2 : Lionell Messi \n3 : Pele \nPlease Enter the right option ",
  answer :"2"
},{
  question :"2 : Which Player has scored most goals in international club competitions \n1 : Cristiano Ronaldo \n2 : Lionell Messi \n3 : Neymer \nPlease Enter the right option ",
  answer :"1"
},{
  question :"3 : Which Player has won the most 'FIFA World's Best player awards' \n1 : Cristiano Ronaldo \n2 : Lionell Messi \n3 : Neymer \nPlease Enter the right option",
  answer :"2"
},{
  question :"4 : Which Player has scored 'Fastest 4 goals in a single game'\n1 : Kylian Mbappe \n2 : Robert Lewandowski \n3 : Neymer \nPlease Enter the right option",
  answer :"2"
},{
  question :"5 : Which Player has scored the 'most penalty kicks'\n1 : Zlatan Ibrahimovic \n2 : Robert Lewandowski \n3 : Cristiano Ronaldo \nPlease Enter the right option",
  answer :"3"  
},{
  question :"6 : Which Player has scored '2 goals within less than a minute'\n1 : Zlatan Ibrahimovic \n2 : Ignacio Scocco \n3 : Pogba \nPlease Enter the right option",
  answer :"2"
},{
  question :"7 : Which team has won more number of matches between BARCELONA VS REAL MADRID \n1 : Barcelona \n2 : Real Madrid\nPlease Enter the right option",
  answer :"1"
  
}]



for(var w=0 ; w<questionAll.length; w++){
  var result1=questionAll[w];
  playTwo(result1.question,result1.answer)
}


  
}
else{
  console.log("Sorry you are not qualified for the Level 2")
}