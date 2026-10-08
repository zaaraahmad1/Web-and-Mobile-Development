import { useState } from 'react'

export default function BMICalcForm() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [error, setError] = useState('')

  function calculateBMI(e) {
    e.preventDefault()

    if (weight === '' || height === '') {
      setError('Please enter your weight and height.')
      setBmi(null)
      return
    }

    if (isNaN(weight) || isNaN(height)) {
      setError('Please enter numbers only.')
      setBmi(null)
      return
    }

    if (Number(weight) <= 0 || Number(height) <= 0) {
      setError('Weight and height must be greater than zero.')
      setBmi(null)
      return
    }

    const heightx = Number(height) / 100
    const result = Number(weight) / (heightx*heightx)

    setBmi(result)
    setError('')
  }

  function resetCalculator() {
    setWeight('')
    setHeight('')
    setBmi(null)
    setError('')
  }

  function getCategory() {
    if (bmi<18.5) {
      return 'Underweight'
    } else if (bmi<25) {
      return 'Normal weight'
    } else if (bmi<30) {
      return 'Overweight'
    } else {
      return 'Obese'
    }
  }

  return (
    <div className="calculator">
      <h1>BMI Calculator</h1>

      <form onSubmit={calculateBMI}>
        <label>
          Weight (kg)
        </label>

        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight in kg"
        />

        <label>
          Height (cm)
        </label>

        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height in cm"
        />
        {error && <p className="error">{error}</p>}
        <div className="buttons">
          <button type="submit">Calculate</button>

          <button type="button" onClick={resetCalculator}>
            Reset
          </button>
        </div>
      </form>

      {bmi !== null && (
        <div className="result">
          <h2>Your BMI: {bmi.toFixed(1)}</h2>
          <p>Category: {getCategory()}</p>
        </div>
      )}
    </div>
  )
}