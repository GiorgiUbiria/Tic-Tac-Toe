type ScoreBoardProps = {
  player1Wins: number;
  player2Wins: number;
  draws: number;
};

const ScoreBoard = ({ player1Wins, player2Wins, draws }: ScoreBoardProps) => (
  <div className="scores">
    <div className="player1-score">Player 1: {player1Wins}</div>
    <div className="draws-score">Draws: {draws}</div>
    <div className="player2-score">Player 2: {player2Wins}</div>
  </div>
);

export default ScoreBoard;
