import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import Button from '../components/button/Button'
import Table from '../components/table/Table'
import Wrapper from '../components/wrapper/Wrapper'

const destinationData = {
    head: [
        'Date',
        'Destination',
        'Expected Depature Time',
        'Expected Arrival Time',
        'Car Number Plate',
        '.'
    ],
    body: [
        {
            date: '11th November 2021',
            destination: 'Nairobi - Eldoret',
            depature: '8:00am',
            arrival: '1.00pm',
            carPlate: 'KDD 345D'
        },
        {
            date: '11th November 2021',
            destination: 'Nairobi - Eldoret',
            depature: '8:00am',
            arrival: '1.00pm',
            carPlate: 'KDD 345D'
        },
        {
            date: '11th November 2021',
            destination: 'Nairobi - Eldoret',
            depature: '8:00am',
            arrival: '1.00pm',
            carPlate: 'KDD 345D'
        },
        {
            date: '11th November 2021',
            destination: 'Nairobi - Eldoret',
            depature: '8:00am',
            arrival: '1.00pm',
            carPlate: 'KDD 345D'
        }
    ]
}

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.date}</td>
        <td>{item.destination}</td>
        <td>{item.depature}</td>
        <td>{item.arrival}</td>
        <td>{item.carPlate}</td>
        <td>
            <Button
                action={`/agent?id=${item.id}`}
                content="view"
            />
        </td>
    </tr>
)

const renderLoading = () => (
    <Spinner animation="border" variant="dark"/>
)

function Destination() {
    const [loading, setLoading] = useState();

    return (
        <div>
            {/* Title */}
            <h2 className="page-header">
                Nairobi - Eldoret
            </h2>

            {/* Agents */}
            <div className="col-12">
                <div className="card">
                    <div className="card__header">
                        <Wrapper>
                            <Button
                                icon="bx bx-plus"
                                action="/addForm?type=nairobi-eldoret-trip+0"
                                content="Add Nairobi - Eldoret Trip"
                            />
                        </Wrapper>
                        
                    </div>
                    <div className="card__body">
                        {
                            loading ? (
                                <Wrapper position="center">
                                    {renderLoading()}
                                </Wrapper>
                            ) : (
                                destinationData.body.length &&
                                    <Table
                                        limit="10"
                                        headData={destinationData.head}
                                        renderHead={(item, index) => renderHead(item, index)}
                                        bodyData={destinationData.body}
                                        renderBody={(item, index) => renderBody(item, index)}
                                    />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Destination
