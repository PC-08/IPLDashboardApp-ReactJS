// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    competingTeam,
    competingTeamLogo,
    firstInngins,
    secondInnings,
    id,
    matchStatus,
    venue,
  } = latestMatch

  return (
    <div className="latest-matches-card-1">
      <div>
        <p className="lm-head">{competingTeam}</p>
        <p>{date}</p>
        <p className="lm-para">{venue}</p>
        <p className="lm-para">{result}</p>
      </div>
      <div>
        <img
          className="lm-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr className="line" />
      <div>
        <p>First Innings</p>
        <p className="lm-para">{firstInngins}</p>
        <p>Second Innings</p>
        <p className="lm-para">{secondInnings}</p>
        <p>Man Of The Match</p>
        <p className="lm-para">{manOfTheMatch}</p>
        <p>Umpires</p>
        <p className="lm-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
