import { Link } from 'gatsby'
import React from 'react'

import logo from '../assets/images/icon-85px.png';

const Footer = props => (
  <footer id="footer">
    <section>
    <span className="logo"><img src={logo} alt="" /></span>
        <h1>Association of Holistic Development of Children</h1>
        <p>A Non-Profit Organisation</p>
    </section>
    {/* <section>
      <h2>Our Vision</h2>
      <p>
      When poverty and lack of effective execution of welfare policies combine, the worst sufferers
are always children. With the most vital growing period, both physiological and psychological,
seriously hampered, this takes away from children the ability to ever function as a capable
adult. One can see this as a slow, indirect process of creating a large population of disabled
adults. Hence, it becomes imperative to address the issues concerning the holistic
development of children with utmost gravity. Association for Holistic Development of
Children is dedicated to ensure standard livelihood and development conditions to children
across India.
      </p>
      <ul className="actions">
        <li>
          <Link to="/" className="button">
            Home
          </Link>
        </li>
      </ul>
    </section> */}
    <section>
      <h2>Registration</h2>
      <dl className="alt">
        <dt>Registration</dt>
        <dd>Registration No. S-1960/Distt. North East/ 2019</dd>
        <dt>Address</dt>
        <dd>House No. 2271, 3rd Floor, Street No. 23, New Mustafabad,Delhi- 110094</dd>
        <dt>Phone</dt>
        <dd>9999060714, 9958310458, 9968990079</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:contactus@ahdcindia.org">contactus@ahdcindia.org</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/AHDCindia"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/AHDCindia/" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ahdcindia/" className="icon fa-instagram alt">
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
    </section>
    <p className="copyright">
      &copy; AHDC. Design: <a href="">Neha Dwivedi</a>.
    </p>
  </footer>
)

export default Footer
