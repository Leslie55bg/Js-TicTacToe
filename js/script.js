var player= 1;
var player1c = "1";
var player2f = "2";

//********************FONCTION PLACEMENT JOUEURS ALTERNES ******************

function play(numeroCase) {
  if (player==1) {                                                            // SI joueur 1 (rappel variable) joue :
    document.getElementById('case'+numeroCase).classList.add("player1c");      // il a accès direct à Id case de son choix, (=onclick HTML)
    player = 2;
    victoire();                                                              // et place son image pré-destinée grace à : (.classlist.add qui est un rappel balise vers CSS)
  }

  else if (player==2) {                                                 //SINON, SI joueur 2 (rappel variable) joue :
    document.getElementById('case'+numeroCase).classList.add("player2f");
    player = 1;
    victoire();
  }                                                                        // et place son image pré-destinée grace à :
                                                                          // (.classlist.add qui est un rappel balise vers CSS)
  document.getElementById('case'+numeroCase).onclick = function(play) {   //blocage onclick = impossible de changer (retour faux)
    return (false);
  }
}

//********************FONCTION VICTOIRE & AFFICHE du GAGNANTS + bouton reset ******************
function victoire () {

 var win1 = false;

  if (document.getElementById('case0').className == "player1c" && document.getElementById('case1').className == "player1c" && document.getElementById('case2').className == "player1c" ){
    win1 = true;
  }
  else if (document.getElementById('case0').className == "player1c" && document.getElementById('case4').className == "player1c" && document.getElementById('case8').className == "player1c"){
    win1 = true;
  }
  else if (document.getElementById('case0').className == "player1c" && document.getElementById('case3').className == "player1c" && document.getElementById('case6').className == "player1c"){
    win1 = true;
  }
  else if (document.getElementById('case1').className == "player1c" && document.getElementById('case4').className == "player1c" && document.getElementById('case7').className == "player1c"){
    win1 = true;
  }
  else if (document.getElementById('case3').className == "player1c" && document.getElementById('case4').className == "player1c" && document.getElementById('case5').className == "player1c"){
    win1 = true;
  }
  else if (document.getElementById('case2').className == "player1c" && document.getElementById('case4').className == "player1c" && document.getElementById('case6').className == "player1c"){
    win1 = true;
  }
  else if (document.getElementById('case2').className == "player1c" && document.getElementById('case5').className == "player1c" && document.getElementById('case8').className == "player1c"){
    win1 = true;
  }
  if (win1 == true) {
    document.getElementById("affichcitron").style.visibility ="visible";   //en CSS "affichcitron" est noté visibily:hidden / ici on le rappelle en visible si win TRUE
    document.getElementById("TryA").style.visibility = "visible";
  }

var win2 = false;

 if (document.getElementById('case0').className == "player2f" && document.getElementById('case1').className == "player2f" && document.getElementById('case2').className == "player2f"){
   win2 = true;
 }
 else if (document.getElementById('case0').className == "player2f" && document.getElementById('case4').className == "player2f" && document.getElementById('case8').className == "player2f"){
   win2 = true;
 }
 else if (document.getElementById('case0').className == "player2f" && document.getElementById('case3').className == "player2f" && document.getElementById('case6').className == "player2f"){
   win2 = true;
 }
 else if (document.getElementById('case1').className == "player2f" && document.getElementById('case4').className == "player2f" && document.getElementById('case7').className == "player2f"){
   win2 = true;
 }
 else if (document.getElementById('case3').className == "player2f" && document.getElementById('case4').className == "player2f" && document.getElementById('case5').className == "player2f"){
   win2 = true;
 }
 else if (document.getElementById('case2').className == "player2f" && document.getElementById('case4').className == "player2f" && document.getElementById('case6').className == "player2f"){
   win2 = true;
 }
 else if (document.getElementById('case2').className == "player2f" && document.getElementById('case5').className == "player2f" && document.getElementById('case8').className == "player2f"){
   win2 = true;
 }
 if (win2 == true) {
   document.getElementById("affichframboise").style.visibility ="visible";
   document.getElementById('TryA').style.visibility = "visible";
 }
}

/********************FONCTION RESET ******************/
/*
function resetButton() {
var matchNull = true;

if (win1 == TRUE) {

}

if (win2 == TRUE)

match null false

}

*/
