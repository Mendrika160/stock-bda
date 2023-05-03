import React from 'react'
import { Typography, Modal, Box } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #e2dada',
    boxShadow: 24,
    p: 4,
  };

function Popup({open,handleClose}) {
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>Popup</div>
                </Box>

            </Modal>
            
        </>

    )
}

export default Popup