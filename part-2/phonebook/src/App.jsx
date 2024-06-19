import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  // const [showAll, setShowAll] = useState(true)

  // const namesToShow = showAll

  const handlePhonebookChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    const exists = persons.some(person => person.name === newName)
    if (exists) {
      alert(newName + " is already added to phonebook")
      return
    }
    
    const personRecord = {
      name: newName,
      id: persons.length+1,
    }
    setPersons(persons.concat(personRecord))
    setNewName('')
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handlePhonebookChange}
          />
        </div>
        <div>
          number: <input

        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map(person =>
            <li key={person.id}>{person.name}</li>
          )
        }
      </ul>
    </div>
  )
}

export default App