import React from 'react'

import logo from '../assets/images/icon-85px.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Association of Holistic Development of Children</h1>
        <p>A Non-Profit Organisation</p>
        <ul className="icons">
        <li>
          <a
            href="https://twitter.com/AHDCindia"
            className="icon fa-twitter alt"
            target="_blank"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/AHDCindia/" className="icon fa-facebook alt" target="_blank">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ahdcindia/" className="icon fa-instagram alt" target="_blank">
            <span className="label">Instagram</span>
          </a>
        </li>
        {/* <li>
          <a
            href="https://github.com/codebushi/gatsby-starter-stellar"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li> */}
        {/* <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li> */}
      </ul>
    </header>
)

export default Header
