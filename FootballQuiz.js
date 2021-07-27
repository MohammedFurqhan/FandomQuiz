var readlineSync = require('readline-sync');
var score =0;
console.log();
var username=readlineSync.question("Please enter your name ");
console.log("Welcome '😊 " +username+" ! Try the quiz that puts your football ⚽​🚶‍♂️​ knowledges to the test.... ");
console.log("-------------------------------------");
var enterAnykey=readlineSync.question("Press Enter to start the quiz ---");
console.log("-------------------------------------");

function play(question,answer){
  var useranswer=readlineSync.question(question);
  if(useranswer === answer)
  {
    console.log("-------------------------------------")
    console.log("You are right");
    score = score + 1;
  }
  else{
    console.log("-------------------------------------")
    console.log("You are wrong");
    score=score - 1;
  }
  console.log("You scored "+score);
  console.log("-------------------------------------")
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


console.log("Good Try " +username+ "\nYour Result : "+score+ " out of 7");

// else if( (score < 4) || (score =1)  )
// {
// console.log("Not bad " +(username)+ " Your total score is ",score);
// }
// else{
//   console.log("well t " +(username)+ " Your total score is ",score);
// }










