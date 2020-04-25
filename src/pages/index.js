import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Imran from '../assets/images/Imran.jpg'
import Hashim from '../assets/images/Hashim.jpg'

import note1 from '../assets/images/note1.jpg'
import note2 from '../assets/images/note2.jpg'
import note3 from '../assets/images/note3.jpg'

import photo1 from '../assets/images/photo1.jpg'

import m1 from '../assets/images/m1.jpg'
import m2 from '../assets/images/m2.jpg'
import m3 from '../assets/images/m3.jpg'
import m4 from '../assets/images/m4.jpg'

import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Association of Holistic Development of Children" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="about" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Us</h2>
                </header>
                <p>
                When poverty and lack of effective execution
                of welfare policies combine, the worst
                sufferers are always children. With the most
                vital growing period, both physiological and
                psychological, seriously hampered, this takes
                away from children the ability to ever
                function as a capable adult. One can see this
                as a slow, indirect process of creating a large
                population of disabled adults. Hence, it
                becomes imperative to address the issues
                concerning the holistic development of
                children with utmost gravity. Association for
                Holistic Development of Children is dedicated
                to ensure standard livelihood and
                development conditions to children across
                India.

                </p>
                <p>
                We are a registered organisation under the
                Societies Registration Act XXI of 1860
                </p>
                <p>
                Registration No. S-1960/ Distt. North East/2019
                </p>
                {/* <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul> */}
              </div>
              <span className="image">
                <img src={photo1} alt="" />
              </span>
            </div>
          </section>

          <section id="founders" className="main special">
          <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Founders Note</h2>
                </header>
                <p>Where we come from- Mustafabad in North East Delhi, it becomes difficult to get a sense of
direction or clarity of way ahead.</p>
<p>Our single minded aim behind starting AHDC was to help alleviate the conditions of the area we
were born and brought up in. To help with its development and progress. We have studied social
work and so it is an added responsibility on us to work in areas which are largely inaccessible to
people from outside due to various constraints. We have assessed various areas of Delhi and
came to realise that our own region is one of the most backward and underdeveloped.</p>
<p>When we finished our schooling and stepped out of our neighbourhoods into the world, we realised
how things were so different outside. We studied journalism in college and that’s when we
understood our rights and responsibilities. We could see how we had been living up until that
moment and how we should be living. After college we worked in journalism and events but always
felt something was missing. We then started our own digital news portal hindigazette.com with a
mission to carry news in Hindi &amp; Urdu to underdeveloped areas. The portal continues to be
operative with a dedicated team of contributors and journalists.</p>
<p>It was when we were pursuing our Masters in Early Child Development From Jamia Milia Islamia
University that we realised that our own area in Delhi was lacking in every single facility needed for
child development. That’s when we decided to take this up in an organised way and founded
AHDC. Even before the organisation got registered in 2019, we worked on the ground for more
than year, organising camps, talking to people about the benefits of facilities of child development
and so on. We collected feedback and data from various elders and stakeholders of the area,
women and young girls as well. We kept ‘holistic development’ as the centre of our mission with
the aim of getting Mustafabad at par with other more developed areas of Delhi.</p>
<p>Our mission is to build a better tomorrow, a more equipped next generation. A generation that can
claim every opportunity to build a better more productive lives for themselves. There is no dearth of
potential in this area- the children are bright but need facilities for growth, equal opportunity and a
bit of guidance. We want to implement international standards of development in our area. Every
single child should get physical, cognitive, social, emotional and language development.</p>
<p>We understand that for this to happen we have to work closely at the grass roots level because
unless the ground is ready, the mission will not take off. A lot of NGOs avoid working closely on the
ground in areas like Mustafabad. Hence we started our own organisation- an endeavour by some
of us who are from this area and want to see development in this area.</p>
                <ul className="actions">
                  <li>
                  <span className="image">
                    <img src={note1} alt="" />
                  </span>
                  </li>
                  <li>
                  <span className="image">
                    <img src={note2} alt="" />
                  </span>
                  </li>
                  <li>
                  <span className="image">
                    <img src={note3} alt="" />
                  </span>
                  </li>
                </ul>
              </div>
              
              
            </div>
          </section>

          
          <section id="mission" className="main special">
            <header className="major">
              <h2>Mission</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-bullhorn"></span>
                <h3>Spread Awareness</h3>
                <p>
                <p>- Run awareness campaigns among children in various government and private schools
and institutions about the perils of drug abuse, sexual harassment, hygiene,
sanitization.</p>
                <p>- Sensitize communities against the evils of child labor and child marriage and help them
