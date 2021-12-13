import React, { useState, useEffect, useCallback, useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './layout.css'
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'
import { Spinner } from 'react-bootstrap'
import Wrapper from '../wrapper/Wrapper'
import Form from '../form/Form'
import AppRouters from '../AppRouters'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topNav/TopNav'
import Dashboard from '../../pages/Dashboard'
import Destination from '../../pages/Destination'
import TripBookings from '../../pages/TripBookings'
import Cars from '../../pages/Cars'
import Add from '../../pages/Add'
import Profile from '../../pages/Profile'
import { AuthContext, AuthProvider } from '../../Context/Auth'
import { validEmail } from '../../helpers/RegexValidation'
import app from '../../helpers/firebaseConf'

const renderLoading = () => (
    <Spinner animation="border" variant="light"/>
)

const renderSignInForm = (item, index) => (
    <div key={index} className="input">
        {
            item.type === 'input' ? (
                <input
                    required
                    type='text'
                    placeholder={item.placeholder}
                    value={item.value}
                    onChange={item.onChange}
                />
            ) : (
                <React.Fragment>
                    <input
                        required
                        type={item.showpassword ? 'text' : 'password'}
                        placeholder={item.placeholder}
                        value={item.value}
                        onChange={item.onChange}
                    />
                    <i
                        className={`bx ${item.showPassword ? 'bxs-low-vision' : 'bxs-show'}`}
                        onClick={item.handleShowPassword}
                    />
                </React.Fragment>
            )
        }
    </div>
)

const renderForgotPasswordForm = (item, index) => (
    <div key={index} className="input">
        <input
            required
            type='text'
            placeholder={item.placeholder}
            value={item.value}
            onChange={item.onChange}
        />
    </div>
)

const renderSignInBtn = (loading) => (
    <React.Fragment>
        {
            loading ? renderLoading() : 'Sign In'
        }
    </React.Fragment>
)

const renderForgotPasswordBtn = (loading) => (
    <React.Fragment>
        {
            loading ? renderLoading() : 'Submit Email'
        }
    </React.Fragment>
)


function Layout(props) {
    const { currentUser } = useContext(AuthContext);

    const [token, setToken] = useState();
    const [loading, setLoading] = useState(false);
    const [toggle, setToggle] = useState(true);
    const [ authType, setAuthType] = useState('sign-in');
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword]= useState(false);
    const [email, setEmail] = useState();

    const [emailErr, setEmailErr] = useState(false);

    const themeReducer = useSelector(state => state.ThemeReducer);
    const dispatch = useDispatch(true);

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');
        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');

        dispatch(ThemeAction.setMode(themeClass))
        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    const handleLogOut = () => {
        setToken(false)
    }

    const handleToogleMenu = () => {
        setToggle(!toggle)
    }

    const handleSignIn = useCallback(async e => {
        e.preventDefault();

        if (!validEmail.test(email)){
            setEmailErr(true);
        } else {
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email, password);
                // setToken(true);
            } catch (error) {
                alert(error)
            }
        }
    }, [props.history])

    const handleForgotPassword = () => {
        setLoading(true)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleForgotPasswordLink = () => {
        setAuthType('forgot-password')
    }

    const handleSignInLink = () => {
        setAuthType('sign-in')
    } 

    const signInInputData = [
        {
            type: 'input',
            placeholder: 'Username',
            value: userName,
            onChange: (e) => setUserName(e.target.value)
        },
        {
            type: 'password',
            placeholder: 'Password',
            value: password,
            onChange: (e) => setPassword(e.target.value),
            showpassword: showPassword,
            handleShowPassword: handleShowPassword
        }
    ]

    const forgotPasswordInputData = [
        {
            placeholder: 'Email Address',
            value: email,
            onChange: (e) => setEmail(e.target.value)
        }
    ]

    return (
        <AuthProvider>
            <BrowserRouter>
                {
                    token === undefined ? (
                        <div className={`authentication ${themeReducer.mode} ${themeReducer.color}`}>
                            {/* Authentication Form */}
                            <Wrapper position="center">
                                <div className="card">
                                    <div className="card__head">
                                        <div className="authentication__company-logo">
                                            <img src="https://res.cloudinary.com/emacon-production/image/upload/v1638855626/samples/bus-png-30663_gul0nu.png" alt=""/>
                                        </div>
                                        <Wrapper position="center">
                                            <h2>ELDORET EXPRESS ADMIN CONSOLE</h2>
                                        </Wrapper>
                                    </div>
                                    <div className="card__body">
                                        {
                                            authType === 'forgot-password' ? (
                                                <Wrapper position='center'>
                                                    <p>
                                                        Please enter your email used to create the account to reset your password.
                                                    </p>
                                                </Wrapper>
                                            ) : null
                                        }
                                        <Form
                                            formInputData={authType === 'sign-in' ? signInInputData : forgotPasswordInputData}
                                            renderForm={
                                                authType === 'sign-in' ? 
                                                (item, index) => renderSignInForm(item, index) : 
                                                (item, index) => renderForgotPasswordForm(item, index)
                                            }
                                            buttonContent={authType === 'sign-in' ? renderSignInBtn(loading) : renderForgotPasswordBtn(loading)}
                                            handleForm={authType === 'sign-in' ? handleSignIn : handleForgotPassword}
                                        />
                                        <Wrapper position="center">
                                            <a 
                                                href="#"
                                                onClick={authType === 'sign-in' ? handleForgotPasswordLink : handleSignInLink}
                                            >
                                                {authType === 'sign-in' ? 'Forgot Password?' : 'Sign In'}
                                            </a>
                                        </Wrapper>
                                    </div>
                                </div>
                            </Wrapper>
                        </div>
                    ) : (
                        
                            
                            <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                                <Sidebar {...props} menuToggle={toggle}/>
                                <div className={`layout__content ${toggle ? "" : "toggle"}`}>
                                    <TopNav handleToggleMenu={handleToogleMenu}/>
                                    <div className="layout__content-main">
                                        <Routes>
                                            <Route path="/" exact element={<Dashboard/>}/>
                                        </Routes>    

                                        {/* <Dashboard/> */}
                                        {/* <Destination/> */}
                                        {/* <TripBookings/> */}
                                        {/* <Cars/> */}
                                        {/* <Add/> */}
                                        {/* <Profile/> */}
                                    </div>
                                </div>
                            </div>
                        
                        
                    )
                }
            </BrowserRouter>
        </AuthProvider>
        
    )
}

export default Layout
