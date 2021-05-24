exports.Alex = [false,true,false,false,false,false,false,false,true,false,false,true,true];//this works
exports.Andy = [true,false,false,true,false,true,false,true,false,false,false,true,false];
exports.Ashley = [true,false,false,false,false,false,false,false,false,true,true,false,true];
exports.Brandon = [false,false,false,false,true,false,false,false,false,true,false,true,false];
exports.Chris = [true,false,false,true,false,false,false,false,false,true,false,true,true];
exports.Connor = [false,false,false,true,false,true,true,false,false,false,false,true,false];
exports.Daniel = [false,false,false,true,false,false,false,false,false,true,false,true,false];
exports.David = [false,false,false,false,false,false,true,false,true,false,false,true,false];
exports.Emily = [true,true,false,false,false,false,false,false,true,false,true,false,true];
exports.Jake = [false,false,false,false,true,true,true,false,false,false,false,true,true];
exports.James = [false,false,false,false,true,true,true,false,false,false,false,true,false];
exports.Jon = [false,true,false,false,false,true,false,true,false,false,false,true,true];
exports.Joseph =[false,false,true,false,false,false,false,false,true,false,false,true,true];
exports.Joshua = [false,true,false,false,false,true,true,false,false,false,false,true,true];
exports.Justin = [true,false,false,false,false,true,true,false,false,false,false,true,true];
exports.Kyle = [true,false,false,false,true,false,false,false,false,false,false,true,true];
exports.Matt = [false,true,false,false,false,false,false,false,false,false,false,true,true];
exports.Megan = [true,false,false,false,true,false,false,false,false,false,true,false,true];
exports.Nick = [false,false,false,true,false,false,false,false,true,false,false,true,true];
exports.Rachael = [true,false,false,true,false,false,false,false,false,true,true,false,true];
exports.Sarah = [true,false,false,true,false,false,false,false,true,false,false,false,false];
exports.Tyler = [false,false,false,true,false,true,true,false,false,false,false,true,true];
exports.William = [true,false,false,false,true,true,false,true,false,false,false,true,true];
exports.Zachary = [false,false,true,false,false,false,false,false,false,false,false,true,false];


exports.getCharAnswers = function(name, index){
  if(name == "Alex"){
    return(this.Alex[index]);
  }
  if(name == "Andy"){
    return(this.Andy[index]);
  }
  if(name == "Ashley"){
    return(this.Ashley[index]);
  }
  if(name == "Chris"){
    return(this.Chris[index]);
  }
  if(name == "Connor"){
    return(this.Connor[index]);
  }
  if(name == "Daniel"){
    return(this.Daniel[index]);
  }
  if(name == "David"){
    return(this.David[index]);
  }
  if(name == "Emily"){
    return(this.Emily[index]);
  }
  if(name == "Jake"){
    return(this.Jake[index]);
  }
  if(name == "James"){
    return(this.James[index]);
  }
  if(name == "Jon"){
    return(this.Jon[index]);
  }
  if(name == "Joseph"){
    return(this.Joseph[index]);
  }
  if(name == "Joshua"){
    return(this.Joshua[index]);
  }
  if(name == "Justin"){
    return(this.Justin[index]);
  }
  if(name == "Kyle"){
    return(this.Kyle[index]);
  }
  if(name == "Matt"){
    return(this.Matt[index]);
  }
  if(name == "Megan"){
    return(this.Megan[index]);
  }
  if(name == "Nick"){
    return(this.Nick[index]);
  }
  if(name == "Rachael"){
    return(this.Rachael[index]);
  }
  if(name == "Sarah"){
    return(this.Sarah[index]);
  }
  if(name == "Tyler"){
    return(this.Tyler[index]);
  }
  if(name == "William"){
    return(this.William[index]);
  }
  if(name == "Zachary"){
    return(this.Zachary[index]);
  }
  if(name == "Brandon"){
    return(this.Brandon[index]);
  }
}
exports.getQuestiontext = function(response){
  if(response == 0){
    return("Does your character have long hair?")
  }
  else if (response == 1) {
    return("Does your character have gray hair?")
  }
  else if (response == 2) {
    return("Does your character have orange hair?")
  }
  else if (response == 3) {
    return("Does your character have black hair?")
  }
  else if (response == 4) {
    return("Does your character have blonde hair?")
  }
  else if (response == 5) {
    return("Does your character have facial hair?")
  }
  else if (response == 6) {
    return("Does your character have a moustache?")
  }
  else if (response == 7) {
    return("Does your character have a beard?")
  }
  else if (response == 8) {
    return("Does your character have glasses?")
  }
  else if (response == 9) {
    return("Does your character have a hat?")
  }
  else if (response == 10) {
    return("Does your character have earrings?")
  }
  else if (response == 11) {
    return("Is your character a male?")
  }
  else if (response == 12) {
    return("Does your character have light skin?")
  }
  else if(response=="you have been lying"){
    return(response)
  }
  else if (typeof response == typeof "hello") {//guess player
    return("your character is " + response + "?")
  }
}
