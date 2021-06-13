
  let currentmessage = 1
  let currentmessagetodel = 1


  let roomID;

  function guessWhoClicked()
  {
    $.get("/getmenu",function(data){
      window.location = data.redirect;
    });
  }

  getSpectateGame()
  function getSpectateGame()
  {
      $.post("/spectateGet",null,function(data)
      {
        if(data == null)
        {
          $.get("/getmenu",function(data){
            window.location = data.redirect;
          });
        }
        roomID = data.roomNum;
        $("#roomNum").html("Spectating Room: "+ data.roomNum)

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
          if(data.ClientChar==0){$("#boardone").html("Player 1 Board Character Choosen : Alex" )}
          else if(data.ClientChar==1){$("#boardone").html("Player 1 Board Character Choosen : Andy" )}
          else if(data.ClientChar==2){$("#boardone").html("Player 1 Board Character Choosen : Ashley" )}
          else if(data.ClientChar==3){$("#boardone").html("Player 1 Board Character Choosen : Brandon" )}
          else if(data.ClientChar==4){$("#boardone").html("Player 1 Board Character Choosen : Chris" )}
          else if(data.ClientChar==5){$("#boardone").html("Player 1 Board Character Choosen : Connor" )}
          else if(data.ClientChar==6){$("#boardone").html("Player 1 Board Character Choosen : Daniel" )}
          else if(data.ClientChar==7){$("#boardone").html("Player 1 Board Character Choosen : David" )}
          else if(data.ClientChar==8){$("#boardone").html("Player 1 Board Character Choosen : Emily" )}
          else if(data.ClientChar==9){$("#boardone").html("Player 1 Board Character Choosen : Jake" )}
          else if(data.ClientChar==10){$("#boardone").html("Player 1 Board Character Choosen : James" )}
          else if(data.ClientChar==11){$("#boardone").html("Player 1 Board Character Choosen : Jon" )}
          else if(data.ClientChar==12){$("#boardone").html("Player 1 Board Character Choosen : Joseph" )}
          else if(data.ClientChar==13){$("#boardone").html("Player 1 Board Character Choosen : Joshua" )}
          else if(data.ClientChar==14){$("#boardone").html("Player 1 Board Character Choosen : Justin" )}
          else if(data.ClientChar==15){$("#boardone").html("Player 1 Board Character Choosen : Kyle" )}
          else if(data.ClientChar==16){$("#boardone").html("Player 1 Board Character Choosen : Matt" )}
          else if(data.ClientChar==17){$("#boardone").html("Player 1 Board Character Choosen : Megan" )}
          else if(data.ClientChar==18){$("#boardone").html("Player 1 Board Character Choosen : Nick" )}
          else if(data.ClientChar==19){$("#boardone").html("Player 1 Board Character Choosen : Rachael" )}
          else if(data.ClientChar==20){$("#boardone").html("Player 1 Board Character Choosen : Sarah" )}
          else if(data.ClientChar==21){$("#boardone").html("Player 1 Board Character Choosen : Tyler" )}
          else if(data.ClientChar==22){$("#boardone").html("Player 1 Board Character Choosen : William" )}
          else if(data.ClientChar==23){$("#boardone").html("Player 1 Board Character Choosen : Zachary" )}
        }
        if(data.Client2Char !=   -1)
        {
          if(data.Client2Char==0){$("#boardtwo").html("Player 2 Board Character Choosen : Alex" )}
          else if(data.Client2Char==1){$("#boardtwo").html("Player 2 Board Character Choosen : Andy" )}
          else if(data.Client2Char==2){$("#boardtwo").html("Player 2 Board Character Choosen : Ashley" )}
          else if(data.Client2Char==3){$("#boardtwo").html("Player 2 Board Character Choosen : Brandon" )}
          else if(data.Client2Char==4){$("#boardtwo").html("Player 2 Board Character Choosen : Chris" )}
          else if(data.Client2Char==5){$("#boardtwo").html("Player 2 Board Character Choosen : Connor" )}
          else if(data.Client2Char==6){$("#boardtwo").html("Player 2 Board Character Choosen : Daniel" )}
          else if(data.Client2Char==7){$("#boardtwo").html("Player 2 Board Character Choosen : David" )}
          else if(data.Client2Char==8){$("#boardtwo").html("Player 2 Board Character Choosen : Emily" )}
          else if(data.Client2Char==9){$("#boardtwo").html("Player 2 Board Character Choosen : Jake" )}
          else if(data.Client2Char==10){$("#boardtwo").html("Player 2 Board Character Choosen : James" )}
          else if(data.Client2Char==11){$("#boardtwo").html("Player 2 Board Character Choosen : Jon" )}
          else if(data.Client2Char==12){$("#boardtwo").html("Player 2 Board Character Choosen : Joseph" )}
          else if(data.Client2Char==13){$("#boardtwo").html("Player 2 Board Character Choosen : Joshua" )}
          else if(data.Client2Char==14){$("#boardtwo").html("Player 2 Board Character Choosen : Justin" )}
          else if(data.Client2Char==15){$("#boardtwo").html("Player 2 Board Character Choosen : Kyle" )}
          else if(data.Client2Char==16){$("#boardtwo").html("Player 2 Board Character Choosen : Matt" )}
          else if(data.Client2Char==17){$("#boardtwo").html("Player 2 Board Character Choosen : Megan" )}
          else if(data.Client2Char==18){$("#boardtwo").html("Player 2 Board Character Choosen : Nick" )}
          else if(data.Client2Char==19){$("#boardtwo").html("Player 2 Board Character Choosen : Rachael" )}
          else if(data.Client2Char==20){$("#boardtwo").html("Player 2 Board Character Choosen : Sarah" )}
          else if(data.Client2Char==21){$("#boardtwo").html("Player 2 Board Character Choosen : Tyler" )}
          else if(data.Client2Char==22){$("#boardtwo").html("Player 2 Board Character Choosen : William" )}
          else if(data.Client2Char==23){$("#boardtwo").html("Player 2 Board Character Choosen : Zachary" )}
        }

        if(data.ClientBoard[0])
        {
          if($("#Alex1").attr("src")!="../images/AlexX.gif")
          {$("#Alex1").attr("src","../images/AlexX.gif")}
        }
        else
        {
          $("#Alex1").attr("src","../images/AlexCard.png")
        }
        if(data.ClientBoard[1])
        {
          if($("#Andy1").attr("src")!="../images/AndyX.gif")
          {$("#Andy1").attr("src","../images/AndyX.gif")}
        }
        else{
          $("#Andy1").attr("src","../images/AndyCard.png")
        }
        if(data.ClientBoard[2]){
          if($("#Ashley1").attr("src")!="../images/AshleyX.gif")
          {$("#Ashley1").attr("src","../images/AshleyX.gif")}
        }
        else{
          $("#Ashley1").attr("src","../images/AshleyCard.png")
        }
        if(data.ClientBoard[3]){
          if($("#Brandon1").attr("src")!="../images/BrandonX.gif")
          {$("#Brandon1").attr("src","../images/BrandonX.gif")}
        }
        else{
          $("#Brandon1").attr("src","../images/BrandonCard.png")
        }
        if(data.ClientBoard[4]){
          if($("#Chris1").attr("src")!="../images/ChrisX.gif")
          {$("#Chris1").attr("src","../images/ChrisX.gif")}
        }
        else{
          $("#Chris1").attr("src","../images/ChrisCard.png")
        }
        if(data.ClientBoard[5]){
          if($("#Connor1").attr("src")!="../images/ConnorX.gif")
          {$("#Connor1").attr("src","../images/ConnorX.gif")}
        }
        else{
          $("#Connor1").attr("src","../images/ConnorCard.png")
        }
        if(data.ClientBoard[6]){
          if($("#Daniel1").attr("src")!="../images/DanielX.gif")
          {$("#Daniel1").attr("src","../images/DanielX.gif")}
        }
        else{
          $("#Daniel1").attr("src","../images/DanielCard.png")
        }
        if(data.ClientBoard[7]){
          if($("#David1").attr("src")!="../images/DavidX.gif")
          {$("#David1").attr("src","../images/DavidX.gif")}
        }
        else{
          $("#David1").attr("src","../images/DavidCard.png")
        }
        if(data.ClientBoard[8]){
          if($("#Emily1").attr("src")!="../images/EmilyX.gif")
          {$("#Emily1").attr("src","../images/EmilyX.gif")}
        }
        else{
          $("#Emily1").attr("src","../images/EmilyCard.png")
        }
        if(data.ClientBoard[9]){
          if($("#Jake1").attr("src")!="../images/JakeX.gif")
          {$("#Jake1").attr("src","../images/JakeX.gif")}
        }
        else{
          $("#Jake1").attr("src","../images/JakeCard.png")
        }
        if(data.ClientBoard[10]){
          if($("#James1").attr("src")!="../images/JamesX.gif")
          {$("#James1").attr("src","../images/JamesX.gif")}
        }
        else{
          $("#James1").attr("src","../images/JamesCard.png")
        }
        if(data.ClientBoard[11]){
          if($("#Jon1").attr("src")!="../images/JonX.gif")
          {$("#Jon1").attr("src","../images/JonX.gif")}
        }
        else{
          $("#Jon1").attr("src","../images/JonCard.png")
        }
        if(data.ClientBoard[12]){
          if($("#Joseph1").attr("src")!="../images/JosephX.gif")
          {$("#Joseph1").attr("src","../images/JosephX.gif")}
        }
        else{
          $("#Joseph1").attr("src","../images/JosephCard.png")
        }
        if(data.ClientBoard[13]){
          if($("#Joshua1").attr("src")!="../images/JoshuaX.gif")
          {$("#Joshua1").attr("src","../images/JoshuaX.gif")}
        }
        else{
          $("#Joshua1").attr("src","../images/JoshuaCard.png")
        }
        if(data.ClientBoard[14]){
          if($("#Justin1").attr("src")!="../images/JustinX.gif")
          {$("#Justin1").attr("src","../images/JustinX.gif")}
        }
        else{
          $("#Justin1").attr("src","../images/JustinCard.png")
        }
        if(data.ClientBoard[15]){
          if($("#Kyle1").attr("src")!="../images/KyleX.gif")
          {$("#Kyle1").attr("src","../images/KyleX.gif")}
        }
        else{
          $("#Kyle1").attr("src","../images/KyleCard.png")
        }
        if(data.ClientBoard[16]){
          if($("#Matt1").attr("src")!="../images/MattX.gif")
          {$("#Matt1").attr("src","../images/MattX.gif")}
        }
        else{
          $("#Matt1").attr("src","../images/MattCard.png")
        }
        if(data.ClientBoard[17]){
          if($("#Megan1").attr("src")!="../images/MeganX.gif")
          {$("#Megan1").attr("src","../images/MeganX.gif")}
        }
        else{
          $("#Megan1").attr("src","../images/MeganCard.png")
        }
        if(data.ClientBoard[18]){
          if($("#Nick1").attr("src")!="../images/NickX.gif")
          {$("#Nick1").attr("src","../images/NickX.gif")}
        }
        else{
          $("#Nick1").attr("src","../images/NickCard.png")
        }
        if(data.ClientBoard[19]){
          if($("#Rachael1").attr("src")!="../images/RachaelX.gif")
          {$("#Rachael1").attr("src","../images/RachaelX.gif")}
        }
        else{
          $("#Rachael1").attr("src","../images/RachaelCard.png")
        }
        if(data.ClientBoard[20]){
          if($("#Sarah1").attr("src")!="../images/SarahX.gif")
          {$("#Sarah1").attr("src","../images/SarahX.gif")}
        }
        else{
          $("#Sarah1").attr("src","../images/SarahCard.png")
        }
        if(data.ClientBoard[21]){
          if($("#Tyler1").attr("src")!="../images/TylerX.gif")
          {$("#Tyler1").attr("src","../images/TylerX.gif")}
        }
        else{
          $("#Tyler1").attr("src","../images/TylerCard.png")
        }
        if(data.ClientBoard[22]){
          if($("#William1").attr("src")!="../images/WilliamX.gif")
          {$("#William1").attr("src","../images/WilliamX.gif")}
        }
        else{
          $("#William1").attr("src","../images/WilliamCard.png")
        }
        if(data.ClientBoard[23]){
          if($("#Zachary1").attr("src")!="../images/ZacharyX.gif")
          {$("#Zachary1").attr("src","../images/ZacharyX.gif")}
        }
        else{
          $("#Zachary1").attr("src","../images/ZacharyCard.png")
        }

        if(data.Client2Board[0])
        {
          if($("#Alex2").attr("src")!="../images/AlexX.gif")
          {$("#Alex2").attr("src","../images/AlexX.gif")}
        }
        else
        {
          $("#Alex2").attr("src","../images/AlexCard.png")
        }
        if(data.Client2Board[1])
        {
          if($("#Andy2").attr("src")!="../images/AndyX.gif")
          {$("#Andy2").attr("src","../images/AndyX.gif")}
        }
        else{
          $("#Andy2").attr("src","../images/AndyCard.png")
        }
        if(data.Client2Board[2]){
          if($("#Ashley2").attr("src")!="../images/AshleyX.gif")
          {$("#Ashley2").attr("src","../images/AshleyX.gif")}
        }
        else{
          $("#Ashley2").attr("src","../images/AshleyCard.png")
        }
        if(data.Client2Board[3]){
          if($("#Brandon2").attr("src")!="../images/BrandonX.gif")
          {$("#Brandon2").attr("src","../images/BrandonX.gif")}
        }
        else{
          $("#Brandon2").attr("src","../images/BrandonCard.png")
        }
        if(data.Client2Board[4]){
          if($("#Chris2").attr("src")!="../images/ChrisX.gif")
          {$("#Chris2").attr("src","../images/ChrisX.gif")}
        }
        else{
          $("#Chris2").attr("src","../images/ChrisCard.png")
        }
        if(data.Client2Board[5]){
          if($("#Connor2").attr("src")!="../images/ConnorX.gif")
          {$("#Connor2").attr("src","../images/ConnorX.gif")}
        }
        else{
          $("#Connor2").attr("src","../images/ConnorCard.png")
        }
        if(data.Client2Board[6]){
          if($("#Daniel2").attr("src")!="../images/DanielX.gif")
          {$("#Daniel2").attr("src","../images/DanielX.gif")}
        }
        else{
          $("#Daniel2").attr("src","../images/DanielCard.png")
        }
        if(data.Client2Board[7]){
          if($("#David2").attr("src")!="../images/DavidX.gif")
          {$("#David2").attr("src","../images/DavidX.gif")}
        }
        else{
          $("#David2").attr("src","../images/DavidCard.png")
        }
        if(data.Client2Board[8]){
          if($("#Emily2").attr("src")!="../images/EmilyX.gif")
          {$("#Emily2").attr("src","../images/EmilyX.gif")}
        }
        else{
          $("#Emily2").attr("src","../images/EmilyCard.png")
        }
        if(data.Client2Board[9]){
          if($("#Jake2").attr("src")!="../images/JakeX.gif")
          {$("#Jake2").attr("src","../images/JakeX.gif")}
        }
        else{
          $("#Jake2").attr("src","../images/JakeCard.png")
        }
        if(data.Client2Board[10]){
          if($("#James2").attr("src")!="../images/JamesX.gif")
          {$("#James2").attr("src","../images/JamesX.gif")}
        }
        else{
          $("#James2").attr("src","../images/JamesCard.png")
        }
        if(data.Client2Board[11]){
          if($("#Jon2").attr("src")!="../images/JonX.gif")
          {$("#Jon2").attr("src","../images/JonX.gif")}
        }
        else{
          $("#Jon2").attr("src","../images/JonCard.png")
        }
        if(data.Client2Board[12]){
          if($("#Joseph2").attr("src")!="../images/JosephX.gif")
          {$("#Joseph2").attr("src","../images/JosephX.gif")}
        }
        else{
          $("#Joseph2").attr("src","../images/JosephCard.png")
        }
        if(data.Client2Board[13]){
          if($("#Joshua2").attr("src")!="../images/JoshuaX.gif")
          {$("#Joshua2").attr("src","../images/JoshuaX.gif")}
        }
        else{
          $("#Joshua2").attr("src","../images/JoshuaCard.png")
        }
        if(data.Client2Board[14]){
          if($("#Justin2").attr("src")!="../images/JustinX.gif")
          {$("#Justin2").attr("src","../images/JustinX.gif")}
        }
        else{
          $("#Justin2").attr("src","../images/JustinCard.png")
        }
        if(data.Client2Board[15]){
          if($("#Kyle2").attr("src")!="../images/KyleX.gif")
          {$("#Kyle2").attr("src","../images/KyleX.gif")}
        }
        else{
          $("#Kyle2").attr("src","../images/KyleCard.png")
        }
        if(data.Client2Board[16]){
          if($("#Matt2").attr("src")!="../images/MattX.gif")
          {$("#Matt2").attr("src","../images/MattX.gif")}
        }
        else{
          $("#Matt2").attr("src","../images/MattCard.png")
        }
        if(data.Client2Board[17]){
          if($("#Megan2").attr("src")!="../images/MeganX.gif")
          {$("#Megan2").attr("src","../images/MeganX.gif")}
        }
        else{
          $("#Megan2").attr("src","../images/MeganCard.png")
        }
        if(data.Client2Board[18]){
          if($("#Nick2").attr("src")!="../images/NickX.gif")
          {$("#Nick2").attr("src","../images/NickX.gif")}
        }
        else{
          $("#Nick2").attr("src","../images/NickCard.png")
        }
        if(data.Client2Board[19]){
          if($("#Rachael2").attr("src")!="../images/RachaelX.gif")
          {$("#Rachael2").attr("src","../images/RachaelX.gif")}
        }
        else{
          $("#Rachael2").attr("src","../images/RachaelCard.png")
        }
        if(data.Client2Board[20]){
          if($("#Sarah2").attr("src")!="../images/SarahX.gif")
          {$("#Sarah2").attr("src","../images/SarahX.gif")}
        }
        else{
          $("#Sarah2").attr("src","../images/SarahCard.png")
        }
        if(data.Client2Board[21]){
          if($("#Tyler2").attr("src")!="../images/TylerX.gif")
          {$("#Tyler2").attr("src","../images/TylerX.gif")}
        }
        else{
          $("#Tyler2").attr("src","../images/TylerCard.png")
        }
        if(data.Client2Board[22]){
          if($("#William2").attr("src")!="../images/WilliamX.gif")
          {$("#William2").attr("src","../images/WilliamX.gif")}
        }
        else{
          $("#William2").attr("src","../images/WilliamCard.png")
        }
        if(data.Client2Board[23]){
          if($("#Zachary2").attr("src")!="../images/ZacharyX.gif")
          {$("#Zachary2").attr("src","../images/ZacharyX.gif")}
        }
        else{
          $("#Zachary2").attr("src","../images/ZacharyCard.png")
        }

        $.get("/getUserName", {ident: data.ClientID},function(return1)
        {
          let name1 = ""
          if(return1 == null || return1.name == null)
          {name1 = "null"}
          else
          {name1 = return1.name}
      //    console.log("user one is " + name1)
          $.get("/getUserName", {ident: data.Client2ID},function(return2)
          {
            let name2 = ""
            if(return2 == null || return2.name == null)
            {name2 = "null"}
            else
            {name2 = return2.name}
      //      console.log("user two is " + name2)
            $("#playervsplayer").html(name1 + " vs " + name2)
          })
        })

        if(data.PlayerOneSetOut != null || data.PlayerTwoSetOut != null)
        {
          if(data.PlayerOneSetOut == true && data.PlayerTwoSetOut == false)
          {
            $.get("/getP1Win",function(data){
              window.location = data.redirect;
            });
          }
          else if(data.PlayerOneSetOut == false && data.PlayerTwoSetOut == true)
          {
            $.get("/getP2Win",function(data){
              window.location = data.redirect;
            });
          }
        }
      let numMilliSeconds = 0500;   // 1000 milliseconds = 1 second
      setTimeout(getSpectateGame, numMilliSeconds);//recall this function after this number of miliseconds.
    })
  }
