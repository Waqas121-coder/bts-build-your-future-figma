import React from 'react'
import BestIdeas from './BestIdeas'
import Casestudy from './Casestudy'
import CompromiseBuild from './CompromiseBuild'
import Getting from './Getting'
import Herobuild from './Herobuild'
import Need from './Need'
import Tools from './Tools'
import Tutorial from './Tutorial'
import Footer from '../About/Footer'
import FooterBottom from '../About/FooterBottom'
const Build = () => {
  return (
    <div>
        <Herobuild />
        <CompromiseBuild />
        <Getting />
        <Casestudy />
        <BestIdeas />
        <Need />
        <Tutorial />
        <Tools />
        <Footer />
        <FooterBottom />
    </div>
  )
}

export default Build