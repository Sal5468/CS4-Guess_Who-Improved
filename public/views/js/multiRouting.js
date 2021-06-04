
  let roomID = 0;

getCurrentMatches();
  function getCurrentMatches(){
    $.get("/getCurrMatches",function(data){
      if(!data){
        console.log("no data");
      }
      console.log(data.retarray[0].player1);
      for(let i = 0; i<data.retarray.length; i++){
        //something like this??
        $("#currmatches").append('<li>' + data.retarray[i].player1 + " vs " + data.retarray[i].player2 + " in room: "+ data.retarray[i].room + '</li>');
      }
    })


    //setTimeout(getCurrentMatches, 1000);
  }


  $(document).ready(function()
  {
    //$.post("/init",null,function(data){
      //roomID = data.id;
      //console.log(roomID);
    //});

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
  }
  function joinClicked(){
    alert("join " + $("#join").val())
    //$.get("/getRoom")
  }
  function createClicked(){
    alert("create " + $("#create").val())
    $.post("/createRoom",{roomNum: $("#create").val()}, function(data){
      if(data.message == true){
        alert("good create");
        $.get("/getRoom",{roomNum: $("#create").val()}, null);
      }
      else {
        alert("bad create");
      }
    });
  }
  function guessWhoClicked()
  {
    let current = $(location).attr('href')
    let currentreplace = current.replace("multi","");
    window.location.href = currentreplace
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
