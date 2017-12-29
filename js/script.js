var player= 1;
var player1 = "1";
var player2 = "2";

function play(numeroCase) {    //******la fonction placement joueurs alternés
  if (player==1) {    // SI joueur 1 (rappel variable) joue :
    document.getElementById('case'+numeroCase).classList.add("player1") ;    // il a accès direct à Id case de son choix, (=onclick HTML)
    player = 2;  // puis ce sera au tour du joueur 2                         // et place son image pré-destinée grace à : (.classlist.add qui est un rappel balise vers CSS)
  }                                                                          //;  afficher image du joueur suivant !?
  else if (player==2) {  //SINON, SI joueur 2 (rappel variable) joue :
    document.getElementById('case'+numeroCase).classList.add("player2");  // il a accès direct à Id case de son choix, (=onclick HTML)
    player = 1;  // puis ce sera au tour du joueur 1                      // et place son image pré-destinée grace à :
  }                                                                      // (.classlist.add qui est un rappel balise vers CSS)

document.getElementById('case'+numeroCase).onclick= function(play) {   //blocage onclick = impossible de changer (retour faux)
    return false
  };
}  // fermeture de la fonction play



/*
function victoire('case'+numeroCase){  //*****La fonction victoire permet de savoir qui a gagne ou perdu.

  var player= 1;
  var player1 = "1";
  var player2 = "2";

  var game = {       // table de jeu à zero - case vide
    case[0] =".";
    case[1] =".";
    case[2] =".";
    case[3] =".";
    case[4] =".";
    case[5] =".";
    case[6] =".";
    case[7] =".";
    case[8] =".";
  }

  var combinaison_victoire = ('case'+numeroCase) == player && ('case'+numeroCase) == player && ('case'+numeroCase) == player && ;

  if(true){
    var player = player1;

    (case[0] == player && case [4] == player && game[8] == player) // repère case4 = centre , comparer les lignes de victoires (pour les 2 joueurs)
    (case[2] == player && case[4] == player && game[6] == player)
    (case[1] == player && case[4] == player && game[7] == player)
    (case[3] == player && case[4] == player && game[5] == player)

    return (player2);
  }

  else (true){
    var player = player2;

    (case[0] == player && case [1] == player && game[2] == player)
    (case[0] == player && case[4] == player && game[8] == player)
    (case[0] == player && case[3] == player && game[6] == player)

    return (player1);
  }

  return (false); //Et ainsi de suite jusqu'a ce qu'il y ai un gagnant ou une égalité
}
*/




/********
var player1= document.getElementsByTagName("case0");
player1[0].innerHTML représente le contenu de la case 0 de votre tableau.  // Vous avez de 0 à 8 éléments dans le tableau
*********/





/********************affiche  qui gagne******************
var winner = "";

var winner = player1
var winner= player2
var null = false

if winner(player1) == true {
  alert document.getElementById("citron");
}

else if winner (player2) == true {
  document.getElementById("framboise");
}
*/
