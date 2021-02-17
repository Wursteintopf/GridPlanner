import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import Blob1 from "~style/blobs/Blob1";
import {Background} from "~app/screens/Home/HomeStyling";
import Blob2 from "~style/blobs/Blob2";
import CookieBox from "~app/screens/Home/CookieBox/CookieBox";
import AboutMe from "~app/screens/Home/AboutMe/AboutMe";
import Contribute from "~app/screens/Home/Contribute/Contribute";
import Legal from "~app/screens/Home/Legal/Legal";

const Home: React.FC = () => {
  return (
    <div>
      <Background>
        <Parallax y={['-1400px', '0px']}>
          <Blob1 />
          <Blob2 />
        </Parallax>
      </Background>

      <CookieBox />
      <AboutMe />
      <Contribute />
      <Legal />

    </div>

  )
}

export default Home
