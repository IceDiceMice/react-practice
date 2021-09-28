import React from 'react'

export default function Sex(props) {
    const handleClick = (e)=>{
        e.stopPropagation();
        if(props.sex === 'Female') {
            props.setSex('Male')
        }
        else if(props.sex === 'Male') {
            props.setSex('Female')
        }
        props.setActive(!props.active);
    }

    return (
        <div className={props.classname}>
            <ul>
                <li onClick={handleClick}>Male</li>
                <li onClick={handleClick}>Female</li>
            </ul>
        </div>
    )
}