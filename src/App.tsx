import { useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [squares, setSquares] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<string>("X");

  const checkWin = (player: string) => {
    // check rows
    for (let i = 0; i < 3; i++) {
      if (
        squares[i][0] === player &&
        squares[i][1] === player &&
        squares[i][2] === player
      ) {
        return true;
      }
    }

    // check columns
    for (let i = 0; i < 3; i++) {
      if (
        squares[0][i] === player &&
        squares[1][i] === player &&
        squares[2][i] === player
      ) {
        return true;
      }
    }

    // check diagonals
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

  const handleClick = (i: any) => {
    const newSquares = squares.slice();
    newSquares[Math.floor(i / 3)][i % 3] = currentPlayer;
    setSquares(newSquares);
    if (checkWin(currentPlayer)) {
      alert(`Player ${currentPlayer} wins!`);
      return;
    }
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
