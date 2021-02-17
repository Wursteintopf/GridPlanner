import React, {useState} from 'react';
import {StyledDropZone} from "~app/components/DropZone/DropZoneStyling";
import { useDispatch } from 'react-redux'
import {parseImage} from "~store/images/images.actions";
import {gridChanged} from "~store/ui/ui.actions";

const DropZone = () => {
  const dispatch = useDispatch();
  const [draggedOver, setDraggedOver] = useState(false);

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
    setDraggedOver(false);
    const files = e.dataTransfer.files;
    // TODO: Sichergehen, dass alle Dateien auch wirklich Bilder sind
    Array.from(files).forEach(file => {
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
    </StyledDropZone>
  );
};

export default DropZone;