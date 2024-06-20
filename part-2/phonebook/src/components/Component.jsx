import React from 'react';

const Filter = ({label, value, onChange}) => {
    return (
        <div>
            {label}
            <input
            value={value}
            onChange={onChange} 
            />
        </div>
    );
}

const FormComponent = ({label, newItem, handle}) => {
    return (
        <div>
            {label}
            <input 
            value={newItem}
            onChange={handle}
            />
        </div>
    );
}

const Button = ({label, type}) => {
    return (
        <div>
            <button type={type}>{label}</button>
        </div>
    )
}
 

const Form = ({addName, fields}) => {

    return (
        <form onSubmit={addName}>
            {
                fields.map((field, index)=>(
                    <FormComponent key={index} 
                    label={field.label}
                    value={field.value}
                    handle={field.handleChange}/>
                ))
            }
            <Button type="submit" label="add" />
        </form>
    );
}

const Persons = ({personsToShow}) => {
    return (
        <ul>
            {
            personsToShow.map(person => 
                <li key={person.id}>{person.name}  {person.number} </li>
            )
            }
        </ul>
    )
}



export {
    Filter, Form, Persons
};

