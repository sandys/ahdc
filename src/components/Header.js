import React from 'react'

import logo from '../assets/images/icon-85px.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Stellar</h1>
        <p>Just another free, fully responsive site template<br />
        design by <a href="https://html5up.net">HTML5 UP</a>.</p>
    </header>
)

export default Header
