import React, {useState} from 'react';
import {StyledDropZone} from "~app/components/DropZone/DropZoneStyling";
import { useDispatch } from 'react-redux'
import {parseImage} from "~store/images/images.actions";
import {gridChanged} from "~store/ui/ui.actions";
import {IconButton, Snackbar} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const DropZone = () => {
  const dispatch = useDispatch();
  const [draggedOver, setDraggedOver] = useState(false);
  const [noneImageFiles, setNoneImageFiles] = useState(false);

  const dragOver = (e) => {
    e.preventDefault();
  }

  const dragEnter = (e) => {
    e.preventDefault();
    setDraggedOver(true);
  }

  const dragLeave = (e) => {
    e.preventDefault();
    setDraggedOver(false);
  }

  const fileDrop = (e) => {
    e.preventDefault();
    const allowedFileTypes = ['image/jpg','image/jpeg','image/png']
    setDraggedOver(false);
    const files = Array.from(e.dataTransfer.files);
    const images = files.filter(file => allowedFileTypes.includes(file.type));
    if (files.length !== images.length) setNoneImageFiles(true);
    images.forEach(file => {
      dispatch(parseImage(file));
    })
    dispatch(gridChanged())
  }

  return (
    <StyledDropZone
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
      draggedOver={draggedOver}
    >
      Just drag and drop your images here

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={noneImageFiles}
        autoHideDuration={6000}
        onClose={() => setNoneImageFiles(false)}
        message="One or more of the files you tried to upload was not a JPG or PNG and therefore removed."
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={() => setNoneImageFiles(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </StyledDropZone>
  );
};

export default DropZone;