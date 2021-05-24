//types: guessChar, setchar, askQ
  let characterchosen = false;
  let currentlyguessing = false
  let currentlyAsking = false;
  let aiturn = false
  let onequestioncap = false
  let currStep = 0;
  let haveyouwon = -1
  let currentmessage = 1
  let currentmessagetodel = 1
  let respondedtoaiquestion = false
  let aiguessingplayerchar = false

  let serverId = 0;

  function controller(){
    if(currStep == 0)
    {
      if(characterchosen)
      {
        currStep++;
        $("#prompt1").html("Ask A Question Or Guess The AI's Character")
        characterchosen = true;
        currentlyguessing = false;
        currentlyAsking = true;
      }
      else
      {
        alert("Please Choose a Character Before Moving On")
        characterchosen = false;
        currentlyguessing = false;
        currentlyAsking = false;
      }
    }
    else if(currStep == 1)
    {
      if(onequestioncap == false)
      {
        alert("Please Ask a Question Before Moving On")
        return
      }
      currStep++;
      $("#prompt1").html("Eliminate Characters")
      characterchosen = true;
      currentlyguessing = false;
      currentlyAsking = false;
    }
    else if(currStep == 2)
    {
      currStep++;
      $("#prompt1").html("AI Asks You A Question")
      characterchosen = true;
      currentlyguessing = false;
      currentlyAsking = false;
      onequestioncap = false
      aiturn = true
      aiasksquestion()
    }
    else if(currStep == 3)
    {
      if(respondedtoaiquestion == false)
      {
        alert("Please Respond To The AI's Question")
        return
      }
      $("#prompt1").html("Ask A Question Or Guess The AI's Character")
      characterchosen = true;
      currentlyguessing = false
      currentlyAsking = true;
      aiturn = false
      onequestioncap = false
      currStep = 1;
      respondedtoaiquestion = false
    }
  }

  function guessClick()
  {
    if(currStep == 1 && onequestioncap==false)
    {
      currentlyguessing = !currentlyguessing;
  //    console.log(currentlyguessing);
      if(currentlyguessing){
        $("#makeGuess").attr("style", "color: magenta")
      }
      else{
        $("#makeGuess").attr("style", "color: white")
      }
    }
    else if(onequestioncap)
    {
      alert("You Have Already Used Your Turn To Ask A Question")
    }
    else
    {
      alert("Please Wait For Your Turn To Guess")
    }
  }
  function sus(data)
  {
//    console.log("I am here")
  //  console.log("data.winlose"+data.winlose)
    if(data.winlose)
    {
      let current = $(location).attr('href')
      let currentreplace = current.replace("playvsai","win");
      window.location.href = currentreplace
    }
    else
    {
      let current = $(location).attr('href')
      let currentreplace = current.replace("playvsai","lose");
      window.location.href = currentreplace
    }
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
      $.get("/makeaguess",{name:$("#Alex").attr("id"), id:serverId},sus)//null will eventually be replaced with a method to check to see if you win or lose.
      guessClick()
    }// this is a method to guess the current character being guessed
    else
    {
      $("#playerChar").attr("src", "../images/AlexCard.png")//this changes the src of the guessed player
      characterchosen = true//lets comp know we havechosen a character
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
      $.get("/makeaguess",{name:$("#Andy").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Ashley").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Brandon").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Chris").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Connor").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Daniel").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#David").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Emily").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Jake").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#James").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Jon").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Joseph").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Joshua").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Justin").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Kyle").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Matt").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Megan").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Nick").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Rachael").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Sarah").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Tyler").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#William").attr("id"), id:serverId},sus)
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
      $.get("/makeaguess",{name:$("#Zachary").attr("id"), id:serverId},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/ZacharyCard.png")
      characterchosen = true
    }
  }

  function aiasksquestion()
  {
    if(aiturn)
    {
      $.get("/getaiquestion",{id:serverId},function(data)
      {
    //    data.num=13
    //    data.text="Alex"
        if(currentmessage>9)
        {
          $("."+currentmessagetodel).remove()
          currentmessagetodel++
        }
        if(data.num==13)
        {
          aiguessingplayerchar=true
          $("#chat").append('<li style="color: white;" class ='+currentmessage+'>'+"AI: I am guessing that "+data.text+'</li>');
          //$.get("/aimakeaguess",{name:data.text},sus)
        }
        else
        {//do buttons instead?
          $("#chat").append('<li style="color: white;" class ='+currentmessage+'>'+"AI: "+data.text+'</li>');
    /*      $.get("/askplayeraquestion",{num:data.num},function(returndata)
          {
            if(currStep = 3)
            {
              console.log(typeof returndata.return)
              if(returndata.return == true)
              {
                $("#chat").append('<li class ='+currentmessage+'>'+"Player: Yes"+'</li>');
              }
              else
              {
                $("#chat").append('<li class ='+currentmessage+'>'+"Player: No"+'</li>');
              }
            }
            //eliminate part of the ais board based on response.
          })*/

        //  console.log(currentmessage)
        }
    })
  }
}

  function questionClick(num)
  {
    if(currentlyAsking==true && onequestioncap == false)
    {
      onequestioncap = true
      $.get("/askaiaquestion",{num: num, id:serverId},function(data)
      {
        if(currStep = 1)
        {
          if(currentmessage>9)
          {
            $("."+currentmessagetodel).remove()
            currentmessagetodel++
          }
          $("#chat").append('<li style="color: white;" class ='+currentmessage+'>'+"Player: "+$("#"+num).html()+'</li>');
          if(data.return)
          {
            $("#chat").append('<li style="color: white;" class ='+currentmessage+'>'+"AI: Yes"+'</li>');
          }
          else
          {
            $("#chat").append('<li style="color: white;" class ='+currentmessage+'>'+"AI: No"+'</li>');
          }
          currentmessage++
  //console.log(currentmessage)
        }
      })
    }
    else if(onequestioncap)
    {
      alert("You Have Already Guessed This Round!")
    }
    else
    {
      alert("You cannot do that now!")
    }

  }
////////////////////////////////////////////////////////////////////////////////////


  function Yes(){
    if(aiturn)
    {
      if(aiguessingplayerchar)
      {sus({winlose:false})}
      $.post("/sendplayerresponse",{answer: true, id: serverId},null)
      $("#chat").append('<li style="color: white;" class ='+currentmessage+'>'+"Player: Yes"+'</li>');
      currentmessage++
      respondedtoaiquestion = true
      aiturn = false;
    }
    else{
      alert("You cannot do that now.");
    }
  }

  function No(){
    if(aiturn)
    {
      if(aiguessingplayerchar)
      {sus({winlose:true})}
      $.post("/sendplayerresponse",{answer: false, id:serverId},null)
      $("#chat").append('<li style="color: white;" class ='+currentmessage+'>'+"Player: No"+'</li>');
      currentmessage++
      respondedtoaiquestion = true
      aiturn = false;
    }
    else{
      alert("You cannot do that now.");
    }
  }
  $(document).ready(function()
  {
    $.post("/init",null,function(data){
      serverId = data.id;
    //  console.log(serverId);
    });
  });

  function guessWhoClicked()
  {
    let current = $(location).attr('href')
    let currentreplace = current.replace("playvsai","");
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
