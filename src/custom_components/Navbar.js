import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {


    const light = {
        color: 'black',
        backgroundColor: 'white',
        border: '0.4px solid black'
    }

    const dark = {
        color: 'white',
        backgroundColor: 'black',
        border: '0.4px solid white'
    }
    
    const blue = {
        color: 'white',
        backgroundColor: 'rgb(38 26 151)',
        border: '0.4px solid white'
    }

    const pink = {
        color: 'white',
        backgroundColor: '#D75B71',
        border: '0.4px solid black'
    }

    const navBgc = (theme) => {
        if(theme === 'white'){
            return { backgroundColor : "aliceblue" } ;
        }
        else if( theme === 'black'){
            return { backgroundColor : "black" } ;
        }
        else if( theme === 'rgb(38 26 151)'){
            return { backgroundColor : "rgb(38 26 151)" } ;
        }
        else{
            return { backgroundColor : "#eb899a" } ;
        }
    }



    return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-light`} style={ navBgc(props.mode) }>
        <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                {/* <Link className="nav-link" to="/about">About</Link> */}
                </li>
            </ul>
            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            <div className="">
                <button type="button" onClick={ () => {props.toggle('white')}} className="mx-2 btn btn" style={light}>Light</button>

                <button type="button" onClick={ () => {props.toggle('black')}} className="mx-2  btn btn" style={dark}>Dark</button>
                
                <button type="button" onClick={ () => {props.toggle('rgb(38 26 151)')}} className="mx-2  btn btn" style={blue}>Blue</button>
                
                <button type="button" onClick={ () => {props.toggle('#D75B71')}} className="mx-2  btn btn" style={pink}>Pink</button>
            </div>
            {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={ props.toggle } type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div> */}
            </div>
        </div>
        </nav>
    </>
    )
}

Navbar.propTypes = {
    title : PropTypes.string
}

// Navbar.defaultProps = {
    //     title : 'React' 
    // }