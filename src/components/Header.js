import React from 'react'

import logo from '../assets/images/icon-85px.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Association of Holistic Development of Children</h1>
        <p>A Non-Profit Organisation.</p>
    </header>
)

export default Header
