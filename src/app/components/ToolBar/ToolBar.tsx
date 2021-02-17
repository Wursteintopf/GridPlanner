import React, {useEffect, useState} from 'react';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CachedIcon from '@material-ui/icons/Cached';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch, useSelector} from "react-redux";
import {deleteSavedImages, loadImages, saveImages} from "~store/images/images.actions";
import {getImages} from "~store/images/images.selectors";
import {Button} from "~style/GlobalStyles";
import {getGridChanged} from "~store/ui/ui.selectors";
import {IconButton, Snackbar} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {resetGridChange} from "~store/ui/ui.actions";

const ToolBar = () => {
  const dispatch = useDispatch();
  const images = useSelector(getImages)
  const gridChanged = useSelector(getGridChanged)

  const [saveToastOpened, setSaveToastOpened] = useState(false);
  const [loadToastOpened, setLoadToastOpened] = useState(false);
  const [deleteToastOpened, setDeleteToastOpened] = useState(false);

  useEffect(() => {
    dispatch(loadImages());
  }, [])

  const dispatchSaveImages = () => {
    if (gridChanged) {
      dispatch(saveImages(images))
      dispatch(resetGridChange())
      setSaveToastOpened(true)
    }
  }

  const dispatchLoadImages = () => {
    if (gridChanged) {
      dispatch(loadImages())
      dispatch(resetGridChange())
      setLoadToastOpened(true)
    }
  }

  const dispatchDeleteImages = () => {
    dispatch(deleteSavedImages())
    dispatch(resetGridChange())
    setDeleteToastOpened(true)
  }

  return (
    <div>
      <Button onClick={dispatchSaveImages} disabled={!gridChanged}>
        Save your grid
        <SaveAltIcon />
      </Button><br /><br />
      <Button onClick={dispatchLoadImages} disabled={!gridChanged}>
        Reload saved grid
        <CachedIcon />
      </Button><br /><br />
      <Button onClick={dispatchDeleteImages}>
        Empty and delete saved grid
        <DeleteIcon />
      </Button>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={saveToastOpened}
        autoHideDuration={6000}
        onClose={() => setSaveToastOpened(false)}
        message="Saved your grid to your local storage."
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={() => setSaveToastOpened(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={loadToastOpened}
        autoHideDuration={6000}
        onClose={() => setLoadToastOpened(false)}
        message="Loaded your last saved grid."
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={() => setLoadToastOpened(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={deleteToastOpened}
        autoHideDuration={6000}
        onClose={() => setDeleteToastOpened(false)}
        message="Deleted all Images from Feed and Local Storage."
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={() => setDeleteToastOpened(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default ToolBar;