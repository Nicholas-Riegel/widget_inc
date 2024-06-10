import React from 'react';
import { useState } from "react";
import * as WidgetServices from '../../services/WidgetService';
import './Create.css';

const CreateWidget = () => {
    const [inputWidget, setInputWidget] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    // Updates the input fields with the current state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'widget':
                setInputWidget(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }
    };

    // Creates a new widget and resets the inputs
    const handleSubmit = async (event) => {
        event.preventDefault();



        // Reset input fields
        setInputWidget('');
        setName('');
        setPrice('');
        setDescription('');
    };

    return ( 
        <div id='create-wrapper'>
            <h1 id='create-header'>Create a New Widget</h1>
            <div id='create-container'>
                <form className='add-widget' onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label><br />
                    <input
                        id='name'
                        type="text"
                        required
                        // placeholder='Name'
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="price">Price:</label><br />
                    <input
                        id='price'
                        type="number"
                        required
                        // placeholder='Price'
                        name="price"
                        value={price}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="description">Description:</label><br />
                    <input
                        id='description'
                        type="text"
                        required
                        // placeholder='Description'
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                    /><br />
                    <div className="button-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default CreateWidget;
