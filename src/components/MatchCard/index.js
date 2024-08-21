// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentatches} = props

  const {result, competingTeamLogo, competingTeam, matchStatus} = recentatches

  return (
    <li className="rm-con">
      <img
        className="rm-img"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="rm-head">{competingTeam}</p>
      <p className="rm-para">{result}</p>
      <p className={matchStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