////////////////////////////////////////////////////////////////////////////////////
  $(document).ready(function()
  {
    $.post("/spectateGet",null,function(data)
    {
      if(data == null)
      {
        $.get("/getmenu",function(data){
          window.location = data.redirect;
        });
      }

      $("#roomNum").html("Spectating Room: "+ data.roomNum)

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
        if(data.ClientChar==0){$("#boardone").html("Player 1 Board Character Choosen : Alex" )}
        else if(data.ClientChar==1){$("#boardone").html("Player 1 Board Character Choosen : Andy" )}
        else if(data.ClientChar==2){$("#boardone").html("Player 1 Board Character Choosen : Ashley" )}
        else if(data.ClientChar==3){$("#boardone").html("Player 1 Board Character Choosen : Brandon" )}
        else if(data.ClientChar==4){$("#boardone").html("Player 1 Board Character Choosen : Chris" )}
        else if(data.ClientChar==5){$("#boardone").html("Player 1 Board Character Choosen : Connor" )}
        else if(data.ClientChar==6){$("#boardone").html("Player 1 Board Character Choosen : Daniel" )}
        else if(data.ClientChar==7){$("#boardone").html("Player 1 Board Character Choosen : David" )}
        else if(data.ClientChar==8){$("#boardone").html("Player 1 Board Character Choosen : Emily" )}
        else if(data.ClientChar==9){$("#boardone").html("Player 1 Board Character Choosen : Jake" )}
        else if(data.ClientChar==10){$("#boardone").html("Player 1 Board Character Choosen : James" )}
        else if(data.ClientChar==11){$("#boardone").html("Player 1 Board Character Choosen : Jon" )}
        else if(data.ClientChar==12){$("#boardone").html("Player 1 Board Character Choosen : Joseph" )}
        else if(data.ClientChar==13){$("#boardone").html("Player 1 Board Character Choosen : Joshua" )}
        else if(data.ClientChar==14){$("#boardone").html("Player 1 Board Character Choosen : Justin" )}
        else if(data.ClientChar==15){$("#boardone").html("Player 1 Board Character Choosen : Kyle" )}
        else if(data.ClientChar==16){$("#boardone").html("Player 1 Board Character Choosen : Matt" )}
        else if(data.ClientChar==17){$("#boardone").html("Player 1 Board Character Choosen : Megan" )}
        else if(data.ClientChar==18){$("#boardone").html("Player 1 Board Character Choosen : Nick" )}
        else if(data.ClientChar==19){$("#boardone").html("Player 1 Board Character Choosen : Rachael" )}
        else if(data.ClientChar==20){$("#boardone").html("Player 1 Board Character Choosen : Sarah" )}
        else if(data.ClientChar==21){$("#boardone").html("Player 1 Board Character Choosen : Tyler" )}
        else if(data.ClientChar==22){$("#boardone").html("Player 1 Board Character Choosen : William" )}
        else if(data.ClientChar==23){$("#boardone").html("Player 1 Board Character Choosen : Zachary" )}
      }
      if(data.Client2Char !=   -1)
      {
        if(data.Client2Char==0){$("#boardtwo").html("Player 2 Board Character Choosen : Alex" )}
        else if(data.Client2Char==1){$("#boardtwo").html("Player 2 Board Character Choosen : Andy" )}
        else if(data.Client2Char==2){$("#boardtwo").html("Player 2 Board Character Choosen : Ashley" )}
        else if(data.Client2Char==3){$("#boardtwo").html("Player 2 Board Character Choosen : Brandon" )}
        else if(data.Client2Char==4){$("#boardtwo").html("Player 2 Board Character Choosen : Chris" )}
        else if(data.Client2Char==5){$("#boardtwo").html("Player 2 Board Character Choosen : Connor" )}
        else if(data.Client2Char==6){$("#boardtwo").html("Player 2 Board Character Choosen : Daniel" )}
        else if(data.Client2Char==7){$("#boardtwo").html("Player 2 Board Character Choosen : David" )}
        else if(data.Client2Char==8){$("#boardtwo").html("Player 2 Board Character Choosen : Emily" )}
        else if(data.Client2Char==9){$("#boardtwo").html("Player 2 Board Character Choosen : Jake" )}
        else if(data.Client2Char==10){$("#boardtwo").html("Player 2 Board Character Choosen : James" )}
        else if(data.Client2Char==11){$("#boardtwo").html("Player 2 Board Character Choosen : Jon" )}
        else if(data.Client2Char==12){$("#boardtwo").html("Player 2 Board Character Choosen : Joseph" )}
        else if(data.Client2Char==13){$("#boardtwo").html("Player 2 Board Character Choosen : Joshua" )}
        else if(data.Client2Char==14){$("#boardtwo").html("Player 2 Board Character Choosen : Justin" )}
        else if(data.Client2Char==15){$("#boardtwo").html("Player 2 Board Character Choosen : Kyle" )}
        else if(data.Client2Char==16){$("#boardtwo").html("Player 2 Board Character Choosen : Matt" )}
        else if(data.Client2Char==17){$("#boardtwo").html("Player 2 Board Character Choosen : Megan" )}
        else if(data.Client2Char==18){$("#boardtwo").html("Player 2 Board Character Choosen : Nick" )}
        else if(data.Client2Char==19){$("#boardtwo").html("Player 2 Board Character Choosen : Rachael" )}
        else if(data.Client2Char==20){$("#boardtwo").html("Player 2 Board Character Choosen : Sarah" )}
        else if(data.Client2Char==21){$("#boardtwo").html("Player 2 Board Character Choosen : Tyler" )}
        else if(data.Client2Char==22){$("#boardtwo").html("Player 2 Board Character Choosen : William" )}
        else if(data.Client2Char==23){$("#boardtwo").html("Player 2 Board Character Choosen : Zachary" )}
      }


      if(data.ClientBoard[0])
      {
        if($("#Alex1").attr("src")!="../images/AlexX.gif")
        {$("#Alex1").attr("src","../images/AlexX.gif")}
      }
      else
      {
        $("#Alex1").attr("src","../images/AlexCard.png")
      }
      if(data.ClientBoard[1])
      {
        if($("#Andy1").attr("src")!="../images/AndyX.gif")
        {$("#Andy1").attr("src","../images/AndyX.gif")}
      }
      else{
        $("#Andy1").attr("src","../images/AndyCard.png")
      }
      if(data.ClientBoard[2]){
        if($("#Ashley1").attr("src")!="../images/AshleyX.gif")
        {$("#Ashley1").attr("src","../images/AshleyX.gif")}
      }
      else{
        $("#Ashley1").attr("src","../images/AshleyCard.png")
      }
      if(data.ClientBoard[3]){
        if($("#Brandon1").attr("src")!="../images/BrandonX.gif")
        {$("#Brandon1").attr("src","../images/BrandonX.gif")}
      }
      else{
        $("#Brandon1").attr("src","../images/BrandonCard.png")
      }
      if(data.ClientBoard[4]){
        if($("#Chris1").attr("src")!="../images/ChrisX.gif")
        {$("#Chris1").attr("src","../images/ChrisX.gif")}
      }
      else{
        $("#Chris1").attr("src","../images/ChrisCard.png")
      }
      if(data.ClientBoard[5]){
        if($("#Connor1").attr("src")!="../images/ConnorX.gif")
        {$("#Connor1").attr("src","../images/ConnorX.gif")}
      }
      else{
        $("#Connor1").attr("src","../images/ConnorCard.png")
      }
      if(data.ClientBoard[6]){
        if($("#Daniel1").attr("src")!="../images/DanielX.gif")
        {$("#Daniel1").attr("src","../images/DanielX.gif")}
      }
      else{
        $("#Daniel1").attr("src","../images/DanielCard.png")
      }
      if(data.ClientBoard[7]){
        if($("#David1").attr("src")!="../images/DavidX.gif")
        {$("#David1").attr("src","../images/DavidX.gif")}
      }
      else{
        $("#David1").attr("src","../images/DavidCard.png")
      }
      if(data.ClientBoard[8]){
        if($("#Emily1").attr("src")!="../images/EmilyX.gif")
        {$("#Emily1").attr("src","../images/EmilyX.gif")}
      }
      else{
        $("#Emily1").attr("src","../images/EmilyCard.png")
      }
      if(data.ClientBoard[9]){
        if($("#Jake1").attr("src")!="../images/JakeX.gif")
        {$("#Jake1").attr("src","../images/JakeX.gif")}
      }
      else{
        $("#Jake1").attr("src","../images/JakeCard.png")
      }
      if(data.ClientBoard[10]){
        if($("#James1").attr("src")!="../images/JamesX.gif")
        {$("#James1").attr("src","../images/JamesX.gif")}
      }
      else{
        $("#James1").attr("src","../images/JamesCard.png")
      }
      if(data.ClientBoard[11]){
        if($("#Jon1").attr("src")!="../images/JonX.gif")
        {$("#Jon1").attr("src","../images/JonX.gif")}
      }
      else{
        $("#Jon1").attr("src","../images/JonCard.png")
      }
      if(data.ClientBoard[12]){
        if($("#Joseph1").attr("src")!="../images/JosephX.gif")
        {$("#Joseph1").attr("src","../images/JosephX.gif")}
      }
      else{
        $("#Joseph1").attr("src","../images/JosephCard.png")
      }
      if(data.ClientBoard[13]){
        if($("#Joshua1").attr("src")!="../images/JoshuaX.gif")
        {$("#Joshua1").attr("src","../images/JoshuaX.gif")}
      }
      else{
        $("#Joshua1").attr("src","../images/JoshuaCard.png")
      }
      if(data.ClientBoard[14]){
        if($("#Justin1").attr("src")!="../images/JustinX.gif")
        {$("#Justin1").attr("src","../images/JustinX.gif")}
      }
      else{
        $("#Justin1").attr("src","../images/JustinCard.png")
      }
      if(data.ClientBoard[15]){
        if($("#Kyle1").attr("src")!="../images/KyleX.gif")
        {$("#Kyle1").attr("src","../images/KyleX.gif")}
      }
      else{
        $("#Kyle1").attr("src","../images/KyleCard.png")
      }
      if(data.ClientBoard[16]){
        if($("#Matt1").attr("src")!="../images/MattX.gif")
        {$("#Matt1").attr("src","../images/MattX.gif")}
      }
      else{
        $("#Matt1").attr("src","../images/MattCard.png")
      }
      if(data.ClientBoard[17]){
        if($("#Megan1").attr("src")!="../images/MeganX.gif")
        {$("#Megan1").attr("src","../images/MeganX.gif")}
      }
      else{
        $("#Megan1").attr("src","../images/MeganCard.png")
      }
      if(data.ClientBoard[18]){
        if($("#Nick1").attr("src")!="../images/NickX.gif")
        {$("#Nick1").attr("src","../images/NickX.gif")}
      }
      else{
        $("#Nick1").attr("src","../images/NickCard.png")
      }
      if(data.ClientBoard[19]){
        if($("#Rachael1").attr("src")!="../images/RachaelX.gif")
        {$("#Rachael1").attr("src","../images/RachaelX.gif")}
      }
      else{
        $("#Rachael1").attr("src","../images/RachaelCard.png")
      }
      if(data.ClientBoard[20]){
        if($("#Sarah1").attr("src")!="../images/SarahX.gif")
        {$("#Sarah1").attr("src","../images/SarahX.gif")}
      }
      else{
        $("#Sarah1").attr("src","../images/SarahCard.png")
      }
      if(data.ClientBoard[21]){
        if($("#Tyler1").attr("src")!="../images/TylerX.gif")
        {$("#Tyler1").attr("src","../images/TylerX.gif")}
      }
      else{
        $("#Tyler1").attr("src","../images/TylerCard.png")
      }
      if(data.ClientBoard[22]){
        if($("#William1").attr("src")!="../images/WilliamX.gif")
        {$("#William1").attr("src","../images/WilliamX.gif")}
      }
      else{
        $("#William1").attr("src","../images/WilliamCard.png")
      }
      if(data.ClientBoard[23]){
        if($("#Zachary1").attr("src")!="../images/ZacharyX.gif")
        {$("#Zachary1").attr("src","../images/ZacharyX.gif")}
      }
      else{
        $("#Zachary1").attr("src","../images/ZacharyCard.png")
      }

      if(data.Client2Board[0])
      {
        if($("#Alex2").attr("src")!="../images/AlexX.gif")
        {$("#Alex2").attr("src","../images/AlexX.gif")}
      }
      else
      {
        $("#Alex2").attr("src","../images/AlexCard.png")
      }
      if(data.Client2Board[1])
      {
        if($("#Andy2").attr("src")!="../images/AndyX.gif")
        {$("#Andy2").attr("src","../images/AndyX.gif")}
      }
      else{
        $("#Andy2").attr("src","../images/AndyCard.png")
      }
      if(data.Client2Board[2]){
        if($("#Ashley2").attr("src")!="../images/AshleyX.gif")
        {$("#Ashley2").attr("src","../images/AshleyX.gif")}
      }
      else{
        $("#Ashley2").attr("src","../images/AshleyCard.png")
      }
      if(data.Client2Board[3]){
        if($("#Brandon2").attr("src")!="../images/BrandonX.gif")
        {$("#Brandon2").attr("src","../images/BrandonX.gif")}
      }
      else{
        $("#Brandon2").attr("src","../images/BrandonCard.png")
      }
      if(data.Client2Board[4]){
        if($("#Chris2").attr("src")!="../images/ChrisX.gif")
        {$("#Chris2").attr("src","../images/ChrisX.gif")}
      }
      else{
        $("#Chris2").attr("src","../images/ChrisCard.png")
      }
      if(data.Client2Board[5]){
        if($("#Connor2").attr("src")!="../images/ConnorX.gif")
        {$("#Connor2").attr("src","../images/ConnorX.gif")}
      }
      else{
        $("#Connor2").attr("src","../images/ConnorCard.png")
      }
      if(data.Client2Board[6]){
        if($("#Daniel2").attr("src")!="../images/DanielX.gif")
        {$("#Daniel2").attr("src","../images/DanielX.gif")}
      }
      else{
        $("#Daniel2").attr("src","../images/DanielCard.png")
      }
      if(data.Client2Board[7]){
        if($("#David2").attr("src")!="../images/DavidX.gif")
        {$("#David2").attr("src","../images/DavidX.gif")}
      }
      else{
        $("#David2").attr("src","../images/DavidCard.png")
      }
      if(data.Client2Board[8]){
        if($("#Emily2").attr("src")!="../images/EmilyX.gif")
        {$("#Emily2").attr("src","../images/EmilyX.gif")}
      }
      else{
        $("#Emily2").attr("src","../images/EmilyCard.png")
      }
      if(data.Client2Board[9]){
        if($("#Jake2").attr("src")!="../images/JakeX.gif")
        {$("#Jake2").attr("src","../images/JakeX.gif")}
      }
      else{
        $("#Jake2").attr("src","../images/JakeCard.png")
      }
      if(data.Client2Board[10]){
        if($("#James2").attr("src")!="../images/JamesX.gif")
        {$("#James2").attr("src","../images/JamesX.gif")}
      }
      else{
        $("#James2").attr("src","../images/JamesCard.png")
      }
      if(data.Client2Board[11]){
        if($("#Jon2").attr("src")!="../images/JonX.gif")
        {$("#Jon2").attr("src","../images/JonX.gif")}
      }
      else{
        $("#Jon2").attr("src","../images/JonCard.png")
      }
      if(data.Client2Board[12]){
        if($("#Joseph2").attr("src")!="../images/JosephX.gif")
        {$("#Joseph2").attr("src","../images/JosephX.gif")}
      }
      else{
        $("#Joseph2").attr("src","../images/JosephCard.png")
      }
      if(data.Client2Board[13]){
        if($("#Joshua2").attr("src")!="../images/JoshuaX.gif")
        {$("#Joshua2").attr("src","../images/JoshuaX.gif")}
      }
      else{
        $("#Joshua2").attr("src","../images/JoshuaCard.png")
      }
      if(data.Client2Board[14]){
        if($("#Justin2").attr("src")!="../images/JustinX.gif")
        {$("#Justin2").attr("src","../images/JustinX.gif")}
      }
      else{
        $("#Justin2").attr("src","../images/JustinCard.png")
      }
      if(data.Client2Board[15]){
        if($("#Kyle2").attr("src")!="../images/KyleX.gif")
        {$("#Kyle2").attr("src","../images/KyleX.gif")}
      }
      else{
        $("#Kyle2").attr("src","../images/KyleCard.png")
      }
      if(data.Client2Board[16]){
        if($("#Matt2").attr("src")!="../images/MattX.gif")
        {$("#Matt2").attr("src","../images/MattX.gif")}
      }
      else{
        $("#Matt2").attr("src","../images/MattCard.png")
      }
      if(data.Client2Board[17]){
        if($("#Megan2").attr("src")!="../images/MeganX.gif")
        {$("#Megan2").attr("src","../images/MeganX.gif")}
      }
      else{
        $("#Megan2").attr("src","../images/MeganCard.png")
      }
      if(data.Client2Board[18]){
        if($("#Nick2").attr("src")!="../images/NickX.gif")
        {$("#Nick2").attr("src","../images/NickX.gif")}
      }
      else{
        $("#Nick2").attr("src","../images/NickCard.png")
      }
      if(data.Client2Board[19]){
        if($("#Rachael2").attr("src")!="../images/RachaelX.gif")
        {$("#Rachael2").attr("src","../images/RachaelX.gif")}
      }
      else{
        $("#Rachael2").attr("src","../images/RachaelCard.png")
      }
      if(data.Client2Board[20]){
        if($("#Sarah2").attr("src")!="../images/SarahX.gif")
        {$("#Sarah2").attr("src","../images/SarahX.gif")}
      }
      else{
        $("#Sarah2").attr("src","../images/SarahCard.png")
      }
      if(data.Client2Board[21]){
        if($("#Tyler2").attr("src")!="../images/TylerX.gif")
        {$("#Tyler2").attr("src","../images/TylerX.gif")}
      }
      else{
        $("#Tyler2").attr("src","../images/TylerCard.png")
      }
      if(data.Client2Board[22]){
        if($("#William2").attr("src")!="../images/WilliamX.gif")
        {$("#William2").attr("src","../images/WilliamX.gif")}
      }
      else{
        $("#William2").attr("src","../images/WilliamCard.png")
      }
      if(data.Client2Board[23]){
        if($("#Zachary2").attr("src")!="../images/ZacharyX.gif")
        {$("#Zachary2").attr("src","../images/ZacharyX.gif")}
      }
      else{
        $("#Zachary2").attr("src","../images/ZacharyCard.png")
      }

      $.get("/getUserName", {ident: data.ClientID},function(return1)
      {
        let name1 = ""
        if(return1 == null || return1.name == null)
        {name1 = "null"}
        else
        {name1 = return1.name}
    //    console.log("user one is " + name1)
        $.get("/getUserName", {ident: data.Client2ID},function(return2)
        {
          let name2 = ""
          if(return2 == null || return2.name == null)
          {name2 = "null"}
          else
          {name2 = return2.name}
    //      console.log("user two is " + name2)
          $("#playervsplayer").html(name1 + " vs " + name2)
        })
      })

      if(data.PlayerOneSetOut != null || data.PlayerTwoSetOut != null)
      {
        if(data.PlayerOneSetOut == true && data.PlayerTwoSetOut == false)
        {
          $.get("/getP1Win",function(data){
            window.location = data.redirect;
          });
        }
        else if(data.PlayerOneSetOut == false && data.PlayerTwoSetOut == true)
        {
          $.get("/getP2Win",function(data){
            window.location = data.redirect;
          });
        }
      }
    })
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
