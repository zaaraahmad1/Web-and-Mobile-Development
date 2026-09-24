import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function StudyStory() {

  const calculateStudyHours = (subjects, hoursPerSubject) => {
    return subjects * hoursPerSubject
  }

  const calculateBreakTime = (studyHours) => {
    return studyHours * 0.25
  }

  const calculateTotalTime = (studyHours, breakTime) => {
    return studyHours + breakTime
  }

  const checkDeadline = (daysLeft) => {
    if (daysLeft <= 2) {
      return `Only ${daysLeft} days are left. I really need to finish my work.`
    } else {
      return `I still have ${daysLeft} days, so I have some time to relax.`
    }
  }

  const studyHours = calculateStudyHours(4, 2)
  const breakTime = calculateBreakTime(studyHours)
  const totalTime = calculateTotalTime(studyHours, breakTime)

  return (
    <>
      <h2>My University Study Story</h2>

      <h2>
        I have {4} subjects to prepare for and I planned to study{' '}
      {studyHours} hours in total.
      </h2>

      <h2>
        After studying, I decided to take some breaks. My break time is{' '}
      {breakTime} hours.
      </h2>

      <h2>
        Altogether, I will spend {totalTime} hours studying and taking
        breaks.
      </h2>

      <h2>
        My deadline is approaching. {checkDeadline(2)}
      </h2>

      <h2>
        {`If I stay focused, I can finish everything before the deadline.`}
      </h2>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StudyStory />
  </StrictMode>,
)