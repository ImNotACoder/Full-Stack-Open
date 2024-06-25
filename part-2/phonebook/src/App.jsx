import { useState, useEffect } from 'react'
import axios from 'axios'
import {Filter, Form, Persons} from './components/Component.jsx'
import phonebookService from './services/phonebookrecords.js'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  // const hook = () => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/persons')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setPersons(response.data)
  //     })
  // }

  // useEffect(hook, [])

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }


  const addName = (event) => {
    event.preventDefault()
  
    const existingPerson = persons.find(person => person.name === newName)
  
    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${existingPerson.name} is already added to phonebook, replace the old number with a new one?`
      )
  
      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newNumber }
  
        phonebookService
          .update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            alert(`The person '${existingPerson.name}' was already deleted from server`)
            setPersons(persons.filter(person => person.id !== existingPerson.id))
          })
      }
    } else {
      const personRecord = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
  
      phonebookService
        .create(personRecord)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }
  

  const removeEntry = id => {
    const url = `http://localhost:3001/persons/${id}`
    const entry = persons.find(n => n.id === id)

    if(window.confirm(`Delete ${entry.name} ?`)){
      phonebookService
        .remove(id)
          .then(() => {
            setPersons(persons.filter(person => person.id !== id))
          })
    }
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
      <Persons personsToShow={personsToShow} 
      deleteField={removeEntry}/>
    </div>
  )
}

export default App