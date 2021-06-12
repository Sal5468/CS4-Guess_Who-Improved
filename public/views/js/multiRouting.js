
  let roomID = 0;

getCurrentMatches();
  function getCurrentMatches(){

    //add polling evetually
    $("#currmatches").empty()
    $.get("/getCurrMatches",function(data){

      if(!data){
        console.log("no data");
      }

      //console.log(data.retarray[0]);
      for(let i = 0; i<data.retarray.length; i++){
        //something like this??
        console.log("Number of Active Rooms: "+data.retarray.length);


        //console.log(data.retarray[i].ClientID);
        //console.log(data.retarray[i].Client2ID);


        //asynchronous programming applies here, need to solve in reliable way...
        if(data.retarray[i].ClientID != null && data.retarray[i].Client2ID != null){
          $.get("/getUserName", {ident: data.retarray[i].ClientID}, function(data2){

            //console.log("name1 " + name1 + " = " + data2.name);
            $.get("/getUserName",{ident: data.retarray[i].Client2ID},function(data3){

              //console.log(typeof name2);
              $("#currmatches").append('<li>' + data2.name + " vs " + data3.name + " in room: "+ data.retarray[i].roomNum + '</li>');
            })

          })
          //console.log("name1 " + name1);
        }
        else if(data.retarray[i].ClientID != null){
          $.get("/getUserName", {ident: data.retarray[i].ClientID}, function(data2){

            //console.log("name1 " + name1 + " = " + data2.name);
            $("#currmatches").append('<li>' + data2.name + " vs null in room: "+ data.retarray[i].roomNum + '</li>');
          })
        }
        else if(data.retarray[i].Client2ID != null){
          $.get("/getUserName", {ident: data.retarray[i].ClientID}, function(data2){

            //console.log("name1 " + name1 + " = " + data2.name);
            $("#currmatches").append('<li>' +  "null vs " + data2.name + " in room: "+ data.retarray[i].roomNum + '</li>');
          })
        }


      }
    })


    setTimeout(getCurrentMatches, 5000);
  }
let socket = io();
  socket.on('request', (data) => {
      $("#requests").append('<li>' + data.name + " needs an opponent in room: " + data.roomNum + '</li>');
  });

  $(document).ready(function()
  {

    $("#join").keydown( function( event ) {
        if ( event.which === 13 ) {
          joinClicked()
          return false;
        }
    });
    $("#spectate").keydown( function( event ) {
        if ( event.which === 13 ) {
          spectateClicked()
          return false;
        }
    });
    $("#spectatebutton").click(spectateClicked)
    $("#joinbutton").click(joinClicked)
    $("#createbutton").click(createClicked)
  });
  function spectateClicked(){
    alert("spectate " + $("#spectate").val())
    $.get("/spectateroomUpdate",{roomNum: $("#spectate").val()}, function(data){
      console.log(data)
      if(typeof data.redirect == typeof "hi"){
        window.location = data.redirect;
      }
      else if(data.redirect == null){
        alert("Error: Room Does Not Exist")
      }
    })
  }
  function joinClicked(){
    alert("join " + $("#join").val())
    $.get("/getRoom",{roomNum: $("#join").val()}, function(data2){
      if(typeof data2.redirect == typeof "hi"){
        window.location = data2.redirect;
      }
      else if(data2.redirect == null){
        alert("That room does not exist, create it!")
      }
      else{
        alert("Error: Could not join room.")
      }

    });
  }
  function createClicked(){
    var roomNum = $("#create").val()
    alert("create " + roomNum)//should add a check to make sure the create is not nothing and if the user already has a roomz
    $.post("/createRoom",{roomNum: roomNum}, function(data){
      if(data.message == true){
        //alert("good create");
        alert("join " + roomNum)
        $.get("/getRoom",{roomNum: roomNum}, function(data2){
          if(typeof data2.redirect == typeof "hi"){
            window.location = data2.redirect;
          }
          else{
            alert("Error: Could not join room.")
          }

        });

      }
      else {
        alert("room already exists, choose another room number");
      }
    });
  }
  function guessWhoClicked()
  {
    $.get("/getmenu",function(data){
      window.location = data.redirect;
    });
  }

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
