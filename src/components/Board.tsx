import "../App.css";

const Square = ({ value, onClick, gameOver }: any) => {
  return (
    <button className="square" onClick={onClick} disabled={gameOver}>
      {value || ""}
    </button>
  );
};
const Board = ({ squares, onClick, gameOver }: any) => {
  const renderSquare = (i: any) => {
    return (
      <Square
        value={squares[Math.floor(i / 3)][i % 3]}
        onClick={() => onClick(i)}
        gameOver={gameOver}
      />
    );
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
