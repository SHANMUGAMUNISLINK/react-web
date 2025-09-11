'use client'
import { useDraggable } from "@dnd-kit/core";
import { Box, Button } from "@mui/material";
import { CSS } from '@dnd-kit/utilities';

const DragandDrop = ({ children }: { children: React.ReactNode }, props: any) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props?.id,
    });
    const style = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
    };
    return (
        <>
            <Box>Drag and Drop</Box>
            <Button variant='contained' size="medium" ref={setNodeRef} style={style} {...listeners} {...attributes}>
                {props?.children}label{children}
            </Button>
        </>
    )
}
export default DragandDrop;