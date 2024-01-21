startGameBtn.addEventListener("click", () =>{
    modal.style.display = "flex";
    addSquareClick();
  });
  
  const form = document.querySelector("form");
  form.addEventListener("submit", (event)=>{event.preventDefault();
      restartGame();

  const player1input = document.getElementById("player1").value.trim().toLowerCase();
  const player2input = document.getElementById("player2").value.trim().toLowerCase();

  const player1inputCap = player1input.charAt(0).toUpperCase() + player1input.slice(1);
  const player2inputCap = player2input.charAt(0).toUpperCase() + player2input.slice(1);

  players.playerOne.name =player1inputCap;
  players.playerTwo.name =player2inputCap;
  nextPlayer=player1inputCap;

  document.getElementById("info__player__name1").innerHTML = players.playerOne.name;
  
  document.getElementById("info__player__name2").innerHTML = players.playerTwo.name;

  players.playerOne.wins = 0;
  players.playerTwo.wins = 0;
  updateScores();

  infoText.innerHTML = `${players.playerOne.name}'s turn to start`
  modal.style.display = "none";
  startGameBtn.innerHTML = "Restart Game"
  
})    
 

startGame();