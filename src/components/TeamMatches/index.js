// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    recentatches: '',
    latestMatch: '',
    teamBannerImg: '',
    bgClass: '',
  }

  componentDidMount() {
    this.getTeamStats()
  }

  getTeamStats = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const rLatestMatchDetails = data.latest_match_details
    const rRecentMatches = data.recent_matches
    const teamBannerUrl = data.team_banner_url

    const formatedLatestMatchDetails = {
      umpires: rLatestMatchDetails.umpires,
      result: rLatestMatchDetails.result,
      manOfTheMatch: rLatestMatchDetails.man_of_the_match,
      date: rLatestMatchDetails.date,
      competingTeam: rLatestMatchDetails.competing_team,
      competingTeamLogo: rLatestMatchDetails.competing_team_logo,
      firstInngins: rLatestMatchDetails.first_innings,
      secondInnings: rLatestMatchDetails.second_innings,
      id: rLatestMatchDetails.id,
      matchStatus: rLatestMatchDetails.match_status,
      venue: rLatestMatchDetails.venue,
    }

    const formattedRecentMatches = rRecentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      date: eachMatch.date,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInngins: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      id: eachMatch.id,
      matchStatus: eachMatch.match_status,
      venue: eachMatch.venue,
    }))

    this.setState({
      recentatches: formattedRecentMatches,
      latestMatch: formatedLatestMatchDetails,
      teamBannerImg: teamBannerUrl,
      bgClass: id,
      isLoading: false,
    })
  }

  render() {
    const {
      isLoading,
      latestMatch,
      recentatches,
      teamBannerImg,
      bgClass,
    } = this.state

    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`teamMatches-bg ${bgClass}`}>
            <img className="teamBanner" src={teamBannerImg} alt="team banner" />
            <p className="teamMatches-lm">Latest Matches</p>
            <LatestMatch latestMatch={latestMatch} />
            <div>
              <ul className="match-card-container">
                {recentatches.map(eachMatch => (
                  <MatchCard key={eachMatch.id} recentatches={eachMatch} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
