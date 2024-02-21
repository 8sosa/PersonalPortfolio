import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'

import NavBar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import Project from './Project'
import Me from './Me'
import Contact from './Contact'
import Footer from './Footer'

export default function PortfolioRouter() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path = "/" element={<Home/>} exact/>
                <Route path = "/works" element={<Projects/>} exact/>
                <Route path='/work1' element={<Project/>} exact/>
                <Route path = "/about-me" element={<Me/>} exact/>
                <Route path = "/contact-me" element={<Contact/>} exact/>
            </Routes>
            <Footer />
        </Router>
    )
}