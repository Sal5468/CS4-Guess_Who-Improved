//let boardInfo = require("./BoardInfo");

//let numPlayers = 24;
//let currentCharacter;
//let playersleft = 24;

//let Board = [];
//let currentQ = 0;
//let guessName;
//let questionsAsked = [];

//NEED TO REFORMAT THIS ENTIRE THING TO MAKE IT AN OBJECT

let AI = function(){
  this.boardInfo = require("./BoardInfo");
  this.currentCharacter;
  //this.playersleft = 24;
  this.Board = [];
  this.currentQ = 0;
  this.guessname;
  this.questionsAsked = [];
  this.Win = false;
}

AI.prototype.getGuessName = function()
{return(this.guessName);}
AI.prototype.sendAnswer = function(question)
{return(this.boardInfo.getCharAnswers(this.currentCharacter, question));}

AI.prototype.setCharacter = function()
{
  let charnum =   Math.floor(Math.random() * 24 + 1)
  if(charnum==1)
    this.currentCharacter="Alex"
  else if(charnum==2)
    this.currentCharacter="Andy"
  else if(charnum==3)
    this.currentCharacter="Ashley"
  else if(charnum==4)
    this.currentCharacter="Brandon"
  else if(charnum==5)
    this.currentCharacter="Chris"
  else if(charnum==6)
    this.currentCharacter="Connor"
  else if(charnum==7)
    this.currentCharacter="Daniel"
  else if(charnum==8)
    this.currentCharacter="David"
  else if(charnum==9)
    this.currentCharacter="Emily"
  else if(charnum==10)
    this.currentCharacter="Jake"
  else if(charnum==11)
    this.currentCharacter="James"
  else if(charnum==12)
    this.currentCharacter="Jon"
  else if(charnum==13)
    this.currentCharacter="Joseph"
  else if(charnum==14)
    this.currentCharacter="Joshua"
  else if(charnum==15)
    this.currentCharacter="Justin"
  else if(charnum==16)
    this.currentCharacter="Kyle"
  else if(charnum==17)
    this.currentCharacter="Matt"
  else if(charnum==18)
    this.currentCharacter="Megan"
  else if(charnum==19)
    this.currentCharacter="Nick"
  else if(charnum==20)
    this.currentCharacter="Rachael"
  else if(charnum==21)
    this.currentCharacter="Sarah"
  else if(charnum==22)
    this.currentCharacter="Tyler"
  else if(charnum==23)
    this.currentCharacter="William"
  else if(charnum==24)
    this.currentCharacter="Zachary"


  for(let i = 0; i<13; i++){
    this.questionsAsked[i] = false;
  }
  //console.log(charnum);
  //console.log(currentCharacter);
}
AI.prototype.getCharacter = function()
{return(this.currentCharacter)}

AI.prototype.generateAIBoard = function(){
    this.Board[0] = 'Alex';
    this.Board[1] = 'Andy';
    this.Board[2] = 'Ashley';
    this.Board[3] = 'Brandon';
    this.Board[4] = 'Chris';
    this.Board[5] = 'Connor';
    this.Board[6] = 'Daniel';
    this.Board[7] = 'David';
    this.Board[8] = 'Emily';
    this.Board[9] = 'Jake';
    this.Board[10] = 'James';
    this.Board[11] = 'Jon';
    this.Board[12] = 'Joseph';
    this.Board[13] = 'Joshua';
    this.Board[14] = 'Justin';
    this.Board[15] = 'Kyle';
    this.Board[16] = 'Matt';
    this.Board[17] = 'Megan';
    this.Board[18] = 'Nick';
    this.Board[19] = 'Rachael';
    this.Board[20] = 'Sarah';
    this.Board[21] = 'Tyler';
    this.Board[22] = 'William';
    this.Board[23] = 'Zachary';

}

