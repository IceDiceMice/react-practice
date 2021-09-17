import React from 'react'
import { BsCheck } from "react-icons/bs";
export default function Modal({active}) {
    return (
        <div className={active ? "modal-body active": "modal-body"}>
            <div className={active ? "modal-content active": "modal-content"}>
           <BsCheck className="modal-icon"/><p>Payment was succesfull</p>
            </div>
        </div>
    )
}
