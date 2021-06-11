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

  let clientboard = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]

  let serverId = 0;

  function controller(){//clean up this so there is non redundant code
    if(currStep == 0)
    {
      if(characterchosen)
      {
        $("#prompt1").html("Ask A Question Or Guess The AI's Character")
        currStep++;
        $.post("/updatecurrentstep",{ident:serverId,currentStep:currStep},null)
        currentlyAsking = true;
        $.post("/updatecurrentlyAsking",{ident:serverId,currentlyAsking:currentlyAsking},null)
      }
      else
      {
        alert("Please Choose a Character Before Moving On")
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
      $.post("/updatecurrentstep",{ident:serverId,currentStep:currStep},null)
      $("#prompt1").html("Eliminate Characters")
      currentlyAsking = true;
      $.post("/updatecurrentlyAsking",{ident:serverId,currentlyAsking:currentlyAsking},null)
      currentlyguessing = false;
      $.post("/updatecurrentlyguessing",{ident:serverId,currentlyguessing:currentlyguessing},null)
    }
    else if(currStep == 2)
    {
      $("#prompt1").html("AI Asks You A Question")
      currStep++;
      $.post("/updatecurrentstep",{ident:serverId,currentStep:currStep},null)
      currentlyAsking = false;
      $.post("/updatecurrentlyAsking",{ident:serverId,currentlyAsking:currentlyAsking},null)
      currentlyguessing = false;
      $.post("/updatecurrentlyguessing",{ident:serverId,currentlyguessing:currentlyguessing},null)
      onequestioncap = false
      $.post("/updateonequestioncap",{ident:serverId,onequestioncap:onequestioncap},null)
      aiturn = true
      $.post("/updateaiturn",{ident:serverId,aiturn:aiturn},null)
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
      currStep = 1;
      $.post("/updatecurrentstep",{ident:serverId,currentStep:currStep},null)
      currentlyguessing = false
      $.post("/updatecurrentlyguessing",{ident:serverId,currentlyguessing:currentlyguessing},null)
      currentlyAsking = true;
      $.post("/updatecurrentlyAsking",{ident:serverId,currentlyAsking:currentlyAsking},null)
      aiturn = false
      $.post("/updateaiturn",{ident:serverId,aiturn:aiturn},null)
      respondedtoaiquestion = false
      $.post("/updaterespondedtoaiquestion",{ident:serverId,respondedtoaiquestion:respondedtoaiquestion},null)
    }
  }

  function controllerofprompt(){//clean up this so there is non redundant code
    if(currStep == 0)
    {
      $("#prompt1").html("Choose your Character")
    }
    else if(currStep == 1)
    {
      $("#prompt1").html("Ask A Question Or Guess The AI's Character")
    }
    else if(currStep == 2)
    {
      $("#prompt1").html("Eliminate Characters")
    }
    else if(currStep == 3)
    {
      $("#prompt1").html("AI Asks You A Question")
    }
  }

  function guessClick()
  {
    if(currStep == 1 && onequestioncap==false)
    {
      currentlyguessing = !currentlyguessing;
      $.post("/updatecurrentlyguessing",{ident:serverId,currentlyguessing:currentlyguessing},null)
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
    if(data.winlose)
    {
      $.post("/delcurrentgame",{ident:serverId},null)
      $.get("/getwin",function(data){
        window.location = data.redirect;
      });
    }
    else
    {
      $.post("/delcurrentgame",{ident:serverId},null)
      $.get("/getlose",function(data){
        window.location = data.redirect;
      });
    }
  }

  function Alex()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Alex").attr("src") == "../images/AlexCard.png")
      {
        $("#Alex").attr("src","../images/AlexX.gif")
        clientboard[0] = true
      //  console.log("client board "+clientboard)
        $.post("/updatechracterarrayAlex",{ident:serverId,value:clientboard[0]},null)//updates the player board in
      }
      else
      {
        $("#Alex").attr("src","../images/AlexCard.png")
        clientboard[0] = false
        $.post("/updatechracterarrayAlex",{ident:serverId,value:clientboard[0]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:0,characterchosen:characterchosen},null)
    }
  }

  function Andy()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Andy").attr("src") == "../images/AndyCard.png")
      {
        $("#Andy").attr("src","../images/AndyX.gif")
        clientboard[1] = true
        $.post("/updatechracterarrayAndy",{ident:serverId,value:clientboard[1]},null)
      }
      else
      {
        $("#Andy").attr("src","../images/AndyCard.png")
        clientboard[1] = false
        $.post("/updatechracterarrayAndy",{ident:serverId,value:clientboard[1]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:1,characterchosen:characterchosen},null)
    }
  }

  function Ashley()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Ashley").attr("src") == "../images/AshleyCard.png")
      {
        $("#Ashley").attr("src","../images/AshleyX.gif")
        clientboard[2] = true
        $.post("/updatechracterarrayAshley",{ident:serverId,value:clientboard[2]},null)
      }
      else
      {
        $("#Ashley").attr("src","../images/AshleyCard.png")
        clientboard[2] = false
        $.post("/updatechracterarrayAshley",{ident:serverId,value:clientboard[2]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:2,characterchosen:characterchosen},null)
    }
  }

  function Brandon()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Brandon").attr("src") == "../images/BrandonCard.png")
      {
        $("#Brandon").attr("src","../images/BrandonX.gif")
        clientboard[3] = true
        $.post("/updatechracterarrayBrandon",{ident:serverId,value:clientboard[3]},null)
      }
      else
      {
        $("#Brandon").attr("src","../images/BrandonCard.png")
        clientboard[3] = false
        $.post("/updatechracterarrayBrandon",{ident:serverId,value:clientboard[3]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:3,characterchosen:characterchosen},null)
    }
  }

  function Chris()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Chris").attr("src") == "../images/ChrisCard.png")
      {
        $("#Chris").attr("src","../images/ChrisX.gif")
        clientboard[4] = true
        $.post("/updatechracterarrayChris",{ident:serverId,value:clientboard[4]},null)
      }
      else
      {
        $("#Chris").attr("src","../images/ChrisCard.png")
        clientboard[4] = false
        $.post("/updatechracterarrayChris",{ident:serverId,value:clientboard[4]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:4,characterchosen:characterchosen},null)
    }
  }

  function Connor()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Connor").attr("src") == "../images/ConnorCard.png")
      {
        $("#Connor").attr("src","../images/ConnorX.gif")
        clientboard[5] = true
        $.post("/updatechracterarrayConnor",{ident:serverId,value:clientboard[5]},null)
      }
      else
      {
        $("#Connor").attr("src","../images/ConnorCard.png")
        clientboard[5] = false
        $.post("/updatechracterarrayConnor",{ident:serverId,value:clientboard[5]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:5,characterchosen:characterchosen},null)
    }
  }

  function Daniel()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Daniel").attr("src") == "../images/DanielCard.png")
      {
        $("#Daniel").attr("src","../images/DanielX.gif")
        clientboard[6] = true
        $.post("/updatechracterarrayDaniel",{ident:serverId,value:clientboard[6]},null)
      }
      else
      {
        $("#Daniel").attr("src","../images/DanielCard.png")
        clientboard[6] = false
        $.post("/updatechracterarrayDaniel",{ident:serverId,value:clientboard[6]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:6,characterchosen:characterchosen},null)
    }
  }

  function David()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#David").attr("src") == "../images/DavidCard.png")
      {
        $("#David").attr("src","../images/DavidX.gif")
        clientboard[7] = true
        $.post("/updatechracterarrayDavid",{ident:serverId,value:clientboard[7]},null)
      }
      else
      {
        $("#David").attr("src","../images/DavidCard.png")
        clientboard[7] = false
        $.post("/updatechracterarrayDavid",{ident:serverId,value:clientboard[7]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:7,characterchosen:characterchosen},null)
    }
  }

  function Emily()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Emily").attr("src") == "../images/EmilyCard.png")
      {
        $("#Emily").attr("src","../images/EmilyX.gif")
        clientboard[8] = true
        $.post("/updatechracterarrayEmily",{ident:serverId,value:clientboard[8]},null)
      }
      else
      {
        $("#Emily").attr("src","../images/EmilyCard.png")
        clientboard[8] = false
        $.post("/updatechracterarrayEmily",{ident:serverId,value:clientboard[8]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:8,characterchosen:characterchosen},null)
    }
  }

  function Jake()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Jake").attr("src") == "../images/JakeCard.png")
      {
        $("#Jake").attr("src","../images/JakeX.gif")
        clientboard[9] = true
        $.post("/updatechracterarrayJake",{ident:serverId,value:clientboard[9]},null)
      }
      else
      {
        $("#Jake").attr("src","../images/JakeCard.png")
        clientboard[9] = false
        $.post("/updatechracterarrayJake",{ident:serverId,value:clientboard[9]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:9,characterchosen:characterchosen},null)
    }
  }

  function James()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#James").attr("src") == "../images/JamesCard.png")
      {
        $("#James").attr("src","../images/JamesX.gif")
        clientboard[10] = true
        $.post("/updatechracterarrayJames",{ident:serverId,value:clientboard[10]},null)
      }
      else
      {
        $("#James").attr("src","../images/JamesCard.png")
        clientboard[10] = false
        $.post("/updatechracterarrayJames",{ident:serverId,value:clientboard[10]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:10,characterchosen:characterchosen},null)
    }
  }

  function Jon()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Jon").attr("src") == "../images/JonCard.png")
      {
        $("#Jon").attr("src","../images/JonX.gif")
        clientboard[11] = true
        $.post("/updatechracterarrayJon",{ident:serverId,value:clientboard[11]},null)
      }
      else
      {
        $("#Jon").attr("src","../images/JonCard.png")
        clientboard[11] = false
        $.post("/updatechracterarrayJon",{ident:serverId,value:clientboard[11]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:11,characterchosen:characterchosen},null)
    }
  }

  function Joseph()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Joseph").attr("src") == "../images/JosephCard.png")
      {
        $("#Joseph").attr("src","../images/JosephX.gif")
        clientboard[12] = true
        $.post("/updatechracterarrayJoseph",{ident:serverId,value:clientboard[12]},null)
      }
      else
      {
        $("#Joseph").attr("src","../images/JosephCard.png")
        clientboard[12] = false
        $.post("/updatechracterarrayJoseph",{ident:serverId,value:clientboard[12]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:12,characterchosen:characterchosen},null)
    }
  }

  function Joshua()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Joshua").attr("src") == "../images/JoshuaCard.png")
      {
        $("#Joshua").attr("src","../images/JoshuaX.gif")
        clientboard[13] = true
        $.post("/updatechracterarrayJoshua",{ident:serverId,value:clientboard[13]},null)
      }
      else
      {
        $("#Joshua").attr("src","../images/JoshuaCard.png")
        clientboard[13] = false
        $.post("/updatechracterarrayJoshua",{ident:serverId,value:clientboard[13]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:13,characterchosen:characterchosen},null)
    }
  }

  function Justin()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Justin").attr("src") == "../images/JustinCard.png")
      {
        $("#Justin").attr("src","../images/JustinX.gif")
        clientboard[14] = true
        $.post("/updatechracterarrayJustin",{ident:serverId,value:clientboard[14]},null)
      }
      else
      {
        $("#Justin").attr("src","../images/JustinCard.png")
        clientboard[14] = false
        $.post("/updatechracterarrayJustin",{ident:serverId,value:clientboard[14]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:14,characterchosen:characterchosen},null)
    }
  }

  function Kyle()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Kyle").attr("src") == "../images/KyleCard.png")
      {
        $("#Kyle").attr("src","../images/KyleX.gif")
        clientboard[15] = true
        $.post("/updatechracterarrayKyle",{ident:serverId,value:clientboard[15]},null)
      }
      else
      {
        $("#Kyle").attr("src","../images/KyleCard.png")
        clientboard[15] = false
        $.post("/updatechracterarrayKyle",{ident:serverId,value:clientboard[15]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:15,characterchosen:characterchosen},null)
    }
  }

  function Matt()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Matt").attr("src") == "../images/MattCard.png")
      {
        $("#Matt").attr("src","../images/MattX.gif")
        clientboard[16] = true
        $.post("/updatechracterarrayMatt",{ident:serverId,value:clientboard[16]},null)
      }
      else
      {
        $("#Matt").attr("src","../images/MattCard.png")
        clientboard[16] = false
        $.post("/updatechracterarrayMatt",{ident:serverId,value:clientboard[16]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:16,characterchosen:characterchosen},null)
    }
  }

  function Megan()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Megan").attr("src") == "../images/MeganCard.png")
      {
        $("#Megan").attr("src","../images/MeganX.gif")
        clientboard[17] = true
        $.post("/updatechracterarrayMegan",{ident:serverId,value:clientboard[17]},null)
      }
      else
      {
        $("#Megan").attr("src","../images/MeganCard.png")
        clientboard[17] = false
        $.post("/updatechracterarrayMegan",{ident:serverId,value:clientboard[17]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:17,characterchosen:characterchosen},null)
    }
  }

  function Nick()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Nick").attr("src") == "../images/NickCard.png")
      {
        $("#Nick").attr("src","../images/NickX.gif")
        clientboard[18] = true
        $.post("/updatechracterarrayNick",{ident:serverId,value:clientboard[18]},null)
      }
      else
      {
        $("#Nick").attr("src","../images/NickCard.png")
        clientboard[19] = false
        $.post("/updatechracterarrayNick",{ident:serverId,value:clientboard[19]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:18,characterchosen:characterchosen},null)
    }
  }

  function Rachael()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Rachael").attr("src") == "../images/RachaelCard.png")
      {
        $("#Rachael").attr("src","../images/RachaelX.gif")
        clientboard[19] = true
        $.post("/updatechracterarrayRachael",{ident:serverId,value:clientboard[19]},null)
      }
      else
      {
        $("#Rachael").attr("src","../images/RachaelCard.png")
        clientboard[19] = false
        $.post("/updatechracterarrayRachael",{ident:serverId,value:clientboard[19]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:19,characterchosen:characterchosen},null)
    }
  }

  function Sarah()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Sarah").attr("src") == "../images/SarahCard.png")
      {
        $("#Sarah").attr("src","../images/SarahX.gif")
        clientboard[20] = true
        $.post("/updatechracterarraySarah",{ident:serverId,value:clientboard[20]},null)
      }
      else
      {
        $("#Sarah").attr("src","../images/SarahCard.png")
        clientboard[20] = false
        $.post("/updatechracterarraySarah",{ident:serverId,value:clientboard[20]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:20,characterchosen:characterchosen},null)
    }
  }

  function Tyler()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Tyler").attr("src") == "../images/TylerCard.png")
      {
        $("#Tyler").attr("src","../images/TylerX.gif")
        clientboard[21] = true
        $.post("/updatechracterarrayTyler",{ident:serverId,value:clientboard[21]},null)
      }
      else
      {
        $("#Tyler").attr("src","../images/TylerCard.png")
        clientboard[21] = false
        $.post("/updatechracterarrayTyler",{ident:serverId,value:clientboard[21]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:21,characterchosen:characterchosen},null)
    }
  }

  function William()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#William").attr("src") == "../images/WilliamCard.png")
      {
        $("#William").attr("src","../images/WilliamX.gif")
        clientboard[22] = true
        $.post("/updatechracterarrayWillian",{ident:serverId,value:clientboard[22]},null)
      }
      else
      {
        $("#William").attr("src","../images/WilliamCard.png")
        clientboard[22] = false
        $.post("/updatechracterarrayWillian",{ident:serverId,value:clientboard[22]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:22,characterchosen:characterchosen},null)
    }
  }

  function Zachary()
  {
    if(characterchosen && currentlyguessing == false)
    {
      if($("#Zachary").attr("src") == "../images/ZacharyCard.png")
      {
        $("#Zachary").attr("src","../images/ZacharyX.gif")
        clientboard[23] = true
        $.post("/updatechracterarrayZachary",{ident:serverId,value:clientboard[23]},null)
      }
      else
      {
        $("#Zachary").attr("src","../images/ZacharyCard.png")
        clientboard[23] = false
        $.post("/updatechracterarrayZachary",{ident:serverId,value:clientboard[23]},null)
      }
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
      $.post("/playersubmitchar",{ident:serverId,num:23,characterchosen:characterchosen},null)
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
        {
          $("#chat").append('<li style="color: white;" class ='+currentmessage+'>'+"AI: "+data.text+'</li>');
        }
    })
  }
}

  function questionClick(num)
  {
    if(currentlyAsking==true && onequestioncap == false)
    {
      onequestioncap = true
      $.post("/updateonequestioncap",{ident:serverId,onequestioncap:onequestioncap},null)
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
      $.post("/updaterespondedtoaiquestion",{ident:serverId,respondedtoaiquestion:respondedtoaiquestion},null)
      aiturn = false;
      $.post("/updateaiturn",{ident:serverId,aiturn:aiturn},null)
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
      $.post("/updaterespondedtoaiquestion",{ident:serverId,respondedtoaiquestion:respondedtoaiquestion},null)
      aiturn = false;
      $.post("/updateaiturn",{ident:serverId,aiturn:aiturn},null)
    }
    else{
      alert("You cannot do that now.");
    }
  }
  $(document).ready(function()
  {
    $.get("/init",null,function(data){
      console.log("data "+ data)

      if(data==null)
      {
        $.get("/getmenu",function(data){
          window.location = data.redirect;
        });
      }

      serverId = data.ident
      console.log("ID " +serverId)

      for(let i = 0; i<data.ClientBoard.length; i++)
      {
        clientboard[i]=data.ClientBoard[i]
      }
      console.log("clientboard " + data.ClientBoard[0])

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

      console.log("data "+ data.PlayerChoosen)
      if(data.PlayerChoosen !=   -1)
      {
        if(data.PlayerChoosen==0){$("#playerChar").attr("src", "../images/AlexCard.png")}
        else if(data.PlayerChoosen==1){$("#playerChar").attr("src", "../images/AndyCard.png")}
        else if(data.PlayerChoosen==2){$("#playerChar").attr("src", "../images/AshleyCard.png")}
        else if(data.PlayerChoosen==3){$("#playerChar").attr("src", "../images/BrandonCard.png")}
        else if(data.PlayerChoosen==4){  $("#playerChar").attr("src", "../images/ChrisCard.png")}
        else if(data.PlayerChoosen==5){$("#playerChar").attr("src", "../images/ConnorCard.png")}
        else if(data.PlayerChoosen==6){$("#playerChar").attr("src", "../images/DanielCard.png")}
        else if(data.PlayerChoosen==7){$("#playerChar").attr("src", "../images/DavidCard.png")}
        else if(data.PlayerChoosen==8){$("#playerChar").attr("src", "../images/EmilyCard.png")}
        else if(data.PlayerChoosen==9){$("#playerChar").attr("src", "../images/JakeCard.png")}
        else if(data.PlayerChoosen==10){$("#playerChar").attr("src", "../images/JamesCard.png")}
        else if(data.PlayerChoosen==11){$("#playerChar").attr("src", "../images/JonCard.png")}
        else if(data.PlayerChoosen==12){$("#playerChar").attr("src", "../images/JosephCard.png")}
        else if(data.PlayerChoosen==13){$("#playerChar").attr("src", "../images/JoshuaCard.png")}
        else if(data.PlayerChoosen==14){$("#playerChar").attr("src", "../images/JustinCard.png")}
        else if(data.PlayerChoosen==15){$("#playerChar").attr("src", "../images/KyleCard.png")}
        else if(data.PlayerChoosen==16){$("#playerChar").attr("src", "../images/MattCard.png")}
        else if(data.PlayerChoosen==17){$("#playerChar").attr("src", "../images/MeganCard.png")}
        else if(data.PlayerChoosen==18){$("#playerChar").attr("src", "../images/NickCard.png")}
        else if(data.PlayerChoosen==19){$("#playerChar").attr("src", "../images/RachaelCard.png")}
        else if(data.PlayerChoosen==20){$("#playerChar").attr("src", "../images/SarahCard.png")}
        else if(data.PlayerChoosen==21){$("#playerChar").attr("src", "../images/TylerCard.png")}
        else if(data.PlayerChoosen==22){$("#playerChar").attr("src", "../images/WilliamCard.png")}
        else if(data.PlayerChoosen==23){$("#playerChar").attr("src", "../images/ZacharyCard.png")}
      }

      characterchosen = data.characterchosen
      console.log("Character Choosen Boolean "+ characterchosen)

      currentlyguessing = data.currentlyguessing
      console.log("Are you currently guessing? "+ currentlyguessing)
      if(currentlyguessing){
        $("#makeGuess").attr("style", "color: magenta")
      }
      else{
        $("#makeGuess").attr("style", "color: white")
      }

      currentlyAsking = data.currentlyAsking
      console.log("currentlyAsking "+ currentlyAsking)

      aiturn = data.aiturn
      console.log("AI Trun "+ aiturn)

      onequestioncap = data.onequestioncap
      console.log("One question cap "+ onequestioncap)

      respondedtoaiquestion = data.respondedtoaiquestion
      console.log("responded to ai question "+ respondedtoaiquestion)

      aiguessingplayerchar = data.aiguessingplayerchar
      console.log("ai guessing player char "+ aiguessingplayerchar)

      currStep = data.currentStep
      console.log("Current Step"+ currStep)
      controllerofprompt()
    });
  });

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
