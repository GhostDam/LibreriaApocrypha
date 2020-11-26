import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'

export const Header = () =>(
    <React.Fragment>
        <header className='header'>
            <h1 className='h1'>
                Libreria Apocrypha
            </h1>
            <div className="hamburguer">
                <div className="ham_line"></div>
                <div className="ham_line"></div>
                <div className="ham_line"></div>
            </div>
            <div className="header_content">
                <Link to="/lunatica">Lunatica</Link>
                <Link to="/">Hijos del tiempo</Link>
            </div>
        </header>
        <div className='header-fix'></div>
    </React.Fragment>
)