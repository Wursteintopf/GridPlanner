import React from 'react';
import {Left, Right, SubSubTitle, Text} from "~app/screens/Home/HomeStyling";
import {LinkButton} from "~style/GlobalStyles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Beer from "~style/images/beer.png";
import {ContributeContainer} from "~app/screens/Home/Contribute/ContributeStyling";

const Contribute = () => {
  return (
    <ContributeContainer>
      <Left>
        <img src={Beer} />
      </Left>
      <Right>
        <SubSubTitle>You want to change anything?</SubSubTitle>
        <Text>
          There is something you dont like? There is a feature missing that you would want to have? <br /><br />
          This project is licensed unter the Beerware License (Revision 42), meaning, you can download the source code,
          you can rerun it on your own server, you can change it, you could even rewrite it to power a space shuttle.
          The only limitation is, if we meet someday and you like the project, you owe me a beer. <br /><br /><br />
          <LinkButton href={'http://github.com/Wursteintopf/GridPlanner'} >Check out the source code on github <ArrowForwardIcon /></LinkButton>
        </Text>
      </Right>
    </ContributeContainer>
  );
};

export default Contribute;