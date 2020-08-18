import React, { Component } from 'react'
import './Nav.css'
import logo from './Images/footerLogo.png'

export class Nav extends Component {
    render() {
        return (
            <div className="nav-bar">
                <img className="nav-bar-logo" src={logo}></img>
                <ul className="nav-bar-list">
                    <a href="">HOME</a>
                    <a href="">ABOUT</a>
                    <a href="">EVENT</a>
                    <a href="">PROJECTS</a>
                    <a href="">TEAM</a>
                </ul>
            </div>
        )
    }
}

export default Nav
