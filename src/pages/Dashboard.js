import React from 'react'
import statusCardData from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Table from '../components/table/Table'
import { Link } from 'react-router-dom'

const recentBookind = {
    head: [
        'Client Name',
        'id number',
        'Phone Number',
        'Email Address',
        'Number of tickets',
        'Ticket Number',
        'Trip'
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
    <React.Fragment>
        {
            index <= 4 ? (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.id}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.tickets}</td>
                    <td>{item.ticketNumbers}</td>
                    <td>{item.trip}</td>
                </tr>
            ) : null
        }
    </React.Fragment>
    
)

function Dashboard() {

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>

            {/* Section One */}
            <div className="row">
                <div className="col-12 col-md-12 col-sm-12">
                    {/* Status Cards */}
                    <div className="row">
                        {
                            statusCardData.map((item, index) => (
                                <div className='col-6 col-md-6 col-sm-12' key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div> 
                </div>
            </div>

            {/* Section Two */}
            <div className="card">
                <div className="card__header">
                    <h3>Recent Bookings</h3>
                </div>
                <div className="card__body">
                    <Table
                        headData={recentBookind.head}
                        renderHead={(item, index) => renderHead(item, index)}
                        bodyData={recentBookind.body}
                        renderBody={(item, index) => renderBody(item, index)}
                    />
                </div>
                <div className="card__footer">
                    <Link to="/destination?final-destination=nairobi">View All</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
