import React from 'react'
import { Link } from 'react-router-dom'
export default function navbar() {
    return (
        <div style={{boxShadow: '2px 2px 1px -2px white', backgroundColor: '#DC3545'}}>
            <Link to="/"><h2 className="text-white font-weight-bold px-3 py-2 d-inline-block"><i className="fas fa-cut"></i>Cut it Off !</h2></Link>
            <h6 className="text-white float-right mt-3 mr-2 px-3 py-1 d-inline-block font-weight-bold"><Link style={{ textDecoration: 'none', color: 'white' }} to="/about">About Us</Link></h6>
            <h6 className="text-white float-right mt-3 mr-2 px-3 py-1 d-inline-block font-weight-bold"><Link style={{ textDecoration: 'none', color: 'white' }} to="/news">News Briefs</Link></h6>
        </div>
    )
}
