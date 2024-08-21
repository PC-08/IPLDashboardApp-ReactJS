// Write your code here
import TeamCard from '../TeamCard'
import './index.css'

const Home = () => (
  <div className="home-bg">
    <div className="logo-container">
      <img
        className="ipl-logo"
        alt="ipl logo"
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
      />
      <h1 className="home-head">IPL Dashboard</h1>
    </div>
    <TeamCard />
  </div>
)

export default Home
