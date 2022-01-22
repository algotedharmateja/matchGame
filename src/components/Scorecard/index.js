import './index.css'

const ScoreCard = props => {
  const {score, playAgainButton} = props

  const onClickPlayButton = () => {
    playAgainButton()
  }

  return (
    <div className="score-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="score-heading">YOUR SCORE</p>
      <p className="score">{score}</p>
      <button
        className="play-again-button"
        type="button"
        onClick={onClickPlayButton}
      >
        <div className="button-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p className="paly-button-head ">PLAY AGAIN</p>
        </div>
      </button>
    </div>
  )
}

export default ScoreCard
