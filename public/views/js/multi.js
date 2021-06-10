
  let characterchosen = -1;
  let currentlyguessing = false
  let currentmessage = 1
  let currentmessagetodel = 1
  let areyousecondplayer = false//false = the first player true = second player

  let roomID = -1;
  let clientID = 0

  let clientboard = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]


$.get("/initRoom", function(data){
  console.log(data);
  $("#roomNum").html("Room: " + data.roomNum)

})

  //update the code that will be here to have the polling function 

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
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Alex").attr("src") == "../images/AlexCard.png")
      {
        $("#Alex").attr("src","../images/AlexX.gif")
        clientboard[0] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[0],numtoupdate:0},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[0],numtoupdate:0},null)
      }
      else
      {
        $("#Alex").attr("src","../images/AlexCard.png")
        clientboard[0] = false
        console.log(clientboard)
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[0],numtoupdate:0},null)
        else
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[0],numtoupdate:0},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      if(areyousecondplayer)
        $.post("/makeaguessmultiPlayerTwo",{numGuess:0,ident:roomID},sus)
      else
        $.post("/makeaguessmultiPlayerOne",{numGuess:0, ident:roomID},sus)//null will eventually be replaced with a method to check to see if you win or lose.
      guessClick()
    }// this is a method to guess the current character being guessed
    else
    {
      $("#playerChar").attr("src", "../images/AlexCard.png")//this changes the src of the guessed player
      characterchosen = 0//replacing  the old boolean
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Andy()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Andy").attr("src") == "../images/AndyCard.png")
      {
        $("#Andy").attr("src","../images/AndyX.gif")
        clientboard[1] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[1],numtoupdate:1},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[1],numtoupdate:1},null)
      }
      else
      {
        $("#Andy").attr("src","../images/AndyCard.png")
        clientboard[1] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[1],numtoupdate:1},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[1],numtoupdate:1},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Andy").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/AndyCard.png")
      characterchosen = 1
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Ashley()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Ashley").attr("src") == "../images/AshleyCard.png")
      {
        $("#Ashley").attr("src","../images/AshleyX.gif")
        clientboard[2] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[2],numtoupdate:2},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[2],numtoupdate:2},null)
      }
      else
      {
        $("#Ashley").attr("src","../images/AshleyCard.png")
        clientboard[2] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[2],numtoupdate:2},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[2],numtoupdate:2},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Ashley").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/AshleyCard.png")
      characterchosen = 2
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Brandon()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Brandon").attr("src") == "../images/BrandonCard.png")
      {
        $("#Brandon").attr("src","../images/BrandonX.gif")
        clientboard[3] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[3],numtoupdate:3},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[3],numtoupdate:3},null)
      }
      else
      {
        $("#Brandon").attr("src","../images/BrandonCard.png")
        clientboard[3] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[3],numtoupdate:3},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[3],numtoupdate:3},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Brandon").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/BrandonCard.png")
      characterchosen = 3
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Chris()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Chris").attr("src") == "../images/ChrisCard.png")
      {
        $("#Chris").attr("src","../images/ChrisX.gif")
        clientboard[4] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[4],numtoupdate:4},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[4],numtoupdate:4},null)
      }
      else
      {
        $("#Chris").attr("src","../images/ChrisCard.png")
        clientboard[4] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[4],numtoupdate:4},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[4],numtoupdate:4},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Chris").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/ChrisCard.png")
      characterchosen = 4
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Connor()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Connor").attr("src") == "../images/ConnorCard.png")
      {
        $("#Connor").attr("src","../images/ConnorX.gif")
        clientboard[5] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[5],numtoupdate:5},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[5],numtoupdate:5},null)
      }
      else
      {
        $("#Connor").attr("src","../images/ConnorCard.png")
        clientboard[5] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[5],numtoupdate:5},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[5],numtoupdate:5},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Connor").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/ConnorCard.png")
      characterchosen = 5
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Daniel()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Daniel").attr("src") == "../images/DanielCard.png")
      {
        $("#Daniel").attr("src","../images/DanielX.gif")
        clientboard[6] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[6],numtoupdate:6},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[6],numtoupdate:6},null)
      }
      else
      {
        $("#Daniel").attr("src","../images/DanielCard.png")
        clientboard[6] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[6],numtoupdate:6},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[6],numtoupdate:6},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Daniel").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/DanielCard.png")
      characterchosen = 6
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function David()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#David").attr("src") == "../images/DavidCard.png")
      {
        $("#David").attr("src","../images/DavidX.gif")
        clientboard[7] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[7],numtoupdate:7},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[7],numtoupdate:7},null)
      }
      else
      {
        $("#David").attr("src","../images/DavidCard.png")
        clientboard[7] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[7],numtoupdate:7},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[7],numtoupdate:7},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#David").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/DavidCard.png")
      characterchosen = 7
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Emily()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Emily").attr("src") == "../images/EmilyCard.png")
      {
        $("#Emily").attr("src","../images/EmilyX.gif")
        clientboard[8] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[8],numtoupdate:8},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[8],numtoupdate:8},null)
      }
      else
      {
        $("#Emily").attr("src","../images/EmilyCard.png")
        clientboard[8] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[8],numtoupdate:8},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[8],numtoupdate:8},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Emily").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/EmilyCard.png")
      characterchosen = 8
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Jake()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Jake").attr("src") == "../images/JakeCard.png")
      {
        $("#Jake").attr("src","../images/JakeX.gif")
        clientboard[9] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[9],numtoupdate:9},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[9],numtoupdate:9},null)
      }
      else
      {
        $("#Jake").attr("src","../images/JakeCard.png")
        clientboard[9] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[9],numtoupdate:9},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[9],numtoupdate:9},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Jake").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JakeCard.png")
      characterchosen = 9
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function James()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#James").attr("src") == "../images/JamesCard.png")
      {
        $("#James").attr("src","../images/JamesX.gif")
        clientboard[10] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[10],numtoupdate:10},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[10],numtoupdate:10},null)
      }
      else
      {
        $("#James").attr("src","../images/JamesCard.png")
        clientboard[10] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[10],numtoupdate:10},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[10],numtoupdate:10},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#James").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JamesCard.png")
      characterchosen = 10
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Jon()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Jon").attr("src") == "../images/JonCard.png")
      {
        $("#Jon").attr("src","../images/JonX.gif")
        clientboard[11] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[11],numtoupdate:11},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[11],numtoupdate:11},null)
      }
      else
      {
        $("#Jon").attr("src","../images/JonCard.png")
        clientboard[11] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[11],numtoupdate:11},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[11],numtoupdate:11},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Jon").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JonCard.png")
      characterchosen = 11
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Joseph()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Joseph").attr("src") == "../images/JosephCard.png")
      {
        $("#Joseph").attr("src","../images/JosephX.gif")
        clientboard[12] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[12],numtoupdate:12},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[12],numtoupdate:12},null)
      }
      else
      {
        $("#Joseph").attr("src","../images/JosephCard.png")
        clientboard[12] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[12],numtoupdate:12},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[12],numtoupdate:12},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Joseph").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JosephCard.png")
      characterchosen = 12
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Joshua()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Joshua").attr("src") == "../images/JoshuaCard.png")
      {
        $("#Joshua").attr("src","../images/JoshuaX.gif")
        clientboard[13] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[13],numtoupdate:13},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[13],numtoupdate:13},null)
      }
      else
      {
        $("#Joshua").attr("src","../images/JoshuaCard.png")
        clientboard[13] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[13],numtoupdate:13},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[13],numtoupdate:13},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Joshua").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JoshuaCard.png")
      characterchosen = 13
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Justin()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Justin").attr("src") == "../images/JustinCard.png")
      {
        $("#Justin").attr("src","../images/JustinX.gif")
        clientboard[14] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[14],numtoupdate:14},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[14],numtoupdate:14},null)
      }
      else
      {
        $("#Justin").attr("src","../images/JustinCard.png")
        clientboard[14] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[14],numtoupdate:14},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[14],numtoupdate:14},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Justin").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/JustinCard.png")
      characterchosen = 14
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Kyle()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Kyle").attr("src") == "../images/KyleCard.png")
      {
        $("#Kyle").attr("src","../images/KyleX.gif")
        clientboard[15] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[15],numtoupdate:15},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[15],numtoupdate:15},null)
      }
      else
      {
        $("#Kyle").attr("src","../images/KyleCard.png")
        clientboard[15] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[15],numtoupdate:15},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[15],numtoupdate:15},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Kyle").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/KyleCard.png")
      characterchosen = 15
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Matt()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Matt").attr("src") == "../images/MattCard.png")
      {
        $("#Matt").attr("src","../images/MattX.gif")
        clientboard[16] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[16],numtoupdate:16},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[16],numtoupdate:16},null)
      }
      else
      {
        $("#Matt").attr("src","../images/MattCard.png")
        clientboard[16] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[16],numtoupdate:16},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[16],numtoupdate:16},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Matt").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/MattCard.png")
      characterchosen = 16
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Megan()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Megan").attr("src") == "../images/MeganCard.png")
      {
        $("#Megan").attr("src","../images/MeganX.gif")
        clientboard[17] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[17],numtoupdate:17},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[17],numtoupdate:17},null)
      }
      else
      {
        $("#Megan").attr("src","../images/MeganCard.png")
        clientboard[17] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[17],numtoupdate:17},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[17],numtoupdate:17},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Megan").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/MeganCard.png")
      characterchosen = 17
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Nick()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Nick").attr("src") == "../images/NickCard.png")
      {
        $("#Nick").attr("src","../images/NickX.gif")
        clientboard[18] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[18],numtoupdate:18},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[18],numtoupdate:18},null)
      }
      else
      {
        $("#Nick").attr("src","../images/NickCard.png")
        clientboard[18] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[18],numtoupdate:18},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[18],numtoupdate:18},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Nick").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/NickCard.png")
      characterchosen = 18
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Rachael()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Rachael").attr("src") == "../images/RachaelCard.png")
      {
        $("#Rachael").attr("src","../images/RachaelX.gif")
        clientboard[19] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[19],numtoupdate:19},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[19],numtoupdate:19},null)
      }
      else
      {
        $("#Rachael").attr("src","../images/RachaelCard.png")
        clientboard[19] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[19],numtoupdate:19},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[19],numtoupdate:19},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Rachael").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/RachaelCard.png")
      characterchosen = 19
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Sarah()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Sarah").attr("src") == "../images/SarahCard.png")
      {
        $("#Sarah").attr("src","../images/SarahX.gif")
        clientboard[20] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[20],numtoupdate:20},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[20],numtoupdate:20},null)
      }
      else
      {
        $("#Sarah").attr("src","../images/SarahCard.png")
        clientboard[20] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[20],numtoupdate:20},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[20],numtoupdate:20},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Sarah").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/SarahCard.png")
      characterchosen = 20
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Tyler()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Tyler").attr("src") == "../images/TylerCard.png")
      {
        $("#Tyler").attr("src","../images/TylerX.gif")
        clientboard[21] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[21],numtoupdate:21},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[21],numtoupdate:21},null)
      }
      else
      {
        $("#Tyler").attr("src","../images/TylerCard.png")
        clientboard[21] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[21],numtoupdate:21},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[21],numtoupdate:21},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Tyler").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/TylerCard.png")
      characterchosen = 21
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function William()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#William").attr("src") == "../images/WilliamCard.png")
      {
        $("#William").attr("src","../images/WilliamX.gif")
        clientboard[22] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[22],numtoupdate:22},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[22],numtoupdate:22},null)
      }
      else
      {
        $("#William").attr("src","../images/WilliamCard.png")
        clientboard[22] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[22],numtoupdate:22},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[22],numtoupdate:22},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#William").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/WilliamCard.png")
      characterchosen = 22
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }

  function Zachary()
  {
    if(characterchosen != -1 && currentlyguessing == false)
    {
      if($("#Zachary").attr("src") == "../images/ZacharyCard.png")
      {
        $("#Zachary").attr("src","../images/ZacharyX.gif")
        clientboard[23] = true
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[23],numtoupdate:23},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[23],numtoupdate:23},null)
      }
      else
      {
        $("#Zachary").attr("src","../images/ZacharyCard.png")
        clientboard[23] = false
        if(areyousecondplayer)
          $.post("/multiplayerupdateArrayPlayerTwo",{ident:roomID,array:clientboard[23],numtoupdate:23},null)
        else if(areyousecondplayer == false)
          $.post("/multiplayerupdateArrayPlayerOne",{ident:roomID,array:clientboard[23],numtoupdate:23},null)
      }
    }
    else if(characterchosen != -1 && currentlyguessing)
    {
      $.get("/makeaguess",{name:$("#Zachary").attr("id"), id:roomID},sus)
      guessClick()
    }
    else
    {
      $("#playerChar").attr("src", "../images/ZacharyCard.png")
      characterchosen = 23
      if(areyousecondplayer)
        $.post("/multiplayersubmitCharPlayerTwo",{ident:roomID,num:characterchosen},null)
      else
        $.post("/multiplayersubmitCharPlayerOne",{ident:roomID,num:characterchosen},null)
    }
  }
