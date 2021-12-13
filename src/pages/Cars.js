import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '../components/button/Button'
import Table from '../components/table/Table'
import Wrapper from '../components/wrapper/Wrapper'

const destinationData = {
    head: [
        'Car Plate',
        'Driver Name',
        'Phone Number',
        'Email Address',
        ''
    ],
    body: [
        {
            carPlate: 'KDD 345D',
            driverName: 'Byron Kimani',
            phone: '0712345678',
            email: 'bkimani@gmail.com'
        },
        {
            carPlate: 'KDD 345D',
            driverName: 'Byron Kimani',
            phone: '0712345678',
            email: 'bkimani@gmail.com'
        },
        {
            carPlate: 'KDD 345D',
            driverName: 'Byron Kimani',
            phone: '0712345678',
            email: 'bkimani@gmail.com'
        },
        {
            carPlate: 'KDD 345D',
            driverName: 'Byron Kimani',
            phone: '0712345678',
            email: 'bkimani@gmail.com'
        }
    ]
}

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.carPlate}</td>
        <td>{item.driverName}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
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


function Cars() {
    const [loading, setLoading] = useState();

    return (
        <div>
            {/* Title */}
            <h2 className="page-header">
                Car List
            </h2>

            {/* Agents */}
            <div className="col-12">
                <div className="card">
                    <div className="card__header">
                        <Wrapper>
                            <Button
                                icon="bx bx-plus"
                                action="/addForm?type=car"
                                content="Add Car"
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

export default Cars
