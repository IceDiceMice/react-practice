import React from 'react'
import Sidebarmenu from './Sidebarmenu'
import Navbarmenu from './Navbarmenu'
import Navitem from './Navitem'

export default function main() {
    return (
        <div>
       <Navbarmenu >
         <Navitem />
       </Navbarmenu>
      <Sidebarmenu />
        </div>
    )
}
