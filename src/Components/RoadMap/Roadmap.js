import React from 'react'
import HeroRoadmap from './HeroRoadmap'
import January from './January'
// import FebruaryAccordion from './FebruaryAccordion'
// import MarchAccordion from './MarchAccordion'
import February from './February'
import March from './March'
import April from './April'
import May from './May'
import June from './june'
import July from './July'
import August from './August'
import September from './September'
import October from './October'
import November from './November'
import Defi from './Defi'
import Infra from './Infra'
import Marketing from './Marketing'
import Wallet from './Wallet'
import Footer from '../About/Footer'
import FooterBottom from '../About/FooterBottom'

const Roadmap = () => {
  return (
    <div>
        <HeroRoadmap />
        <January />
        <February />
        <March />
        <April />
        <May />
        <June />
        <July />
        <August />
        <September />
        <October />
        <November />
        <Defi />
        <Infra />
        <Marketing />
        <Wallet />
        <Footer />
        <FooterBottom />
    </div>
  )
}

export default Roadmap