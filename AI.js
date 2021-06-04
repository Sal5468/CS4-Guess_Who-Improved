//let boardInfo = require("./BoardInfo");

//let numPlayers = 24;
//let currentCharacter;
//let playersleft = 24;

//let Board = [];
//let currentQ = 0;
//let guessName;
//let questionsAsked = [];


//add handles to DB

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

AI.prototype.setCharacter = function(charnum)
{

  if(charnum==0)
    this.currentCharacter="Alex"
  else if(charnum==1)
    this.currentCharacter="Andy"
  else if(charnum==2)
    this.currentCharacter="Ashley"
  else if(charnum==3)
    this.currentCharacter="Brandon"
  else if(charnum==4)
    this.currentCharacter="Chris"
  else if(charnum==5)
    this.currentCharacter="Connor"
  else if(charnum==6)
    this.currentCharacter="Daniel"
  else if(charnum==7)
    this.currentCharacter="David"
  else if(charnum==8)
    this.currentCharacter="Emily"
  else if(charnum==9)
    this.currentCharacter="Jake"
  else if(charnum==10)
    this.currentCharacter="James"
  else if(charnum==11)
    this.currentCharacter="Jon"
  else if(charnum==12)
    this.currentCharacter="Joseph"
  else if(charnum==13)
    this.currentCharacter="Joshua"
  else if(charnum==14)
    this.currentCharacter="Justin"
  else if(charnum==15)
    this.currentCharacter="Kyle"
  else if(charnum==16)
    this.currentCharacter="Matt"
  else if(charnum==17)
    this.currentCharacter="Megan"
  else if(charnum==18)
    this.currentCharacter="Nick"
  else if(charnum==19)
    this.currentCharacter="Rachael"
  else if(charnum==20)
    this.currentCharacter="Sarah"
  else if(charnum==21)
    this.currentCharacter="Tyler"
  else if(charnum==22)
    this.currentCharacter="William"
  else if(charnum==23)
    this.currentCharacter="Zachary"

/*
  for(let i = 0; i<13; i++){
    this.questionsAsked[i] = false;
  }
*/

  //console.log(charnum);
  console.log("AI current character "+this.currentCharacter);
}
AI.prototype.getCharacter = function()
{return(this.currentCharacter)}

AI.prototype.generateAIBoard = function(arrayfromServer){
    for (var i = 0; i < 24; i++)
    {
      this.Board[i] = arrayfromServer[i];
    }
    console.log("board "+this.Board)

}