develop strategies to avoid and battle them.</p>
                <p>
                Connect expecting mothers to pregnancy awareness and care programs to ensure proper pre-
natal and post-natal development of infants.
                </p>
                <p>
                Run awareness campaigns among young girls on proper menstrual hygiene and
encourage body positivity.
                </p>
                
                  
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-handshake-o"></span>
                <h3>Provide guidance &amp; skill training</h3>
                <p>
                Provide career guidance sessions to students of class 10 &amp; 12 to help them select proper career
paths according to their aptitude and interests and enable them to harness available resources
and opportunities in that area.

                </p>
                <p>
                Provide vocational and life skill training to mid-teenage children in order to make them
self sufficient.

                </p>
                <p>
                Train and encourage children to seek counselling-related help from authorities. We aim
to break the taboos around mental health and disorders in the country- a major reason
behind high suicide rates in children in India.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-paste"></span>
                <h3>Documentation</h3>
                <p>
                To ensure proper documentation of the families and the children like AADHAR, PAN card, ration
card, birth certificates, school certificates, etc. It is often seen that children and their families are
cut off from the welfare schemes due to faulty or incomplete documentations. This step would
ensure that the individuals and the families get the sponsored care that they deserve.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">

                <li> 
                  <span className="image">
                    <img src={m1} alt="" />
                  </span>
                </li>

                <li> 
                  <span className="image">
                    <img src={m2} alt="" />
                  </span>
                </li>
                <li> 
                  <span className="image">
                    <img src={m3} alt="" />
                  </span>
                </li>
                <li> 
                  <span className="image">
                    <img src={m4} alt="" />
                  </span>
                </li>
              </ul>
            </footer>
          </section>

          <section id="team" className="main special">
            <header className="major">
              <h2>Team</h2>
              AHDC India was founded by Jamia alum Imran &amp; Hashim, and run by a dedicated
core team of members.
            </header>
            <ul className="features">
              <li>
              <span className="image">
                <img src={Imran} alt="" />
              </span>
                <h3>Imran</h3>
                <p>
                Journalism Graduate- Bhimrao Ambedkar College, Delhi University
Masters in Early Childhood Development and Research- Jamia Millia Islamia
                </p>
                <p>Pursuing diploma in International Human Rights, Humanitarian and
Refugee law from ISIL(Indian Society of International Law)</p>
                <p><i>“No one should have the copyright on
development. That was the idea behind founding
AHDC in Mustafabad- the place where I come
from and the place which needs it a lot. Our
single minded mission is to facilitate the
evolution of a more equal and developed society
in this area.”</i></p>
              </li>
              <li>
              <span className="image">
                <img src={Hashim} alt="" />
              </span>
                <h3>Hashim</h3>
                <p>
                Journalism Graduate- Bhimrao Ambedkar College, Delhi University
Masters in Early Childhood Development and Research- Jamia Millia Islamia
                </p>
                <p><i>“It is my dream that every child in the area
where I come from gets a fair chance of growth
and development. I was inspired by my people
to strive for higher education and now I want to
create the same opportunity for the next
generation of Mustafabad. "</i></p>
              </li>

            </ul>
            {/* <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer> */}
          </section>

          <section id="impact" className="main special">
            <header className="major">
              <h2>Impact & Campaigns</h2>
              <p>
              AHDC India has successfully conducted these drives & projects.
              </p>
            </header>
            <ul className="statistics">

            <li className="style2">
                {/* <span className="icon fa-folder-open-o"></span> */}
                <a href="/covid-ration"><strong>COVID Ration </strong> Drive </a>
              </li>
              <li className="style5">
                {/* <span className="icon fa-diamond"></span> */}
                <a href="/riots-rehab-drive"><strong>NE Delhi Pogrom 2020 Rehab </strong> Drive </a>
              </li>
              <li className="style4">
                {/* <span className="icon fa-laptop"></span> */}
                <a href="/food-drive"><strong>Food </strong> Drive </a>
              </li>
              
              <li className="style3">
                {/* <span className="icon fa-signal"></span> */}
                <a href="/blanket-drive"><strong>Blanket </strong> Drive </a>
              </li>
              
                <li className="style1">
                {/* <span className="icon fa-code-fork"></span> */}
                <a href="/cloth-drive"><strong>Clothes </strong> Drive </a>
                </li>
              




            </ul>
            {/* <p className="content">
              SSS elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p> */}
            <footer className="major">
              <ul className="actions">
                {/* <li>
                  <Link to="/cloth-drive" className="button">
                    Learn More
                  </Link>
                </li> */}
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
