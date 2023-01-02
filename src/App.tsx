import { useState } from "react";

import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {
  const [squares, setSquares] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<string>("X");
  const [draws, setDraws] = useState<number>(0);
  const [player1Wins, setPlayer1Wins] = useState<number>(0);
  const [player2Wins, setPlayer2Wins] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const checkWin = (player: string) => {
    for (let i = 0; i < 3; i++) {
      if (
        squares[i][0] === player &&
        squares[i][1] === player &&
        squares[i][2] === player
      ) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        squares[0][i] === player &&
        squares[1][i] === player &&
        squares[2][i] === player
      ) {
        return true;
      }
    }

    if (
      squares[0][0] === player &&
      squares[1][1] === player &&
      squares[2][2] === player
    ) {
      return true;
    }
    if (
      squares[0][2] === player &&
      squares[1][1] === player &&
      squares[2][0] === player
    ) {
      return true;
    }

    return false;
  };

  const checkDraw = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (squares[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  };

  const handleClick = (i: any) => {
    const newSquares = squares.slice();
    newSquares[Math.floor(i / 3)][i % 3] = currentPlayer;
    setSquares(newSquares);

    if (checkWin(currentPlayer)) {
      if (currentPlayer === "X") {
        setPlayer1Wins(player1Wins + 1);
      } else {
        setPlayer2Wins(player2Wins + 1);
      }
      setGameOver(true);
      return;
    }

    if (checkDraw()) {
      setDraws(draws + 1);
      setGameOver(true);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleContinue = () => {
    setSquares([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayer("X");
    setGameOver(false);
  };

  return (
    <div className="game">
      <ScoreBoard
        player1Wins={player1Wins}
        player2Wins={player2Wins}
        draws={draws}
      ></ScoreBoard>
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} gameOver={gameOver} />
      </div>
      {gameOver && (
        <div className="game-over-popup unblur">
          <div>Game over</div>
          <button onClick={handleContinue} className="continue-btn">Continue</button>
        </div>
      )}
    </div>
  );
};

export default App;
