import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'


import covidrationdrive1 from '../assets/images/covid-ration/covidrationdrive1.png'
import covidrationdrive2 from '../assets/images/covid-ration/covidrationdrive2.png'
import covidrationdrive3 from '../assets/images/covid-ration/covidrationdrive3.png'
import covidrationdrive4 from '../assets/images/covid-ration/covidrationdrive4.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="AHDC COVID 19 Ration Distribution" />
        <header id="header">
            <h1>COVID 19 Ration Distribution</h1>
       
        </header>
        <div id="main">
          <section id="content" className="main">
            
            <h2>Food & ration distribution drive in lockdown- March 2020- Present</h2>
            <span className="image fit"><img src={covidrationdrive1} alt="" /></span>
            
            <p>AHDC had been working on the rehabilitation of the North East Delhi 2020 pogrom sur-
vivors from Shiv Vihar, Khajoori Khas & Karawal Nagar areas when the lockdown shut out

all our activities. But the lockdown brought another very acute crisis upon the survivors
Type to enter a caption.

who had just started rebuilding their lives. They are now fighting with this medical lock-
down without food and basic essentials. There are also very many daily wagers and

labourers who are suddenly jobless and hence penny less. And they cannot fight hunger &
disease together. So AHDC is trying to reach out to as many daily wagers, labourers and
survivors in North East Delhi to help them buy ration & essentials. Food & medicines is
priority at this time and we are doing this in multiple ways with all legal permissions and
extreme precautions. We extend help in few ways:
<ul>
    <li> Pay for people’s ration at the local grocery & kirana shops via PayTM/ Phone Pe</li>
    <li> Distribute ration to localities</li>
    <li> Distribute ready-to-eat meals in localities & colonies</li>
    <li> Respond to SOS calls of ration requirements in North East Delhi</li>
</ul>
</p>
<p>
Areas covered: Mustafabad(Old & New), Shiv Vihar, Khajoori Khas, Nehru Vihar, Chand-
bagh, Noor-e-Ilahi, Bhajanpura, Moonga Nagar, Babu Nagar, Subhash Mohalla, Kar-
dampuri.
</p>
<p>
AHDC has served over 10,000 people in various areas of North East Delhi with food & ra-
tion distribution.
</p>

 
    <span className="image fit"><img src={covidrationdrive2} alt="" /></span>
    <span className="image fit"><img src={covidrationdrive3} alt="" /></span>



            <h2>REQUEST FOR DONATION</h2>
            <p>We require your support in raising money for buying ration for distribution as well as to set
up payments. Please extend your generosity and goodwill to the many underprivileged
people of North East Delhi.</p>


<span className="image fit"><img src={covidrationdrive4} alt="" /></span>


          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
