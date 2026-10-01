import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div className="app-layout">
      <h1>User Profiles</h1>

      <div className="profiles">

        <UserProfile
          name="Sara Jenkins"
          role="Frontend Engineer"
          age={28}
          isOnline={true}
          bio="Passionate about building responsive web applications."
          socials={{ github: '@sarah-dev', twitter: '@sarah_dev' }}
        />

        <UserProfile
          name="Alex Rivera"
          role="UI/UX Designer"
          age={32}
          isOnline={false}
          bio="Designing clean interfaces and user experiences."
          socials={{ github: '@arivera', twitter: '@arivera_design' }}
        />

        <UserProfile
          name="Chen Wei"
          role="Backend Developer"
          age={25}
          isOnline={true}
          bio="Node.js and database performance fanatic."
          socials={{ github: '@chenw', twitter: '@chen_codes' }}
        />

      </div>
    </div>
  )
}

export default App