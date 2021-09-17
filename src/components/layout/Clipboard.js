import React from 'react'
import { BsCheck } from "react-icons/bs";
export default function Clipboard(props) {
    return (
        <div className={props.move ? "clipboard-body active": "clipboard-body"}>
            <div className='clipboard-line'></div>
            <BsCheck className='clipboard-icon'/>
            Copied to Clipboard
        </div>
    )
}

