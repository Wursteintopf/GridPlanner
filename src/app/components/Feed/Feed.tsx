import React, {useState} from 'react';
import {FeedContainer, FeedImage, StyledHandle} from "~app/components/Feed/FeedStyling";
import {useDispatch, useSelector} from 'react-redux'
import {getImages} from "~store/images/images.selectors";
import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';
import {deleteImageById, setImages} from "~store/images/images.actions";
import CloseIcon from '@material-ui/icons/Close';
import {IconButton} from "@material-ui/core";
import {gridChanged} from "~store/ui/ui.actions";

const Feed = () => {
  const images = useSelector(getImages)
  const dispatch = useDispatch()

  const onSortEnd = ({oldIndex, newIndex}) => {
    let newImages = [...images];

    let movedImage = {
      ...newImages[oldIndex],
      id: newImages[newIndex].id
    }

    if (oldIndex > newIndex)
    {
      let imagesToMove = newImages.filter(i => (i.id <= newImages[newIndex].id && i.id > newImages[oldIndex].id))
      imagesToMove.forEach(i => i.id--)
      let theOtherOnes = newImages.filter(i => !(i.id <= newImages[newIndex].id && i.id >= newImages[oldIndex].id))
      newImages = [...imagesToMove, ...theOtherOnes, movedImage]
    }
    else
    {
      let imagesToMove = newImages.filter(i => (i.id >= newImages[newIndex].id && i.id < newImages[oldIndex].id))
      imagesToMove.forEach(i => i.id++)
      let theOtherOnes = newImages.filter(i => !(i.id >= newImages[newIndex].id && i.id <= newImages[oldIndex].id))
      newImages = [...imagesToMove, ...theOtherOnes, movedImage]
    }

    dispatch(setImages(newImages))
    dispatch(gridChanged())
  };

  const Handle = SortableHandle(({ tabIndex }) => (
    <StyledHandle tabIndex={tabIndex} />
  ));

  const SortableImage = SortableElement(({image, index}) => {
    const [hovered, setHovered] = useState(false)

    return (
      <FeedImage
        image={image.data}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <IconButton
          style={{
            position: "relative",
            marginLeft: 250,
            zIndex: 10,
            opacity: hovered ? 1 : 0
          }}
          onClick={() => {
            dispatch(deleteImageById(image.id));
            dispatch(gridChanged())
          }}
        >
          <CloseIcon />
        </IconButton>
        <Handle tabIndex={index} />
      </FeedImage>
    )
  });

  const SortableList = SortableContainer(({items}) => {
    return (
      <FeedContainer>
        {items.sort((a,b) => b.id - a.id).map((image, index) => (
          <SortableImage key={index} index={index} image={image} />
        ))}
      </FeedContainer>
    );
  });

  return (
    <SortableList
      useDragHandle
      items={images}
      onSortEnd={onSortEnd}
      axis="xy"
    />
  );
};

export default Feed;