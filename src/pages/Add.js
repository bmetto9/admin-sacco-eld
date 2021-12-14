import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { Link } from 'react-router-dom';
import Wrapper from '../components/wrapper/Wrapper';
import Form from '../components/form/Form';

const renderAddForm = (item, index) => (
    <React.Fragment key={index}>
        <div className="placeholder">
            {
                item.type === "input" ? `${item.placeholder}` : `${item.groupLabel}` &&
                item.type === "description" ? `${item.placeholder}` : `${item.groupLabel}`
            }
        </div>
        <div 
            className={`${item.type === "input" || "dropdown" ? "input" : ""} ${item.type === "description" ? "description" : "" }`}
        >
            
            {
                item.type === "input" ? (
                    <input
                        required
                        type="text"
                        placeholder={item.placeholder}
                        value={item.stateValue}
                        onChange={item.onChange}
                    />
                ):(<></>) &&
                item.type === "dropdown" ? (
                    <select name={item.name} id={item.id}>
                        <optgroup label={item.groupLabel}>
                            {
                                item.values.map((value, index) => (
                                    <option key={index} value={value.val}>
                                        {value.placeholder}
                                    </option>
                                ))
                            }
                        </optgroup>
                    </select>
                ):(<></>) &&
                item.type === "description" ? (
                    <textarea 
                        id="projectDescription"
                        required
                        type="text"
                        placeholder={item.placeholder} 
                        rows="10" 
                        cols="50"
                        value={item.description}
                        onChange={item.onChange}
                    />
                ) : (<></>)
            }
        </div>
    </React.Fragment>
    
)

function Add() {
    const [addFormType, setAddFormType] = useState();

    //Add Trip
    const [date, setDate] = useState();
    const [destination, setDestination] = useState();
    const [depatureTime, setDepatureTime] = useState();
    const [arrivalTime, setArrivalTime] = useState();
    const [carPlate, setCarPlate] = useState();
    const [cost, setCost] = useState();

    //Add Car
    const [driverName, setDriverName] = useState();
    const [numberPlate, setNumberPlate] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        const { type } = queryString.parse(window.location.search);
        setAddFormType(type)
    }, []);

    const addTripInputData = [
        {
            type: 'input',
            placeholder: 'Date',
            value: date,
            onChange: e => setDate(e.target.value)
        },
        {
            type: 'dropdown',
            name: 'Destination',
            id: 'Destination',
            groupLabel: 'Destination',
            values: [
                {
                    val: 'nairobiNakuru',
                    placeholder: 'Nairobi - Nakuru'
                },
                {
                    val: 'nakuruNakuru',
                    placeholder: 'Nakuru - Nairobi'
                }
            ],
            onChange: (e) => setDepatureTime(e.target.value)
        },
        {
            type: 'input',
            placeholder: 'Depature Time',
            value: depatureTime,
            onChange: e => setDepatureTime(e.target.value)
        },
        {
            type: 'input',
            placeholder: 'Arrival Time',
            value: arrivalTime,
            onChange: e => setArrivalTime(e.target.value)
        },
        {
            type: 'dropdown',
            name: 'Car',
            id: 'Car',
            groupLabel: 'Car',
            values: [
                {
                    val: 'kdd345D',
                    placeholder: 'KDD 345D'
                },
                {
                    val: 'kdb555B',
                    placeholder: 'KDB 555B'
                }
            ],
            onChange: (e) => setCarPlate(e.target.value)
        },
        {
            type: 'input',
            placeholder: 'Cost',
            value: cost,
            onChange: e => setCost(e.target.value)
        }
        
    ]

    const handleAddTripForm = () => {}

    const addCarInputData = [
        {
            type: 'input',
            placeholder: 'Driver Name',
            value: driverName,
            onChange: e => setDriverName(e.target.value)
        },
        {
            type: 'input',
            placeholder: 'Number Plate',
            value: numberPlate,
            onChange: e => setNumberPlate(e.target.value)
        },
        {
            type: 'input',
            placeholder: 'Phone Number',
            value: phone,
            onChange: e => setPhone(e.target.value)
        },
        {
            type: 'input',
            placeholder: 'Email Address',
            value: email,
            onChange: e => setEmail(e.target.value)
        }
        
    ]

    const handleAddCarForm = () => {}

    return (
        <div>
            <h2 className='page-header'>
                <Link to={addFormType === 'trip' ? '/destination' : '/'  && addFormType === 'car' ? '/car-list' : '/'}>
                    <i class='bx bx-chevron-left'></i>
                </Link>
                {
                    addFormType === 'trip' ? 'Add Trip' : 'Add Form' && addFormType === 'car' ? 'Add Car' : 'Add Form'
                }
            </h2>

            <Wrapper position="center">
                <div className='card'>
                    <Form
                        formInputData={addFormType === 'trip' ? addTripInputData : [] && addFormType === 'car' ? addCarInputData : []}
                        renderForm={(item, index) => renderAddForm(item, index)}
                        buttonContent={addFormType === 'trip' ? 'Add Trip' : 'Add Button' && addFormType === 'car' ? 'Add Car' : 'Add Button'}
                        handleForm={addFormType === 'trip' ? handleAddTripForm : 'Form Handler' && addFormType === 'car' ? handleAddCarForm : ''}
                    />
                </div>
            </Wrapper>
        </div>
    )
}

export default Add
