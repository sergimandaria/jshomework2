const gameTable = document.querySelector(".grid-container")
const griditem = document.querySelectorAll(".griditem")
const windowdisplay =document.querySelector(".windowdisplay")
const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")

let Xturn= true;
let Otunr = false;

 


 for (let i = 0; i < griditem.length; i++) {
  griditem[i].addEventListener('click', () => {
   
  
    if (Xturn) {
        if (griditem[i].textContent != "O") {
        griditem[i].textContent = "X"
        Xturn = false;
        Otunr = true;
    }
    }
   else {
     if (griditem[i].textContent != "X") {
        griditem[i].textContent = "O"
        Xturn = true;
        Otunr = false;
    }
   }

 

   if (griditem[0].textContent === "X" && griditem[1].textContent === "X"
     && griditem[2].textContent === "X" ) {

      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player1.style.display = "block"

    }
    if (griditem[3].textContent === "X" && griditem[4].textContent === "X"
     && griditem[5].textContent === "X" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player1.style.display = "block"
    }
    if (griditem[6].textContent === "X" && griditem[7].textContent === "X"
     && griditem[8].textContent === "X" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player1.style.display = "block"
    }
    if (griditem[0].textContent === "X" && griditem[3].textContent === "X"
     && griditem[6].textContent === "X" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player1.style.display = "block"
    }
    if (griditem[1].textContent === "X" && griditem[4].textContent === "X"
     && griditem[7].textContent === "X" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player1.style.display = "block"
    }
    if (griditem[2].textContent === "X" && griditem[5].textContent === "X"
     && griditem[8].textContent === "X" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player1.style.display = "block"
    }
    if (griditem[0].textContent === "X" && griditem[4].textContent === "X"
     && griditem[8].textContent === "X" ) {
     gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player1.style.display = "block"
    }
    if (griditem[2].textContent === "X" && griditem[4].textContent === "X"
     && griditem[6].textContent === "X" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player1.style.display = "block"
    }



    if (griditem[0].textContent === "O" && griditem[1].textContent === "O"
     && griditem[2].textContent === "O" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player2.style.display = "block"

    }
    if (griditem[3].textContent === "O" && griditem[4].textContent === "O"
     && griditem[5].textContent === "O" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player2.style.display = "block"
    }
    if (griditem[6].textContent === "O" && griditem[7].textContent === "O"
     && griditem[8].textContent === "O" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player2.style.display = "block"
    }
    if (griditem[0].textContent === "O" && griditem[3].textContent === "O"
     && griditem[6].textContent === "O" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player2.style.display = "block"
    }
    if (griditem[1].textContent === "O" && griditem[4].textContent === "O"
     && griditem[7].textContent === "O" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player2.style.display = "block"
    }
    if (griditem[2].textContent === "O" && griditem[5].textContent === "O"
     && griditem[8].textContent === "O" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player2.style.display = "block"
    }
    if (griditem[0].textContent === "O" && griditem[4].textContent === "O"
     && griditem[8].textContent === "O" ) {
     gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player2.style.display = "block"
    }
    if (griditem[2].textContent === "O" && griditem[4].textContent === "X"
     && griditem[6].textContent === "O" ) {
      gameTable.style.display = "none";
      windowdisplay.style.display = "block";
      player2.style.display = "block"
    }
     
  });
  console.log(griditem[1])
  
  
  

}

 

  