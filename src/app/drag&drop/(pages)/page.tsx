'use client'
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box } from '@mui/material';

const Droppable = (props: any) => {
    const { isOver, setNodeRef } = useDroppable({
        id: props?.id || "",
    });
    const style = {
        opacity: isOver ? 1 : 0.5,
    };

    return (
        <Box ref={setNodeRef} style={style}>
            {props?.children}
        </Box>
    );
}
export default Droppable;