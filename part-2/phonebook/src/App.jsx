import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1  }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // const namesToShow = showAll

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
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

  const personsToShow = filter 
                      ? persons.filter(person =>person.name.toLowerCase().includes(filter.toLowerCase()))
                      : persons


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with 
        <input 
        value={filter}
        onChange={handleFilterChange}
        />
      </div>
      <h2> Add a new </h2>
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
          personsToShow.map(person =>
            <li key={person.id}>{person.name} {person.number}</li>
          )
        }
      </ul>
    </div>
  )
}

export default App