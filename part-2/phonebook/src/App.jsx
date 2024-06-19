import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1  }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  // const [showAll, setShowAll] = useState(true)

  // const namesToShow = showAll

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
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
      number: newNumber,
      id: persons.length+1,
    }
    setPersons(persons.concat(personRecord))
    setNewName('')
    setNewNumber('')
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with 
        <input 
        value={}
        />
      </div>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map(person =>
            <li key={person.id}>{person.name} {person.number}</li>
          )
        }
      </ul>
    </div>
  )
}

export default App