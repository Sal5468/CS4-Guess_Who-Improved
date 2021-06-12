
  function guessWhoClicked()
  {
    $.get("/getmenu",function(data){
      window.location = data.redirect;
    });
  }

  /*getSetOuts()
  function getSetOuts()
  {
    console.log("checking setouts");
    $.get("/getSetOut",{ident:roomID},function(data)
    {
      console.log(data)
      if(data!=null)
      {
        if(data.P1==null||data.P2==null)
        {
          console.log("Nothing sent out yet")
        }
        else if(areyousecondplayer)
        {
          if(data.P2)
          {
            console.log("player 2 win")
            $.post("/delcurrentmultigame",{ident:roomID},null)
            $.get("/getwin",function(data){
              window.location = data.redirect;
            });
        }
        else
        {
          console.log("player 2 lose")
          $.post("/delcurrentmultigame",{ident:roomID},null)
          $.get("/getlose",function(data){
            window.location = data.redirect;
          });
        }}
        else
        {
          if(data.P1)
          {
            console.log("player 1 win")
            $.post("/delcurrentmultigame",{ident:roomID},null)
            $.get("/getwin",function(data){
              window.location = data.redirect;
            });
          }
          else
          {
            console.log("player 1 lose")
            $.post("/delcurrentmultigame",{ident:roomID},null)
            $.get("/getlose",function(data){
              window.location = data.redirect;
            });
          }
        }
      }
    })

    $.get("/oppActive",{secondPlayer: areyousecondplayer, roomNum: roomID},function(data){
      //console.log("oppactive data")
      if(data.oppID != null){
        $.get("/getUserName", {ident: data.oppID},function(data2){
          if(data.active){
            $("#opp").html("Opponent Status: " + data2.name + " is in the room")
            $("#opp").css("color","#000000")//this works
          }
          else{
            $("#opp").html("Opponent Status: " + data2.name + " is not in the room")

          }
        })
      }



    })

    let numMilliSeconds = 1000;   // 1000 milliseconds = 1 second
    setTimeout(getSetOuts, numMilliSeconds);//recall this function after this number of miliseconds.
  }*/
