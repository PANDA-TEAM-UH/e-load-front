// import React from 'react'

import HomeSection from "../../components/HomeSection/HomeSection"
import HomeSectionInstructions from "../../components/HomeSectionInstructions/HomeSectionInstructions"
// // import HomeSectionInfor from "../../components/HomeSectionInfor/HomeSectionInfor"
import HomeSectionMobile from "../../components/HomeSectionMobile/HomeSectionMobile"

const Home = () => {
  return (
    <>
      <HomeSection/>
      <HomeSectionMobile/>
      <HomeSectionInstructions/>
      {/* <HomeSectionInfor/> */}

    </>
  )
}

export default Home