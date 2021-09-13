import React from 'react'
import style from '../ElementBar/ElementBar.module.css'

function ElementBar({data}) {

    return (

        <div>
                
            <div className={style.box}>
                <div className={style.icon}>{data.icon}</div>
                <p className={style.txt}>{data.txt}</p>
            </div>

        </div>
        
    )
} 

export default ElementBar

