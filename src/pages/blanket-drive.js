import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'


import blanketdrive1 from '../assets/images/blanket-drive/blanketdrive1.png'
import blanketdrive2 from '../assets/images/blanket-drive/blanketdrive2.png'
import blanketdrive3 from '../assets/images/blanket-drive/blanketdrive3.png'


class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="AHDC Blanket & Sleeping Bags Distributions Drives" />
        <header id="header">
            <h1>Blanket & Sleeping Bags Distributions Drives</h1>
            <h1>December 2019-January 2020</h1>
       
        </header>
        <div id="main">
          <section id="content" className="main">
            
            <h2>Areas: Targeted areas near hospitals like Safdarjung & AIIMS.</h2>
            <span className="image fit"><img src={blanketdrive1} alt="" /></span>
            
            <p>AHDC undertook multiple blanket distribution drives for patients and their families that sleep on
the streets outside big government hospitals like AIIMS, Safdarjung in Delhi. These are very poor
people who come from all parts of the country with a hope to get treatment but they have to live
in such harsh conditions for days.
            </p>
<p>
AHDC also conducted a sleeping bag distribution drive in collaboration with Pratyek where we
distributed sleeping bags to daily wagers, labourers, homeless & rickshaw pullers in January
2020.
</p>
<span className="image fit"><img src={blanketdrive2} alt="" /></span>
<span className="image fit"><img src={blanketdrive3} alt="" /></span>



          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
