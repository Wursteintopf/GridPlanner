import React from 'react';
import {Button, LinkButton} from "~style/GlobalStyles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {StyledViewportToSmall, ViewportToSmallBox} from "~app/components/ViewportToSmall/ViewportToSmallStyling";
import {useDispatch, useSelector} from "react-redux";
import {useOnSmallDevice} from "~store/ui/ui.actions";
import {getSmallIgnored} from "~store/ui/ui.selectors";

const ViewportToSmall = () => {
  const dispatch = useDispatch()
  const ignored = useSelector(getSmallIgnored)

  return (
    <StyledViewportToSmall ignored={ignored}>
      <ViewportToSmallBox>
        <h2>Your device is very small</h2>
        <p>
          It seems like you are using this website either in a very small window or on a device with a viewport
          smaller than 960 pixels. This page was developed to be used with regular desktop devices, not on smartphones.<br /><br />
          I might add mobile support in the future, I might not. If that annoys you, feel free to contribute to the
          public github repo, this is open source after all. <span role="img" aria-label="smile">😉</span><br /><br />
          <LinkButton href={'http://github.com/Wursteintopf/GridPlanner'} >Open github <ArrowForwardIcon /></LinkButton><br /><br />
          If you dont care, you could still try to use the tool on mobile, but please proceed with caution. I dont know
          what happens if you do so and I won't take any responsibility if your device randomly explodes. <span role="img" aria-label="explosion">💥</span><br /><br />
          <Button onClick={() => dispatch(useOnSmallDevice())}>Stfu and proceed <ArrowForwardIcon /></Button>
        </p>
      </ViewportToSmallBox>
    </StyledViewportToSmall>
  );
};

export default ViewportToSmall;