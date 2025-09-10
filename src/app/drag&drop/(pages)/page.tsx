'use client'
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { Box, Button } from "@mui/material";
import { CSS } from '@dnd-kit/utilities';

const DragandDrop = (props: any) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };
  return (
    <>
      <Box>Drag and Drop</Box>
      <Button variant='contained' size="medium" ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {props.children}label
      </Button>
    </>
  )
}
export default DragandDrop;

export function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};