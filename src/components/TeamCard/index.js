// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import './index.css'

const GetTeamCard = props => {
  const {name, teamImageUrl, id} = props

  return (
    <Link className="team-Card" to={`/team-matches/${id}`}>
      <li className="teamcard-2">
        <img className="teamcard-logo" alt={name} src={teamImageUrl} />
        <p className="teamcard-head">{name}</p>
      </li>
    </Link>
  )
}

class TeamCard extends Component {
  state = {isLoading: true, teamCardList: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)

    const formattedTeamList = data.teams.map(eachTeam => ({
      teamImageUrl: eachTeam.team_image_url,
      id: eachTeam.id,
      name: eachTeam.name,
    }))

    this.setState({isLoading: false, teamCardList: formattedTeamList})
  }

  render() {
    const {isLoading, teamCardList} = this.state

    if (isLoading === true) {
      return (
        <div>
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      )
    }
    return (
      <ul className="teamcard-list">
        {teamCardList.map(eachTeam => (
          <GetTeamCard
            key={eachTeam.id}
            id={eachTeam.id}
            name={eachTeam.name}
            teamImageUrl={eachTeam.teamImageUrl}
          />
        ))}
      </ul>
    )
  }
}

export default TeamCard
