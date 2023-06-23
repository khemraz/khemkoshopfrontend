import { Box,Typography,TextField, Button } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Layouts/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar/>  
        <Box display={'flex'} padding='25px' sx={{backgroundColor:'aliceblue'}}> 
        <Box width={'50%'} padding='25px' sx={{backgroundColor:'lightskyblue'}} borderRadius={'10px'}>
            <Typography variant='h5'>Contact Form</Typography>
            <TextField label="Email" placeholder='enter email here' fullWidth required helperText='Enter email' />
            <TextField label="Subject" placeholder='enter subject here' fullWidth helperText='Enter subject' />
            <TextField label="body"  fullWidth required multiline maxRows={3} minRows={2} />
            <Button variant='contained' fullWidth>Submit</Button>
        </Box>
        <Box width={'50%'}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.096861999773!2d85.3040385!3d27.7165386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18ef67a22d9f%3A0xedf3e2c86d367586!2sPrime%20College!5e0!3m2!1sen!2snp!4v1672741308139!5m2!1sen!2snp" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box> 
        </Box>
    </div>
  )
}

export default Contact