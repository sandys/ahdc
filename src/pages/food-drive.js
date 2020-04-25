import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'


import fooddrive1 from '../assets/images/food-drive/fooddrive1.jpg'
import fooddrive2 from '../assets/images/food-drive/fooddrive2.jpg'
import fooddrive3 from '../assets/images/food-drive/fooddrive3.jpg'
import fooddrive4 from '../assets/images/food-drive/fooddrive4.png'


class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="AHDC Food & Ration Drives" />
        <header id="header">
        <h1>Food & Ration Drives</h1>
       
    </header>
        <div id="main">
          <section id="content" className="main">
            
            <h2>Sharam Vihar Food Drive September 2019</h2>

            
            <p>To distribute hundred raton-kits to the underprivileged families living in Sharam Vihar area of South-
East Delhi. Due to extreme poverty and poor literacy rate, these families are largely suscep/ble to be-
ing famished, malnourished and sick.</p>
<span className="image fit"><img src={fooddrive1} alt="" /></span>




            <h2>Venue /Community</h2>
            <p>The settlement of these families lies on the fringes of Vishwasji Sadak near Shaheen Bagh area of

South-East Delhi. The community consists of around 400 migrated families living in extremely impro-
vised condi/on. The male members of the families work either as daily labourers or garbage pickers.

The women mostly work as household help in nearby areas or join men in garbage picking. The chil-
dren mostly stay at home, looking aJer their siblings. Hardly any member of the community has ever

seen a school.</p>

<h2>Material</h2>
            <p>A total of 100 ra/on-kits, each of which included</p>
            <ul>
              <li>Rice- 5kg</li>
              <li>Flour- 5kg</li>
              <li>Pulses- 1kg</li>
              <li>Oil- 1kg</li>
              <li>Sugar- 1kg</li>
            </ul>


            <p>Food coupons had been distributed to 100 families on the basis of urgency of need. The 100 members
selected comprised mostly of widows, senior ci/zens and handicapped. </p> 
<span className="image fit"><img src={fooddrive2} alt="" /></span>

<h2>Activity</h2>
<p> The members of Associa/on for Holis/c Development of Children reach SharamVihar area, tucked

away on the fringes of Okhla, around the Shaheen Bagh area. The area lacks any form of proper, con-
crete paths. The roads are extremely bumpy and are a mix of scaDered gravels, mud puddles and soil.

The houses are temporary tent like seDlements, put together with bricks, mud, plas/c sheets and
bamboo.
The members were offered to sit in an office in the same lane. It apparently belonged to our resource
person who lives there. The staffs in the office were warm and welcoming. They humbly offered tea
and refreshments and were keen to understand and appreciate the Associa/on’s mission and help
them with any informa/on they wanted about the dwellers. They also shared the challenges they face
while working for the concerned community, which one might encounter as well, and mentored ways
to tackle them
The drive was delayed for a few hours due to transport vehicle being stuck in the traffic. Meanwhile,
the team members were warmly offered lunch by the resource person. Since the
food coupons were already distributed the day before, thus everything was set to run systematically.
The plan of action was to collect their coupons and copies of their identity card on one counter and
distribute ration kits on the other.
Once the transport arrived, the members moved to an empty plot of land where the distribution was
scheduled. A few plastic chairs and 2 wooden beds constituted the make-shiJ counters. The crowd of
ration collectors constituted mostly of women. The reason being men mostly went out during day to

find daily wage works. Despite it being uDerly humid day, the turnout was huge and the crowd was co-
operative. The collectors included many people who were either too old or handicapped. The team

members readily helped such people to carry their kits to their homes. The local community was ex-
tremely helpful and time and again offered to fill water boDles for the members while they worked in

the sun. It took about 45 minutes to an hour to distribute 50 ration kits, thanks to the systematic setup.
AJer half of the kits were distributed, there was another interruption of about 45 minutes because of a
similar problem with the transport, that was meant to carry the other half of the kits. During this break
many members from the community came requesting for a spare kit, either because they haven’t been
alloDed coupons in the current phase, or for an extended family that was in uDer need. Due to 1:1 ratio
between the alloDed coupons to ration kits, such demands could not be entertained.
Once the transport arrived, it took another 45 minutes to distribute the rest of the kits.</p>

<span className="image fit"><img src={fooddrive3} alt="" /></span>

<h2>Analysis</h2>
            <p>The distribution of ration-kits was planned to help the community members with the most basic re-
quirement- food. It was taken under consideration that a long-term help could be provided to them.

Thus raton-kits, as opposed to prepared meals, were distributed.
This distribution ensured that a hundred, middle-sized families would be fed for about a month. The

pulses, rice, flour, sugar and oil constitute the staple diet for Indian households. By selecting the bene-
TYPE TO ENTER A CAPTION.

ficiaries for the first phase of distribution on the basis of urgency of need, as opposed to random selection, helped the Association to make sure the emergencies are tackled first.</p>

<h2>Reflections:</h2>
            <p>It was found, during the activity that the reasons that contributed to the community’s impoverished
condi/on was much larger than unemployment and economic weakness.
The first apparent problem was linguistic. Since the community consisted mostly of immigrants, they
lacked fluency in the regional language. This made it difficult for them to work in the local sector,

where they belonged. Along with this, rampant illiteracy made them ignorant to reach out to the au-
thori/es for help, opening doors to bigger problems. For example, many members

of the community owned an AADHAR card, thanks to the efforts of some local social work groups,
however the cards had many technical errors from spellings to address. Understandably they never got
it corrected, because they could neither read, nor understand the possible problems they might face in
future due to it.
The second problem was poor living conditions that contributed to diseases. Since the community is
coopera/ve, larger drives like medical awareness and health-camps can be organised by community
par/cipa/on.
Rampant unemployment and dire shortage of skill-development and vocational training programmes in
the area contribute to its economic backwardness.</p>

<span className="image fit"><img src={fooddrive4} alt="" /></span>

          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
