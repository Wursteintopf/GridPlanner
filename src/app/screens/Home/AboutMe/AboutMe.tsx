import React from 'react';
import { Left, Right, SubSubTitle, Text} from "~app/screens/Home/HomeStyling";
import {AboutMeContainer} from "~app/screens/Home/AboutMe/AboutMeStyling";
import {LinkButton} from "~style/GlobalStyles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Me from '../../../../style/images/me.png';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Left>
        <SubSubTitle>About me and the tool</SubSubTitle>
        <Text>
          This is not a fancy website. In fact, this is just a small little tool to visually plan your Instagram Grid.
          I was annoyed because I couldn't find a similar, yet free tool that did this, so I just wrote my own. Thats it,
          this tool does nothing more than that. <br /><br /><br />
          You want to see how a grid that was planned with this tool could look like?<br /><br />
          <LinkButton href={"https://instagram.com/vogel_vlug"}>Just check out my Instagram <ArrowForwardIcon /></LinkButton><br /><br /><br />
          You like this tool and want to leave me a small tip for a coffee or a beer?<br /><br />
          <LinkButton href={"https://paypal.me/vogelvlug"}>You can do so via Paypal <ArrowForwardIcon /></LinkButton>
        </Text>
      </Left>
      <Right>
        <img src={Me} />
      </Right>
    </AboutMeContainer>
  );
};

export default AboutMe;