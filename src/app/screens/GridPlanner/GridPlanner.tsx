import React from 'react';
import DropZone from "~app/components/DropZone/DropZone";
import ToolBar from "~app/components/ToolBar/ToolBar";
import Feed from "~app/components/Feed/Feed";
import {Container, FlexContainer, InternalLink} from "~style/GlobalStyles";
import {MainTitle} from "~app/screens/Home/CookieBox/CookieBoxStyling";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const GridPlanner = () => {
  return (
    <Container>
      <MainTitle>
        Grid Planner
      </MainTitle>

      <InternalLink>
        <Link to={"/"}><ArrowBackIcon /> Back to main Page</Link>
      </InternalLink>
      <br /><br />

      <FlexContainer>
        <DropZone />
        <ToolBar />
      </FlexContainer>
      <br />
      <Feed />
    </Container>
  );
};

export default GridPlanner;