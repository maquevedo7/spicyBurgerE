import {RiShoppingCart2Fill as Cart} from 'react-icons/ri'
import {FaHome as Home} from 'react-icons/fa'
import React from 'react'
import {Link} from 'react-router-dom'
// import NavBar from '../NavBar/NavBar'
import style from '../Header/Header.module.css'


function Header() {
    return (
        <div>

            <div className={style.header}>

                <div className={style.logo}>

                    <Link to="/">
                        <Home className={style.btn}/>
                    </Link>
        
                    <Link to="/cart">
                        <Cart className={style.btn}/>
                    </Link>

                </div>

                {/* <NavBar/> */}

            </div>

            <div className={style.headerDesktop}>

                <div className={style.logo}>

                    {/* <NavBar/> */}

                    <div>

                        <Link to="/">
                            <Home/>
                        </Link>
                        <Link to="/cart">
                            <Cart className={style.cart} width="30"/>
                        </Link>

                    </div>

                </div>

            </div>         

        </div>
    )
}

export default Header