import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import queryString from 'query-string'
import Dashboard from '../pages/Dashboard'

function AppRouters({handleLogOut}) {
    useEffect(() => {
        const { logout } = queryString.parse(window.location.search);

        if (logout === "true") {
            handleLogOut()
        }

    }, [window.location.search])
    return (
        <React.Fragment>
            {/* <Route path="/" exact component={Dashboard}/> */}
        </React.Fragment>
        
    )
}

export default AppRouters

