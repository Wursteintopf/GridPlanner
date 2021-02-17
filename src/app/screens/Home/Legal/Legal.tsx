import React from 'react';
import {LegalContainer} from "~app/screens/Home/Legal/LegalStyling";
import {SubSubTitle, Text} from "~app/screens/Home/HomeStyling";
import {InternalLink} from "~style/GlobalStyles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <LegalContainer>
      <SubSubTitle>Legal Stuff, so bad people cant sue me</SubSubTitle>
      <Text>
        <InternalLink>
          <Link to={"/impressum"}>Imprint <ArrowForwardIcon /></Link>
        </InternalLink>
        <br /><br />
        <InternalLink>
          <Link to={"/datenschutz"}>Privacy Policy <ArrowForwardIcon /></Link>
        </InternalLink>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        Developed with <span role="img" aria-label="love">❤️</span> and <span role="img" aria-label="coffee">☕️</span> by Markus Vogel.<br /><br />
      </Text>
    </LegalContainer>
  );
};

export default Legal;