import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'

import NavBar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import Project from './Project'
import Stickup from './Stickup'
import Me from './Me'
import Contact from './Contact'
import Footer from './Footer'
import projectData from './Projects.json';


export default function PortfolioRouter() {
    const currentProject = projectData;
    console.log(currentProject);


    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path = "/" element={<Home/>} exact/>
                <Route path = "/works" element={<Projects/>} exact/>

                {
                    currentProject.map((project, index) => (
                        <Route key={index} path={`/works${project.link}`} element={<Project project={project}/>} exact/>
                    ))
                }
                
                {/* <Route path='/Steezed' element={<Steezed/>} exact/> */}
                <Route path='/Stick-up' element={<Stickup/>} exact/>
                <Route path = "/about-me" element={<Me/>} exact/>
                <Route path = "/contact-me" element={<Contact/>} exact/>
            </Routes>
            <Footer />
        </Router>
    )
}