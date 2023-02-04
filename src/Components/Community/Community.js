import React from 'react'
import Buildwithin from './Buildwithin'
import Herocommunity from './Herocommunity'
import Joincommunity from './Joincommunity'
import Youtube from './Youtube'
import Getapp from './Getapp'
import Footer from '../About/Footer'
import FooterBottom from '../About/FooterBottom'
// import JoinOurCommunity from './JoinOurCommunity'
const Community = () => {
  return (
    <div>
        <Herocommunity />
        <Joincommunity />
        {/* <JoinOurCommunity /> */}
        <Buildwithin />
        <Youtube />
        <Getapp />
        <Footer />
        <FooterBottom />
    </div>
  )
}

export default Community