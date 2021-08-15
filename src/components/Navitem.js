import React, {useState} from 'react'
import {BsPeopleCircle } from 'react-icons/bs'
export default function Navitem() {
   const [open,setOpen] = useState(false)
   console.log(open)
    return (
        <li className="profile-icon">
           <a href="#" className="icon-button" onClick={()=> setOpen(!open)}><BsPeopleCircle/></a> 
        </li>
    )
}
