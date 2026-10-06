import { useState } from 'react'

export default function UserForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleAgeChange(e) {
    setAge(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Name: ${name}\nAge: ${age}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Enter your age:
        <input
          type="number"
          value={age}
          onChange={handleAgeChange}
        />
      </label>

      <br />

      <input type="submit" />
    </form>
  )
}