////////////////////////////////////////////////////////////////////////////////////
  $(document).ready(function()
  {
    $.post("/spectateGet",null,function(data)
    {
      console.log(data)

      if(data.ClientChar == -1)
      {
        $("#boardone").html("Player 1 Board : Character Not Choosen" )
      }
      if(data.Client2Char == -1)
      {
        $("#boardtwo").html("Player 2 Board : Character Not Choosen" )
      }

      if(data.ClientChar !=   -1)
      {
        $("#prompt1").text("")
        if(data.ClientChar==0){$("#boardone").html("Player 1 Board : Alex" )}
        else if(data.ClientChar==1){$("#boardone").html("Player 1 Board : Andy" )}
        else if(data.ClientChar==2){$("#boardone").html("Player 1 Board : Ashley" )}
        else if(data.ClientChar==3){$("#boardone").html("Player 1 Board : Brandon" )}
        else if(data.ClientChar==4){$("#boardone").html("Player 1 Board : Chris" )}
        else if(data.ClientChar==5){$("#boardone").html("Player 1 Board : Connor" )}
        else if(data.ClientChar==6){$("#boardone").html("Player 1 Board : Daniel" )}
        else if(data.ClientChar==7){$("#boardone").html("Player 1 Board : David" )}
        else if(data.ClientChar==8){$("#boardone").html("Player 1 Board : Emily" )}
        else if(data.ClientChar==9){$("#boardone").html("Player 1 Board : Jake" )}
        else if(data.ClientChar==10){$("#boardone").html("Player 1 Board : James" )}
        else if(data.ClientChar==11){$("#boardone").html("Player 1 Board : Jon" )}
        else if(data.ClientChar==12){$("#boardone").html("Player 1 Board : Joseph" )}
        else if(data.ClientChar==13){$("#boardone").html("Player 1 Board : Joshua" )}
        else if(data.ClientChar==14){$("#boardone").html("Player 1 Board : Justin" )}
        else if(data.ClientChar==15){$("#boardone").html("Player 1 Board : Kyle" )}
        else if(data.ClientChar==16){$("#boardone").html("Player 1 Board : Matt" )}
        else if(data.ClientChar==17){$("#boardone").html("Player 1 Board : Megan" )}
        else if(data.ClientChar==18){$("#boardone").html("Player 1 Board : Nick" )}
        else if(data.ClientChar==19){$("#boardone").html("Player 1 Board : Rachael" )}
        else if(data.ClientChar==20){$("#boardone").html("Player 1 Board : Sarah" )}
        else if(data.ClientChar==21){$("#boardone").html("Player 1 Board : Tyler" )}
        else if(data.ClientChar==22){$("#boardone").html("Player 1 Board : William" )}
        else if(data.ClientChar==23){$("#boardone").html("Player 1 Board : Zachary" )}
      }
      if(data.Client2Char !=   -1)
      {
        $("#prompt1").text("")
        if(data.Client2Char==0){$("#boardone").html("Player 1 Board : Alex" )}
        else if(data.Client2Char==1){$("#boardone").html("Player 1 Board : Andy" )}
        else if(data.Client2Char==2){$("#boardone").html("Player 1 Board : Ashley" )}
        else if(data.Client2Char==3){$("#boardone").html("Player 1 Board : Brandon" )}
        else if(data.Client2Char==4){$("#boardone").html("Player 1 Board : Chris" )}
        else if(data.Client2Char==5){$("#boardone").html("Player 1 Board : Connor" )}
        else if(data.Client2Char==6){$("#boardone").html("Player 1 Board : Daniel" )}
        else if(data.Client2Char==7){$("#boardone").html("Player 1 Board : David" )}
        else if(data.Client2Char==8){$("#boardone").html("Player 1 Board : Emily" )}
        else if(data.Client2Char==9){$("#boardone").html("Player 1 Board : Jake" )}
        else if(data.Client2Char==10){$("#boardone").html("Player 1 Board : James" )}
        else if(data.Client2Char==11){$("#boardone").html("Player 1 Board : Jon" )}
        else if(data.Client2Char==12){$("#boardone").html("Player 1 Board : Joseph" )}
        else if(data.Client2Char==13){$("#boardone").html("Player 1 Board : Joshua" )}
        else if(data.Client2Char==14){$("#boardone").html("Player 1 Board : Justin" )}
        else if(data.Client2Char==15){$("#boardone").html("Player 1 Board : Kyle" )}
        else if(data.Client2Char==16){$("#boardone").html("Player 1 Board : Matt" )}
        else if(data.Client2Char==17){$("#boardone").html("Player 1 Board : Megan" )}
        else if(data.Client2Char==18){$("#boardone").html("Player 1 Board : Nick" )}
        else if(data.Client2Char==19){$("#boardone").html("Player 1 Board : Rachael" )}
        else if(data.Client2Char==20){$("#boardone").html("Player 1 Board : Sarah" )}
        else if(data.Client2Char==21){$("#boardone").html("Player 1 Board : Tyler" )}
        else if(data.Client2Char==22){$("#boardone").html("Player 1 Board : William" )}
        else if(data.Client2Char==23){$("#boardone").html("Player 1 Board : Zachary" )}
      }


      if(data.ClientBoard[0]){
        $("#Alex").attr("src","../images/AlexX.gif")
      }
      else{
        $("#Alex").attr("src","../images/AlexCard.png")
      }
      if(data.ClientBoard[1]){
        $("#Andy").attr("src","../images/AndyX.gif")
      }
      else{
        $("#Andy").attr("src","../images/AndyCard.png")
      }
      if(data.ClientBoard[2]){
        $("#Ashley").attr("src","../images/AshleyX.gif")
      }
      else{
        $("#Ashley").attr("src","../images/AshleyCard.png")
      }
      if(data.ClientBoard[3]){
        $("#Brandon").attr("src","../images/BrandonX.gif")
      }
      else{
        $("#Brandon").attr("src","../images/BrandonCard.png")
      }
      if(data.ClientBoard[4]){
        $("#Chris").attr("src","../images/ChrisX.gif")
      }
      else{
        $("#Chris").attr("src","../images/ChrisCard.png")
      }
      if(data.ClientBoard[5]){
        $("#Connor").attr("src","../images/ConnorX.gif")
      }
      else{
        $("#Connor").attr("src","../images/ConnorCard.png")
      }
      if(data.ClientBoard[6]){
        $("#Daniel").attr("src","../images/DanielX.gif")
      }
      else{
        $("#Daniel").attr("src","../images/DanielCard.png")
      }
      if(data.ClientBoard[7]){
        $("#David").attr("src","../images/DavidX.gif")
      }
      else{
        $("#David").attr("src","../images/DavidCard.png")
      }
      if(data.ClientBoard[8]){
        $("#Emily").attr("src","../images/EmilyX.gif")
      }
      else{
        $("#Emily").attr("src","../images/EmilyCard.png")
      }
      if(data.ClientBoard[9]){
        $("#Jake").attr("src","../images/JakeX.gif")
      }
      else{
        $("#Jake").attr("src","../images/JakeCard.png")
      }
      if(data.ClientBoard[10]){
        $("#James").attr("src","../images/JamesX.gif")
      }
      else{
        $("#James").attr("src","../images/JamesCard.png")
      }
      if(data.ClientBoard[11]){
        $("#Jon").attr("src","../images/JonX.gif")
      }
      else{
        $("#Jon").attr("src","../images/JonCard.png")
      }
      if(data.ClientBoard[12]){
        $("#Joseph").attr("src","../images/JosephX.gif")
      }
      else{
        $("#Joseph").attr("src","../images/JosephCard.png")
      }
      if(data.ClientBoard[13]){
        $("#Joshua").attr("src","../images/JoshuaX.gif")
      }
      else{
        $("#Joshua").attr("src","../images/JoshuaCard.png")
      }
      if(data.ClientBoard[14]){
        $("#Justin").attr("src","../images/JustinX.gif")
      }
      else{
        $("#Justin").attr("src","../images/JustinCard.png")
      }
      if(data.ClientBoard[15]){
        $("#Kyle").attr("src","../images/KyleX.gif")
      }
      else{
        $("#Kyle").attr("src","../images/KyleCard.png")
      }
      if(data.ClientBoard[16]){
        $("#Matt").attr("src","../images/MattX.gif")
      }
      else{
        $("#Matt").attr("src","../images/MattCard.png")
      }
      if(data.ClientBoard[17]){
        $("#Megan").attr("src","../images/MeganX.gif")
      }
      else{
        $("#Megan").attr("src","../images/MeganCard.png")
      }
      if(data.ClientBoard[18]){
        $("#Nick").attr("src","../images/NickX.gif")
      }
      else{
        $("#Nick").attr("src","../images/NickCard.png")
      }
      if(data.ClientBoard[19]){
        $("#Rachael").attr("src","../images/RachaelX.gif")
      }
      else{
        $("#Rachael").attr("src","../images/RachaelCard.png")
      }
      if(data.ClientBoard[20]){
        $("#Sarah").attr("src","../images/SarahX.gif")
      }
      else{
        $("#Sarah").attr("src","../images/SarahCard.png")
      }
      if(data.ClientBoard[21]){
        $("#Tyler").attr("src","../images/TylerX.gif")
      }
      else{
        $("#Tyler").attr("src","../images/TylerCard.png")
      }
      if(data.ClientBoard[22]){
        $("#William").attr("src","../images/WilliamX.gif")
      }
      else{
        $("#William").attr("src","../images/WilliamCard.png")
      }
      if(data.ClientBoard[23]){
        $("#Zachary").attr("src","../images/ZacharyX.gif")
      }
      else{
        $("#Zachary").attr("src","../images/ZacharyCard.png")
      }
      if(data.Client2Board[0]){
        $("#Alex").attr("src","../images/AlexX.gif")
      }
      else{
        $("#Alex").attr("src","../images/AlexCard.png")
      }
      if(data.Client2Board[1]){
        $("#Andy").attr("src","../images/AndyX.gif")
      }
      else{
        $("#Andy").attr("src","../images/AndyCard.png")
      }
      if(data.Client2Board[2]){
        $("#Ashley").attr("src","../images/AshleyX.gif")
      }
      else{
        $("#Ashley").attr("src","../images/AshleyCard.png")
      }
      if(data.Client2Board[3]){
        $("#Brandon").attr("src","../images/BrandonX.gif")
      }
      else{
        $("#Brandon").attr("src","../images/BrandonCard.png")
      }
      if(data.Client2Board[4]){
        $("#Chris").attr("src","../images/ChrisX.gif")
      }
      else{
        $("#Chris").attr("src","../images/ChrisCard.png")
      }
      if(data.Client2Board[5]){
        $("#Connor").attr("src","../images/ConnorX.gif")
      }
      else{
        $("#Connor").attr("src","../images/ConnorCard.png")
      }
      if(data.Client2Board[6]){
        $("#Daniel").attr("src","../images/DanielX.gif")
      }
      else{
        $("#Daniel").attr("src","../images/DanielCard.png")
      }
      if(data.Client2Board[7]){
        $("#David").attr("src","../images/DavidX.gif")
      }
      else{
        $("#David").attr("src","../images/DavidCard.png")
      }
      if(data.Client2Board[8]){
        $("#Emily").attr("src","../images/EmilyX.gif")
      }
      else{
        $("#Emily").attr("src","../images/EmilyCard.png")
      }
      if(data.Client2Board[9]){
        $("#Jake").attr("src","../images/JakeX.gif")
      }
      else{
        $("#Jake").attr("src","../images/JakeCard.png")
      }
      if(data.Client2Board[10]){
        $("#James").attr("src","../images/JamesX.gif")
      }
      else{
        $("#James").attr("src","../images/JamesCard.png")
      }
      if(data.Client2Board[11]){
        $("#Jon").attr("src","../images/JonX.gif")
      }
      else{
        $("#Jon").attr("src","../images/JonCard.png")
      }
      if(data.Client2Board[12]){
        $("#Joseph").attr("src","../images/JosephX.gif")
      }
      else{
        $("#Joseph").attr("src","../images/JosephCard.png")
      }
      if(data.Client2Board[13]){
        $("#Joshua").attr("src","../images/JoshuaX.gif")
      }
      else{
        $("#Joshua").attr("src","../images/JoshuaCard.png")
      }
      if(data.Client2Board[14]){
        $("#Justin").attr("src","../images/JustinX.gif")
      }
      else{
        $("#Justin").attr("src","../images/JustinCard.png")
      }
      if(data.Client2Board[15]){
        $("#Kyle").attr("src","../images/KyleX.gif")
      }
      else{
        $("#Kyle").attr("src","../images/KyleCard.png")
      }
      if(data.Client2Board[16]){
        $("#Matt").attr("src","../images/MattX.gif")
      }
      else{
        $("#Matt").attr("src","../images/MattCard.png")
      }
      if(data.Client2Board[17]){
        $("#Megan").attr("src","../images/MeganX.gif")
      }
      else{
        $("#Megan").attr("src","../images/MeganCard.png")
      }
      if(data.Client2Board[18]){
        $("#Nick").attr("src","../images/NickX.gif")
      }
      else{
        $("#Nick").attr("src","../images/NickCard.png")
      }
      if(data.Client2Board[19]){
        $("#Rachael").attr("src","../images/RachaelX.gif")
      }
      else{
        $("#Rachael").attr("src","../images/RachaelCard.png")
      }
      if(data.Client2Board[20]){
        $("#Sarah").attr("src","../images/SarahX.gif")
      }
      else{
        $("#Sarah").attr("src","../images/SarahCard.png")
      }
      if(data.Client2Board[21]){
        $("#Tyler").attr("src","../images/TylerX.gif")
      }
      else{
        $("#Tyler").attr("src","../images/TylerCard.png")
      }
      if(data.Client2Board[22]){
        $("#William").attr("src","../images/WilliamX.gif")
      }
      else{
        $("#William").attr("src","../images/WilliamCard.png")
      }
      if(data.Client2Board[23]){
        $("#Zachary").attr("src","../images/ZacharyX.gif")
      }
      else{
        $("#Zachary").attr("src","../images/ZacharyCard.png")
      }

      $.get("/getUserName", {ident: data.ClientID},function(return1)
      {
        let name1 = ""
        if(return1 == null || return1.name == null)
        {name1 = "null"}
        else
        {name1 = return1.name}
        console.log("user one is " + name1)
        $.get("/getUserName", {ident: data.Client2ID},function(return2)
        {
          let name2 = ""
          if(return2 == null || return2.name == null)
          {name2 = "null"}
          else
          {name2 = return2.name}
          console.log("user two is " + name2)
          $("#playervsplayer").html(name1 + " vs " + name2)
        })
      })

    });
  });

  $("#musicicon").click(trialfunction);

  function trialfunction()
  {
    if($("#musicicon").attr("src")=="../images/1024px-Mute_Icon.png")
    {
      $("#musicicon").attr("src", "../images/600px-Speaker_Icon.png")
      playAudio();
    }
    else if($("#musicicon").attr("src")=="../images/600px-Speaker_Icon.png")
    {
      $("#musicicon").attr("src", "../images/1024px-Mute_Icon.png")
      stopAudio();
    }
  }

  let audioSources = ["../sound/13 - Beach - Plok! - OST - SNES.wav",
  "../sound/Donkey Kong Country - Bonus Room Blitz [Restored].wav",
  "../sound/Mario Paint OST - BGM 1.wav",
  "../sound/Sonic CD - Tidal Tempest Present [JPEU] (HD).wav",
  "../sound/Team Fortress 2 Soundtrack  Upgrade Station.wav"];

  function stopAudio()
  {
    $("#player").attr("src","../sound/1-hour-of-silence.mp3")
  }

  function playAudio()
  {
    if(audioSources.length==0 || audioSources.src ==  "../sound/1-hour-of-silence.mp3")
    {
      audioSources = ["../sound/13 - Beach - Plok! - OST - SNES.wav",
      "../sound/Donkey Kong Country - Bonus Room Blitz [Restored].wav",
      "../sound/Mario Paint OST - BGM 1.wav",
      "../sound/Sonic CD - Tidal Tempest Present [JPEU] (HD).wav",
      "../sound/Team Fortress 2 Soundtrack  Upgrade Station.wav"];
    }

    let index = Math.floor(Math.random() * audioSources.length)
    let audioSource = audioSources[index];

    if(audioSource!=undefined)
      $("#player").attr("src",audioSource)

    let splicer = audioSources.indexOf(audioSource);
    audioSources.splice(splicer, 1);

  }
  $("#player").on('ended', playAudio);


  //Socket Stuffs
  let ident;

  let socket = io();
//Get message from server.
/*  socket.on('welcome', function(data) {
        ident = data.id;
        console.log(ident);
        $("#chat").append('<li>' + data.message + " " + data.id + '</li>');
  });*/

//Get message from server.
  socket.on('update', (data) => {
    if(data.roomNum == roomID)
        $("#chat").append('<li>' + data.name + ": " + data.text + '</li>');
  });



  function doit() {
//Send message to server.\
    $.get("/getUserName",{ident: clientID},function(data){
      socket.emit('update', {'ident': ident, 'text': $("#message").val(), 'name': data.name, 'roomNum': roomID});
      //socket.to('some room').emit('some event');

      $("#message").val("");
      return false;


    })

  }
  function request(){
    $.get("/getUserName",{ident: clientID},function(data){
      socket.emit('request', {'ident': ident,'name': data.name, 'roomNum': roomID});
      return false;


    })
  }
