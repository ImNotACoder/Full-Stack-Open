import { useState, useEffect } from 'react'
import axios from 'axios'
import {Filter, Form, Persons} from './components/Component.jsx'

const App = () => {


  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

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



  const fields = [
    {
      label: "name",
      value: newName,
      handleChange: handleNameChange,
    },
    {
      label: "number",
      value: newNumber,
      handleChange: handleNumberChange,
    }
  ]


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter}
              onChange={handleFilterChange}
              label="filter shown with "
      />
      <h2> Add a new </h2>
      <Form fields={fields} addName={addName}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App