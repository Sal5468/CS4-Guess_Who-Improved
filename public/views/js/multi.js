//types: guessChar, setchar, askQ
  let characterchosen = false;
  let currentlyguessing = false
  let currentmessage = 1
  let currentmessagetodel = 1
  let areyousecondplayer = false//false = the first player true = second player

  let roomID = 0;




$.get("/initRoom", function(data){


})



  function guessClick()
  {
    currentlyguessing = !currentlyguessing
    if(currentlyguessing)
    {
      $("#makeGuess").attr("style", "color: magenta")
    }
    else
    {
      $("#makeGuess").attr("style", "color: white")
    }
  }
  function sus(data)//update the code to be like the other ones
  {
    if(data.winlose)
    {
      let current = $(location).attr('href')
      let currentreplace = current.replace("playmulti","win");
      window.location.href = currentreplace
    }
    else
    {
      let current = $(location).attr('href')
      let currentreplace = current.replace("playmulti","lose");
      window.location.href = currentreplace
    }
  }
  function guessWhoClicked()
  {
    let current = $(location).attr('href')
    let currentreplace = current.replace("playmulti","");
    window.location.href = currentreplace
  }

  function Alex()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Alex").attr("src") == "../images/AlexCard.png")
      {$("#Alex").attr("src","../images/AlexX.gif")}
      else
      {$("#Alex").attr("src","../images/AlexCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Alex").attr("id"), id:roomID},sus)//null will eventually be replaced with a method to check to see if you win or lose.
      guessClick()
    }// this is a method to guess the current character being guessed
    else
    {
      $("#playerChar").attr("src", "../images/AlexCard.png")//this changes the src of the guessed player
      characterchosen = true//lets comp know we havechosen a character
      $.post("/multiplayer",{ident:serverId,num:0,secondplayer:areyousecondplayer},null)
    }
  }

  function Andy()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Andy").attr("src") == "../images/AndyCard.png")
      {$("#Andy").attr("src","../images/AndyX.gif")}
      else
      {$("#Andy").attr("src","../images/AndyCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Andy").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/AndyCard.png")
      characterchosen = true
    }
  }

  function Ashley()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Ashley").attr("src") == "../images/AshleyCard.png")
      {$("#Ashley").attr("src","../images/AshleyX.gif")}
      else
      {$("#Ashley").attr("src","../images/AshleyCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Ashley").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/AshleyCard.png")
      characterchosen = true
    }
  }

  function Brandon()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Brandon").attr("src") == "../images/BrandonCard.png")
      {$("#Brandon").attr("src","../images/BrandonX.gif")}
      else
      {$("#Brandon").attr("src","../images/BrandonCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Brandon").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/BrandonCard.png")
      characterchosen = true
    }
  }

  function Chris()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Chris").attr("src") == "../images/ChrisCard.png")
      {$("#Chris").attr("src","../images/ChrisX.gif")}
      else
      {$("#Chris").attr("src","../images/ChrisCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Chris").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/ChrisCard.png")
      characterchosen = true
    }
  }

  function Connor()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Connor").attr("src") == "../images/ConnorCard.png")
      {$("#Connor").attr("src","../images/ConnorX.gif")}
      else
      {$("#Connor").attr("src","../images/ConnorCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Connor").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/ConnorCard.png")
      characterchosen = true
    }
  }

  function Daniel()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Daniel").attr("src") == "../images/DanielCard.png")
      {$("#Daniel").attr("src","../images/DanielX.gif")}
      else
      {$("#Daniel").attr("src","../images/DanielCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Daniel").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/DanielCard.png")
      characterchosen = true
    }
  }

  function David()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#David").attr("src") == "../images/DavidCard.png")
      {$("#David").attr("src","../images/DavidX.gif")}
      else
      {$("#David").attr("src","../images/DavidCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#David").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/DavidCard.png")
      characterchosen = true
    }
  }

  function Emily()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Emily").attr("src") == "../images/EmilyCard.png")
      {$("#Emily").attr("src","../images/EmilyX.gif")}
      else
      {$("#Emily").attr("src","../images/EmilyCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Emily").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/EmilyCard.png")
      characterchosen = true
    }
  }

  function Jake()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Jake").attr("src") == "../images/JakeCard.png")
      {$("#Jake").attr("src","../images/JakeX.gif")}
      else
      {$("#Jake").attr("src","../images/JakeCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Jake").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JakeCard.png")
      characterchosen = true
    }
  }

  function James()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#James").attr("src") == "../images/JamesCard.png")
      {$("#James").attr("src","../images/JamesX.gif")}
      else
      {$("#James").attr("src","../images/JamesCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#James").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JamesCard.png")
      characterchosen = true
    }
  }

  function Jon()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Jon").attr("src") == "../images/JonCard.png")
      {$("#Jon").attr("src","../images/JonX.gif")}
      else
      {$("#Jon").attr("src","../images/JonCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Jon").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JonCard.png")
      characterchosen = true
    }
  }

  function Joseph()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Joseph").attr("src") == "../images/JosephCard.png")
      {$("#Joseph").attr("src","../images/JosephX.gif")}
      else
      {$("#Joseph").attr("src","../images/JosephCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Joseph").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JosephCard.png")
      characterchosen = true
    }
  }

  function Joshua()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Joshua").attr("src") == "../images/JoshuaCard.png")
      {$("#Joshua").attr("src","../images/JoshuaX.gif")}
      else
      {$("#Joshua").attr("src","../images/JoshuaCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Joshua").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JoshuaCard.png")
      characterchosen = true
    }
  }

  function Justin()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Justin").attr("src") == "../images/JustinCard.png")
      {$("#Justin").attr("src","../images/JustinX.gif")}
      else
      {$("#Justin").attr("src","../images/JustinCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Justin").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JustinCard.png")
      characterchosen = true
    }
  }

  function Kyle()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Kyle").attr("src") == "../images/KyleCard.png")
      {$("#Kyle").attr("src","../images/KyleX.gif")}
      else
      {$("#Kyle").attr("src","../images/KyleCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Kyle").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/KyleCard.png")
      characterchosen = true
    }
  }

  function Matt()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Matt").attr("src") == "../images/MattCard.png")
      {$("#Matt").attr("src","../images/MattX.gif")}
      else
      {$("#Matt").attr("src","../images/MattCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Matt").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/MattCard.png")
      characterchosen = true
    }
  }

  function Megan()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Megan").attr("src") == "../images/MeganCard.png")
      {$("#Megan").attr("src","../images/MeganX.gif")}
      else
      {$("#Megan").attr("src","../images/MeganCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Megan").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/MeganCard.png")
      characterchosen = true
    }
  }

  function Nick()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Nick").attr("src") == "../images/NickCard.png")
      {$("#Nick").attr("src","../images/NickX.gif")}
      else
      {$("#Nick").attr("src","../images/NickCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Nick").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/NickCard.png")
      characterchosen = true
    }
  }

  function Rachael()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Rachael").attr("src") == "../images/RachaelCard.png")
      {$("#Rachael").attr("src","../images/RachaelX.gif")}
      else
      {$("#Rachael").attr("src","../images/RachaelCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Rachael").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/RachaelCard.png")
      characterchosen = true
    }
  }

  function Sarah()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Sarah").attr("src") == "../images/SarahCard.png")
      {$("#Sarah").attr("src","../images/SarahX.gif")}
      else
      {$("#Sarah").attr("src","../images/SarahCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Sarah").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/SarahCard.png")
      characterchosen = true
    }
  }

  function Tyler()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Tyler").attr("src") == "../images/TylerCard.png")
      {$("#Tyler").attr("src","../images/TylerX.gif")}
      else
      {$("#Tyler").attr("src","../images/TylerCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Tyler").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/TylerCard.png")
      characterchosen = true
    }
  }

  function William()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#William").attr("src") == "../images/WilliamCard.png")
      {$("#William").attr("src","../images/WilliamX.gif")}
      else
      {$("#William").attr("src","../images/WilliamCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#William").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/WilliamCard.png")
      characterchosen = true
    }
  }

  function Zachary()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Zachary").attr("src") == "../images/ZacharyCard.png")
      {$("#Zachary").attr("src","../images/ZacharyX.gif")}
      else
      {$("#Zachary").attr("src","../images/ZacharyCard.png")}
    }
    else if(characterchosen && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Zachary").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/ZacharyCard.png")
      characterchosen = true
    }
  }
////////////////////////////////////////////////////////////////////////////////////
  $(document).ready(function()
  {
    //$.post("/init",null,function(data){
      //roomID = data.id;
      //console.log(roomID);
    //});
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
