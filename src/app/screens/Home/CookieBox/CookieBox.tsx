import React from 'react';
import {CookieText} from "~app/screens/Home/HomeStyling";
import CheckIcon from '@material-ui/icons/Check';
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  MainTitle,
  MoreInformation,
  StartButton,
  StyledCookieBox,
  SubTitle
} from "~app/screens/Home/CookieBox/CookieBoxStyling";

const CookieBox = () => {
  return (
    <StyledCookieBox>
      <MainTitle>
        Grid Planner
      </MainTitle>

      <SubTitle>
        I'm not the bad guy.
      </SubTitle>

      <CookieText>
        I know, that is totally what a bad guy would say, but in fact this tool doesn't track you,
        I do not save any of your images or any other data, in fact there is no communication with my server whatsoever
        while using this tool. This is pure javascript, everything happens directly in your browser. <br /><br />
        The only cookie we actually do set is one that allows you to save your grid in your own browser storage.
        According to EU law I still need your explicit consent to do so, therefore you consent to this by clicking
        the button below and using this tool.
      </CookieText>

      <StartButton>
        <Link to={'/planner'}>Alright, start the tool already! <CheckIcon /></Link>
      </StartButton>

      <MoreInformation>
        More information about me and the tool? Just keep scrolling. <br />
        <ExpandMoreIcon fontSize={'large'} />
      </MoreInformation>
    </StyledCookieBox>
  );
};

export default CookieBox;