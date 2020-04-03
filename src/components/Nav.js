import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['about', 'founders', 'mission', 'team', 'impact'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="about">
                    <a href="#">About Us</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="founders">
                    <a href="#">Founders Note</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="mission">
                    <a href="#">Mission</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="team">
                    <a href="#">Team</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="impact">
                    <a href="#">Impact</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
