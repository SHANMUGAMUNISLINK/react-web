'use client'
import { Box, Button, Grid, TextField } from '@mui/material'
import { useState } from 'react';

const Client = () => {

    const defaultClientModal: any = {
        clientName: '',
        clientPhoneNumber: ''
    }
    const [clientModal, setClientModal] = useState(defaultClientModal);

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        handleFormModal({ [name]: value });
    }

    const handleFormModal = (data: any) => {
        setClientModal((prevState: any) => {
            return { ...prevState, ...data }
        })
    }


    return (
        <Box>
            <Box sx={{ paddingBottom: '10px' }}>Client Details</Box>
            <Grid sx={{ display: 'flex', gap: '10px' }}>
                <Grid>
                    <TextField
                        size="small"
                        name="clientName"
                        value={clientModal.clientNameame}
                        onChange={handleInputChange}
                        label="Client Name"
                    />
                </Grid>
                <Grid>
                    <TextField
                        size="small"
                        name="clientPhoneNumber"
                        value={clientModal.clientPhoneNumber}
                        onChange={handleInputChange}
                        label="Client Phone Number"
                    />
                </Grid>
            </Grid>
            <Button />
        </Box>
    )
}
export default Client;