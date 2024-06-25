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

const Button = ({label, type, onClick}) => {
    return (
        <div>
            <button type={type} onClick={onClick}>{label}</button>
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

const Persons = ({personsToShow, deleteField}) => {
    return (
        <ul>
            {
            personsToShow.map(person => 
                <Person
                key={person.id}
                property={person}
                deleteField={deleteField}
                />
            )
            }
        </ul>
    )
}

const Person = ({property, deleteField}) => {
    return (
        <div>
            <li>
                {property.name}  {property.number} 
                <Button 
                    type="submit"
                    label="delete"
                    onClick={() => deleteField(property.id)}
                />
            </li>
        </div>
    )
}



export {
    Filter, Form, Persons
};