////////////////////////////////////////////////////////////////////////////////////
  $(document).ready(function()
  {
    //instead of this whole new post, could use the initroom already?  if you want the extra security that is all good too.
    $.post("/multiinit",null,function(data){
      console.log(data)
      areyousecondplayer = data.secondplayer
      console.log("Are you a second player? "+ areyousecondplayer)

      roomID = data.roomId//also have to set the room number thing to this
      console.log("Room number? "+ roomID)
      $("#roomNum").text("Room:" + roomID)

      clientID = data.clientID
      console.log("what is your client id? "+ clientID)

      characterchosen = data.charchosen
      console.log("data "+ characterchosen)
      if(data.charchosen !=   -1)
      {
        if(data.charchosen==0){$("#playerChar").attr("src", "../images/AlexCard.png")}
        else if(data.charchosen==1){$("#playerChar").attr("src", "../images/AndyCard.png")}
        else if(data.charchosen==2){$("#playerChar").attr("src", "../images/AshleyCard.png")}
        else if(data.charchosen==3){$("#playerChar").attr("src", "../images/BrandonCard.png")}
        else if(data.charchosen==4){  $("#playerChar").attr("src", "../images/ChrisCard.png")}
        else if(data.charchosen==5){$("#playerChar").attr("src", "../images/ConnorCard.png")}
        else if(data.charchosen==6){$("#playerChar").attr("src", "../images/DanielCard.png")}
        else if(data.charchosen==7){$("#playerChar").attr("src", "../images/DavidCard.png")}
        else if(data.charchosen==8){$("#playerChar").attr("src", "../images/EmilyCard.png")}
        else if(data.charchosen==9){$("#playerChar").attr("src", "../images/JakeCard.png")}
        else if(data.charchosen==10){$("#playerChar").attr("src", "../images/JamesCard.png")}
        else if(data.charchosen==11){$("#playerChar").attr("src", "../images/JonCard.png")}
        else if(data.charchosen==12){$("#playerChar").attr("src", "../images/JosephCard.png")}
        else if(data.charchosen==13){$("#playerChar").attr("src", "../images/JoshuaCard.png")}
        else if(data.charchosen==14){$("#playerChar").attr("src", "../images/JustinCard.png")}
        else if(data.charchosen==15){$("#playerChar").attr("src", "../images/KyleCard.png")}
        else if(data.charchosen==16){$("#playerChar").attr("src", "../images/MattCard.png")}
        else if(data.charchosen==17){$("#playerChar").attr("src", "../images/MeganCard.png")}
        else if(data.charchosen==18){$("#playerChar").attr("src", "../images/NickCard.png")}
        else if(data.charchosen==19){$("#playerChar").attr("src", "../images/RachaelCard.png")}
        else if(data.charchosen==20){$("#playerChar").attr("src", "../images/SarahCard.png")}
        else if(data.charchosen==21){$("#playerChar").attr("src", "../images/TylerCard.png")}
        else if(data.charchosen==22){$("#playerChar").attr("src", "../images/WilliamCard.png")}
        else if(data.charchosen==23){$("#playerChar").attr("src", "../images/ZacharyCard.png")}
      }

      for(let i = 0; i<data.board.length; i++)
      {
        clientboard[i]=data.board[i]
      }
      if(data.board[0]){
        $("#Alex").attr("src","../images/AlexX.gif")
      }
      else{
        $("#Alex").attr("src","../images/AlexCard.png")
      }
      if(data.board[1]){
        $("#Andy").attr("src","../images/AndyX.gif")
      }
      else{
        $("#Andy").attr("src","../images/AndyCard.png")
      }
      if(data.board[2]){
        $("#Ashley").attr("src","../images/AshleyX.gif")
      }
      else{
        $("#Ashley").attr("src","../images/AshleyCard.png")
      }
      if(data.board[3]){
        $("#Brandon").attr("src","../images/BrandonX.gif")
      }
      else{
        $("#Brandon").attr("src","../images/BrandonCard.png")
      }
      if(data.board[4]){
        $("#Chris").attr("src","../images/ChrisX.gif")
      }
      else{
        $("#Chris").attr("src","../images/ChrisCard.png")
      }
      if(data.board[5]){
        $("#Connor").attr("src","../images/ConnorX.gif")
      }
      else{
        $("#Connor").attr("src","../images/ConnorCard.png")
      }
      if(data.board[6]){
        $("#Daniel").attr("src","../images/DanielX.gif")
      }
      else{
        $("#Daniel").attr("src","../images/DanielCard.png")
      }
      if(data.board[7]){
        $("#David").attr("src","../images/DavidX.gif")
      }
      else{
        $("#David").attr("src","../images/DavidCard.png")
      }
      if(data.board[8]){
        $("#Emily").attr("src","../images/EmilyX.gif")
      }
      else{
        $("#Emily").attr("src","../images/EmilyCard.png")
      }
      if(data.board[9]){
        $("#Jake").attr("src","../images/JakeX.gif")
      }
      else{
        $("#Jake").attr("src","../images/JakeCard.png")
      }
      if(data.board[10]){
        $("#James").attr("src","../images/JamesX.gif")
      }
      else{
        $("#James").attr("src","../images/JamesCard.png")
      }
      if(data.board[11]){
        $("#Jon").attr("src","../images/JonX.gif")
      }
      else{
        $("#Jon").attr("src","../images/JonCard.png")
      }
      if(data.board[12]){
        $("#Joseph").attr("src","../images/JosephX.gif")
      }
      else{
        $("#Joseph").attr("src","../images/JosephCard.png")
      }
      if(data.board[13]){
        $("#Joshua").attr("src","../images/JoshuaX.gif")
      }
      else{
        $("#Joshua").attr("src","../images/JoshuaCard.png")
      }
      if(data.board[14]){
        $("#Justin").attr("src","../images/JustinX.gif")
      }
      else{
        $("#Justin").attr("src","../images/JustinCard.png")
      }
      if(data.board[15]){
        $("#Kyle").attr("src","../images/KyleX.gif")
      }
      else{
        $("#Kyle").attr("src","../images/KyleCard.png")
      }
      if(data.board[16]){
        $("#Matt").attr("src","../images/MattX.gif")
      }
      else{
        $("#Matt").attr("src","../images/MattCard.png")
      }
      if(data.board[17]){
        $("#Megan").attr("src","../images/MeganX.gif")
      }
      else{
        $("#Megan").attr("src","../images/MeganCard.png")
      }
      if(data.board[18]){
        $("#Nick").attr("src","../images/NickX.gif")
      }
      else{
        $("#Nick").attr("src","../images/NickCard.png")
      }
      if(data.board[19]){
        $("#Rachael").attr("src","../images/RachaelX.gif")
      }
      else{
        $("#Rachael").attr("src","../images/RachaelCard.png")
      }
      if(data.board[20]){
        $("#Sarah").attr("src","../images/SarahX.gif")
      }
      else{
        $("#Sarah").attr("src","../images/SarahCard.png")
      }
      if(data.board[21]){
        $("#Tyler").attr("src","../images/TylerX.gif")
      }
      else{
        $("#Tyler").attr("src","../images/TylerCard.png")
      }
      if(data.board[22]){
        $("#William").attr("src","../images/WilliamX.gif")
      }
      else{
        $("#William").attr("src","../images/WilliamCard.png")
      }
      if(data.board[23]){
        $("#Zachary").attr("src","../images/ZacharyX.gif")
      }
      else{
        $("#Zachary").attr("src","../images/ZacharyCard.png")
      }

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

  function guessWhoClicked()
  {
    let current = $(location).attr('href')
    let currentreplace = current.replace("multiplayer","");
    window.location.href = currentreplace
  }
