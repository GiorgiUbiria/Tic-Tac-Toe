import "../App.css";

const Square = ({ value, onClick }: any) => {
  return (
    <button className="square" onClick={onClick}>
      {value || ""}
    </button>
  );
};
const Board = ({ squares, onClick }: any) => {
  const renderSquare = (i: any) => {
    return (
      <Square
        value={squares[Math.floor(i / 3)][i % 3]}
        onClick={() => onClick(i)}
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
