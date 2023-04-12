import React from "react"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>

            <h1>welcome home</h1>
            <Link to="/RegistrationForm">Registration Form</Link><br />
            <Link to="/LoginForm">LoginForm</Link><br />
            <Link to="/ImageGallery">imagegallery</Link>
        </>
    )
}

export default Home;