import React from 'react'
import ElementBar from '../ElementBar/ElementBar'
import style from './NavBar.module.css'
import {icons} from '../../data-base/dataicon'

function NavBar() {

    return (
        
        <div className={style.navigator}>

            {
                icons.map((element, index) => <ElementBar key={index} data={element} />)
            }

        </div>
    )
}


export default NavBar
