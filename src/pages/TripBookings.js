import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '../components/button/Button'
import Table from '../components/table/Table'
import Wrapper from '../components/wrapper/Wrapper'

const destinationData = {
    head: [
        'Client Name',
        'National Id',
        'Phone Number',
        'Email Address',
        'Tickets',
        'Ticket Numbers',
        ''
    ],
    body: [
        {
            name: 'Brian Metto',
            id: '123456789',
            phone: '0712345678',
            email: 'bmetto@gmail.com',
            tickets: 2,
            ticketNumbers: '12, 13',
            trip: 'Nairobi -Eldoret'
        },
        {
            name: 'Victor Githui',
            id: '123456789',
            phone: '0712345678',
            email: 'githuivictor@gmail.com',
            tickets: 1,
            ticketNumbers: '22',
            trip: 'Eldoret -Nairobi'
        },
        {
            name: 'Brian Metto',
            id: '123456789',
            phone: '0712345678',
            email: 'bmetto@gmail.com',
            tickets: 2,
            ticketNumbers: '12, 13',
            trip: 'Nairobi -Eldoret'
        },
        {
            name: 'Victor Githui',
            id: '123456789',
            phone: '0712345678',
            email: 'githuivictor@gmail.com',
            tickets: 1,
            ticketNumbers: '22',
            trip: 'Eldoret -Nairobi'
        }
    ]
}

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.name}</td>
        <td>{item.id}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.tickets}</td>
        <td>{item.ticketNumbers}</td>
        <td>
            <Button
                action={`/agent?id=${item.id}`}
                content="Delete"
            />
        </td>
    </tr>
)

const renderLoading = () => (
    <Spinner animation="border" variant="dark"/>
)

function TripBookings() {
    const [loading, setLoading] = useState();

    return (
        <div>
            {/* Title */}
            <h2 className="page-header">
                <Link to="">
                    <i class='bx bxs-chevron-left' ></i>
                </Link>
                
                Nairobi - Eldoret Bookings
            </h2>
            <h5 className='page-header'>11th November 2021   |   8:00am   |   KDD 345D</h5>

            {/* Agents */}
            <div className="col-12">
                <div className="card">
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

export default TripBookings
