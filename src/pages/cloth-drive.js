import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import IMG_2126 from '../assets/images/clothes-drive/drive1/IMG_2126.jpg'
import IMG_2138 from '../assets/images/clothes-drive/drive1/IMG_2138.jpg'
import IMG_2125 from '../assets/images/clothes-drive/drive1/IMG_2125.jpg'

import clothesdrive1 from '../assets/images/clothes-drive/clothesdrive1.png'
import clothesdrive2 from '../assets/images/clothes-drive/clothesdrive2.png'
import clothesdrive3 from '../assets/images/clothes-drive/clothesdrive3.png'

import I0d1ebf26 from '../assets/images/clothes-drive/drive2/0d1ebf26-151e-4f5b-a5ae-87bae582f197.jpg'
import I7fb8030f from '../assets/images/clothes-drive/drive2/7fb8030f-c357-40af-ad03-72636ff62fd6.jpg'
import da44159d from '../assets/images/clothes-drive/drive2/da44159d-0c74-4e39-bebf-472dddd1e920.jpg'
import f26715e7 from '../assets/images/clothes-drive/drive2/f26715e7-56df-4ec0-bd7b-fc93cfe2fe4c.jpg'
class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="AHDC Clothes Distribution Drives" />
        <header id="header">
        <h1>AHDC Clothes Distribution Drives</h1>
       
    </header>
        <div id="main">
          <section id="content" className="main">
            
            <h2>AHDC has undertaken multiple clothes distribution drives for
underprivileged people.</h2>
<span className="image fit"><img src={clothesdrive1} alt="" /></span>
            <h2>Drive in association with Harf - ba - Harf Foundation in January
2020</h2>
            <p>Our aim was to distribute clothes to the underprivileged people
at Dhobi Ghat as the people living there are living in extreme
poverty. The basic aim of the drive is to provide clothes to
those people who are in need and collect clothes from those
people who are willing to donate.</p>

 
    <span className="image fit"><img src={IMG_2126} alt="" /></span>



            <h2>Venue /Community</h2>
            <p>The Dhobhi Ghat community is near Jamia Millia Islamia metro
station at Batla House. The community consists of around 1500
people and they do menial jobs for their living. The men living
are daily labourers and women are domestic workers. The
literacy rate of the community is very low and the present
youth of the community is also not going to the community.</p>

<h2>Material</h2>
            <p>Clothes for the people of all ages of the community.</p>

            <h2>Activity</h2>
            <p>The members of the community collected clothes from
different places and segregated clothes. Then members of the
AHDC met on 17-01-2020 at the Jamia Millia Islamia with the
clothes that they have collected from people. Then the
members of AHDC went to community and met people of the
HARF foundation. The drive was collaboration with Harf
Foundation. Members of both the community collected their
clothes at the school space that was being under construction
there. The members of the both the organisation started
segregating the clothes on the basic of genders. Then the
people of the community were informed about the clothe
distribution. The people gathered in front school for the clothes
distribution within 15 minutes to collect clothes. Then the
distribution of the clothes started, </p> 
<span className="image fit"><img src={clothesdrive2} alt="" /></span>

<p> the gate keeper asked 5
people to enter and the members of both the organisation
started giving clothes to people according to the age group and
gender of the people. The members took section according to
the age groups or genders and people were sent accordingly to
their clothes section and the people collected the clothes which
fitted them. Like this the members of the community collected
all the clothes according to their needs.</p>

<h2>Analysis</h2>
            <p>The members of the community were well satisfied with the
drive. Many of the people came and thanked the members of

organisation. The motive of the organisation of resource
mobilization was achieved. Many people did the packing very
nicely by providing washing detergents in them, this showed
that they not donating just for the sake rather they really want
to help people who are in need.</p>

<h2>Conclusion</h2>
            <p>The activity was systematically planned, organised, and most
importantly- in the right direction. Effort was put that the
process could be as convenient and as swift as possible for the
beneficiaries. Plans are underway to conduct the phase 2 and 3
of the campaign as soon as possible, in order to cover the
entire population of the area.
Also, since literacy is a huge problem in this community, a
future possibility would be to design campaigns that connect
the children to primary school and adults to basic adult
education program run by the Government of India and the
Delhi Government like National Adult Education Plan (NAEP).</p>

<h2>Drive in association with One Way Foundation in November
2019</h2>
            <p>Team AHDC &amp; One Way Trust got together to distribute clothes
for the underprivileged community at Shram Vihar. We
distributed clothes to approximately 200 people with donated

as well as new clothes. Most beneficiaries were children &amp;
women.</p>
<span className="image fit"><img src={clothesdrive3} alt="" /></span>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
