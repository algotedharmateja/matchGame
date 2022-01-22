import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <div className="header">
      <nav className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
          alt="website logo"
          className="website-logo"
        />
        <ul className="score-timer-container">
          <li className="sub-container">
            <p className="score-heading">Score:</p>
            <p className="count">{score}</p>
          </li>

          <li className="sub-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-img"
            />
            <p className="count">{timer} sec</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