AI.prototype.generateQuestionsAsked = function(arrayfromServer){
    for (var i = 0; i < arrayfromServer.length; i++)
    {
      this.questionsAsked[i] = arrayfromServer[i];
    }
    console.log("board questions asked "+this.questionsAsked)
}
AI.prototype.submitcurrentQ = function(_currentQ){
    this.currentQ = _currentQ
    console.log("board currentQ "+this.currentQ)
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
        this.Board[0] = true;
    }
    if(answer != this.boardInfo.Andy[numQ].toString()){
        this.Board[1] = true;
    }
    if(answer != this.boardInfo.Ashley[numQ].toString()){
        this.Board[2] = true;
    }
    if(answer != this.boardInfo.Brandon[numQ].toString()){
        this.Board[3] = true;
    }
    if(answer != this.boardInfo.Chris[numQ].toString()){
        this.Board[4] = true;
    }
    if(answer != this.boardInfo.Connor[numQ].toString()){
        this.Board[5] = true;
    }
    if(answer != this.boardInfo.Daniel[numQ].toString()){
        this.Board[6] = true;
    }
    if(answer != this.boardInfo.David[numQ].toString()){
        this.Board[7] = true;
    }
    if(answer != this.boardInfo.Emily[numQ].toString()){
        this.Board[8] = true;
    }
    if(answer != this.boardInfo.Jake[numQ].toString()){
        this.Board[9] = true;
    }
    if(answer != this.boardInfo.James[numQ].toString()){
        this.Board[10] = true;
    }
    if(answer != this.boardInfo.Jon[numQ].toString()){
        this.Board[11] = true;
    }
    if(answer != this.boardInfo.Joseph[numQ].toString()){
        this.Board[12] = true;
    }
    if(answer != this.boardInfo.Joshua[numQ].toString()){
        this.Board[13] = true;
    }
    if(answer != this.boardInfo.Justin[numQ].toString()){
        this.Board[14] = true;
    }
    if(answer != this.boardInfo.Kyle[numQ].toString()){
        this.Board[15] = true;
    }
    if(answer != this.boardInfo.Matt[numQ].toString()){
        this.Board[16] = true;
    }
    if(answer != this.boardInfo.Megan[numQ].toString()){
        this.Board[17] = true;
    }
    if(answer != this.boardInfo.Nick[numQ].toString()){
        this.Board[18] = true;
    }
    if(answer != this.boardInfo.Rachael[numQ].toString()){
        this.Board[19] = true;
    }
    if(answer != this.boardInfo.Sarah[numQ].toString()){
        this.Board[20] = true;
    }
    if(answer != this.boardInfo.Tyler[numQ].toString()){
        this.Board[21] = true;
    }
    if(answer != this.boardInfo.William[numQ].toString()){
        this.Board[22] = true;
    }
    if(answer != this.boardInfo.Zachary[numQ].toString()){
        this.Board[23] = true;
    }
  //  console.log(Board);
    if(numQ == 13){

        if(answer){
            this.Win = true;
        }
        else if(name == "Alex"){
            this.Board[0] = true;
        }
        else if(name == "Andy"){
            this.Board[1] = true;
        }
        else if(name == "Ashley"){
            this.Board[2] = true;
        }
        else if(name == "Brandon"){
            this.Board[3] = true;
        }
        else if(name == "Chris"){
            this.Board[4] = true;
        }
        else if(name == "Connor"){
            this.Board[5] = true;
        }
        else if(name == "Daniel"){
            this.Board[6] = true;
        }
        else if(name == "David"){
            this.Board[7] = true;
        }
        else if(name == "Emily"){
            this.Board[8] = true;
        }
        else if(name == "Jake"){
            this.Board[9] = true;
        }
        else if(name == "James"){
            this.Board[10] = true;
        }
        else if(name == "Jon"){
            this.Board[11] = true;
        }
        else if(name == "Joseph"){
            this.Board[12] = true;
        }
        else if(name == "Joshua"){
            this.Board[13] = true;
        }
        else if(name == "Justin"){
            this.Board[14] = true;
        }
        else if(name == "Kyle"){
            this.Board[15] = true;
        }
        else if(name == "Matt"){
            this.Board[16] = true;
        }
        else if(name == "Megan"){
            this.Board[17] = true;
        }
        else if(name == "Nick"){
            this.Board[18] = true;
        }
        else if(name == "Rachael"){
            this.Board[19] = true;
        }
        else if(name == "Sarah"){
            this.Board[20] = true;
        }
        else if(name == "Tyler"){
            this.Board[21] = true;
        }
        else if(name == "William"){
            this.Board[22] = true;
        }
        else if(name == "Zachary"){
            this.Board[23] = true;
        }
    }
    console.log("Ais board is now this "+ this.Board)
    //submit the ais board
}
AI.prototype.ReturnResponse = function(){
    console.log("return responses "+ this.Board)
    //console.log(Board);
    let playersleft = 0;
    for(let i = 0; i<24; i++)
    {
        if(this.Board[i] === false)
        {
            playersleft++;//after the second time here it is not coming here and skiping over it
        }
    }
    console.log("Players left 1 " + playersleft)
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
          if(this.Board[i] != true){
            this.guessName = this.Board[i];
            return(this.Board[i]);//and it is returning null
          }
        }
    }
    let keeplooping = true;
    while(keeplooping){
      this.currentQ = Math.floor(Math.random() * 13)
      console.log("current q " + this.currentQ)
      if(this.questionsAsked[this.currentQ] == false){//infina loop here
        this.questionsAsked[this.currentQ] = true;
        keeplooping = false;
      }
    }

    console.log("currentq: "+this.currentQ)
    return(this.currentQ)
}
AI.prototype.getCurrentQ = function(){
  return(this.currentQ);
}

module.exports = AI;
