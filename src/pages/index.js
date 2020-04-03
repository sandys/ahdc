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
                <p>
                हम जिस जगह से आते हैं वहाँ direction बहुत कमी से मिलता है AHDC शरु करने का
मक़सद सिर्फ़ इतना है की हम जहाँ पैदा हुए, जहाँ रहे वहाँ का विकास होना चाहिए, हमने
सोशल वर्क पढ़ा इसलिए हमारी ज़िम्मेदारी बढ़ जाती है की हम उस हिस्से में काम करें जहाँ
ज़्यादा लोग नही पहुँच पाते। हमने दिल्ली के कई जगह का आँकलन किया तो पाया कि जहाँ
हम रहते हैं वही सबसे पिछड़ा हुआ है।

                </p>
                <p>
                बचपन से स्कूल ख़त्म होने तक कुछ भी अलग महसूस नही होता था क्योंकि इलाक़े से बाहर
जाना नही होता था लेकिन जैसे ही कॉलेज में गए सब अजीब लगने लगा, सब बदला बदला
सा लगने लगा, फिर पत्रकारिता में अपने अधिकारों के बारे में पढ़ा तो जाना की हम कैसे जी
रहे हैं और वास्तव me कैसे जीना चाहिए। मैंने पत्रकारिता पढ़ते पढ़ते कई जगह इवेंट किये,
परतकारित पूरी की तो कई जगह जॉब का देखा लेकिन कहीं भी satisfaction नही मिला,
उसके बाद ख़ुद का न्यूज़ पोर्टेल hindigazette.com शुरू किया।


                </p>
                <p>
                जामिया में ECD पढ़ते हुए जाना की बच्चों के विकास के लिए जो सारी चीज़ें ज़रूरी हैं हमारे
इलाक़े में शायद एक भी follow नही होती। इसके बाद हमने इस काम को organise way में
करने की सोची और ahdc वजूद में आयी, ahdc रेजिस्टर्ड से पहले भी हम एक साल ऐसे ही
ज़मीन पर काम करते रहे... लोगों को समझने की कोशिश करते रहे की किस तरह से
मुस्तफ़ाबाद में काम होना चाहिए और क्या क्या किया जा सकता है। कई बुज़ुर्गों से भी मिले,
कई निजवानों, कई औरतों और लड़कियों से मिले और सबके विचार मिलकर नतीजा आया
की यहाँ हर तरह के विकास की ज़रूरत है, इसलिए हमने अपने काम में holistic approach
रखी ताकि हम सबको दिल्ली के बाक़ी हिस्सों की उस सतह पर ला सकें जहाँ बाक़ी लोग है।


                </p>
                <p>
                हम चाहते हैं आने वाली नस्ल भीड़ ना बने, productive बने। हम यह भी चाहते हैं की जो
विकास का अंतर्रष्ट्रिय मापदण्ड है वह हमारे यह पूरा होता हो। Physical, cognative,
socio-emotional, language development यह चार तरह के developlment हर बच्चे में
पूरी तरह से हों, अगर यह हो गये तो यह अपने बुढ़ापे तक सही काम करेंगे…


                </p>
                <p>हमारा मक़सद सिर्फ़ काम करना है, और ज़मीनी काम करना है जब तक हम ज़मीन नही
तैय्यार करेंगे तब तक हम काम नही कर सकते, हमने पहले कई NGO वाले लोगों से बात की
लेकिन किसी ने इस इलाक़े में आने की दिलचस्पी नही दिखाई, ahdc regsitered करने एक
वजह यह भी थी की जब कोईं नही आना चाहता तो हम ख़ुद यह organisation establish
कर देंगे..</p>
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
                <p>&quot;Development पर किसी का copyright
नही होता ना ही होना चाहिए, यही सोचकर Ahdc
को ऐसे इलाक़े में शुरू किया हैं जहाँ से हम
&#39;आते भी हैं और ज़रूरत भी है। इसका मक़सद सिर्फ़ यहाँ के
लोगों का हर तरह से विकास करना है।”</p>
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
              <h2>Impact</h2>
              <p>
              AHDC India has successfully conducted these drives & projects.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
