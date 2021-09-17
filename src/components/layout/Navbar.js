import React from 'react'


export default function Navbar(props) {
    return (
       <nav className="navbar">
           <div className="navbar-nav" >{props.children}</div>
          
       </nav>
    )
} 