AI.prototype.EliminateAIBoard = function(numQ, answer, name) {//we need to change all of these to get at the
    /*if(numQ < 14)//for yee mode                                        getCharAnswers in BoardInfo
        OpponentAnswers[numQ] = answer;*/
  //  console.log("Eliminate: numq = " +numQ+", answer = "+answer+ ", name = "+name );
    //console.log(typeof boardInfo.Alex[numQ]);
    //console.log(typeof boardInfo.Alex[numQ].toString());
    //console.log(boardInfo.Alex[numQ].toString());
    //console.log(typeof answer);
  //  console.log(answer);
    if(answer != this.boardInfo.Alex[numQ].toString()){//this works
        this.Board[0] = null;
    }
    if(answer != this.boardInfo.Andy[numQ].toString()){
        this.Board[1] = null;
    }
    if(answer != this.boardInfo.Ashley[numQ].toString()){
        this.Board[2] = null;
    }
    if(answer != this.boardInfo.Brandon[numQ].toString()){
        this.Board[3] = null;
    }
    if(answer != this.boardInfo.Chris[numQ].toString()){
        this.Board[4] = null;
    }
    if(answer != this.boardInfo.Connor[numQ].toString()){
        this.Board[5] = null;
    }
    if(answer != this.boardInfo.Daniel[numQ].toString()){
        this.Board[6] = null;
    }
    if(answer != this.boardInfo.David[numQ].toString()){
        this.Board[7] = null;
    }
    if(answer != this.boardInfo.Emily[numQ].toString()){
        this.Board[8] = null;
    }
    if(answer != this.boardInfo.Jake[numQ].toString()){
        this.Board[9] = null;
    }
    if(answer != this.boardInfo.James[numQ].toString()){
        this.Board[10] = null;
    }
    if(answer != this.boardInfo.Jon[numQ].toString()){
        this.Board[11] = null;
    }
    if(answer != this.boardInfo.Joseph[numQ].toString()){
        this.Board[12] = null;
    }
    if(answer != this.boardInfo.Joshua[numQ].toString()){
        this.Board[13] = null;
    }
    if(answer != this.boardInfo.Justin[numQ].toString()){
        this.Board[14] = null;
    }
    if(answer != this.boardInfo.Kyle[numQ].toString()){
        this.Board[15] = null;
    }
    if(answer != this.boardInfo.Matt[numQ].toString()){
        this.Board[16] = null;
    }
    if(answer != this.boardInfo.Megan[numQ].toString()){
        this.Board[17] = null;
    }
    if(answer != this.boardInfo.Nick[numQ].toString()){
        this.Board[18] = null;
    }
    if(answer != this.boardInfo.Rachael[numQ].toString()){
        this.Board[19] = null;
    }
    if(answer != this.boardInfo.Sarah[numQ].toString()){
        this.Board[20] = null;
    }
    if(answer != this.boardInfo.Tyler[numQ].toString()){
        this.Board[21] = null;
    }
    if(answer != this.boardInfo.William[numQ].toString()){
        this.Board[22] = null;
    }
    if(answer != this.boardInfo.Zachary[numQ].toString()){
        this.Board[23] = null;
    }
  //  console.log(Board);
    if(numQ == 13){

        if(answer){
            this.Win = true;
        }
        else if(name == "Alex"){
            this.Board[0] = null;
        }
        else if(name == "Andy"){
            this.Board[1] = null;
        }
        else if(name == "Ashley"){
            this.Board[2] = null;
        }
        else if(name == "Brandon"){
            this.Board[3] = null;
        }
        else if(name == "Chris"){
            this.Board[4] = null;
        }
        else if(name == "Connor"){
            this.Board[5] = null;
        }
        else if(name == "Daniel"){
            this.Board[6] = null;
        }
        else if(name == "David"){
            this.Board[7] = null;
        }
        else if(name == "Emily"){
            this.Board[8] = null;
        }
        else if(name == "Jake"){
            this.Board[9] = null;
        }
        else if(name == "James"){
            this.Board[10] = null;
        }
        else if(name == "Jon"){
            this.Board[11] = null;
        }
        else if(name == "Joseph"){
            this.Board[12] = null;
        }
        else if(name == "Joshua"){
            this.Board[13] = null;
        }
        else if(name == "Justin"){
            this.Board[14] = null;
        }
        else if(name == "Kyle"){
            this.Board[15] = null;
        }
        else if(name == "Matt"){
            this.Board[16] = null;
        }
        else if(name == "Megan"){
            this.Board[17] = null;
        }
        else if(name == "Nick"){
            this.Board[18] = null;
        }
        else if(name == "Rachael"){
            this.Board[19] = null;
        }
        else if(name == "Sarah"){
            this.Board[20] = null;
        }
        else if(name == "Tyler"){
            this.Board[21] = null;
        }
        else if(name == "William"){
            this.Board[22] = null;
        }
        else if(name == "Zachary"){
            this.Board[23] = null;
        }
    }
}
AI.prototype.ReturnResponse = function(){
    //console.log(Board);
    let playersleft = 0;
    for(let i = 0; i<24; i++)
    {
        if(this.Board[i] != null)
        {
            playersleft++;//after the second time here it is not coming here and skiping over it
        }
    }
    if(playersleft==0)
    {
      return("you have been lying")
    }
    //therefore playersleft is 0
//    console.log("middle of ReturnResponse")
  //  console.log("playersleft = "  + playersleft)
    if(playersleft<3){//meening this is true
        for(let i = 0; i<24; i++)
        {//it is somehow getting into the insides of here
      //    console.log("inside bottom of ReturnResponse")
          if(this.Board[i] != null){
            this.guessName = this.Board[i];
            return(this.Board[i]);//and it is returning null
          }
        }
    }
    let keeplooping = true;
    while(keeplooping){
      this.currentQ = Math.floor(Math.random() * 13)
      if(this.questionsAsked[this.currentQ] == false){
        this.questionsAsked[this.currentQ] = true;
        keeplooping = false;
      }
    }

  //  console.log("currentq: "+currentQ)
    return(this.currentQ)
}
AI.prototype.getCurrentQ = function(){
  return(this.currentQ);
}

module.exports = AI;
