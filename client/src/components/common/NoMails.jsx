import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Container = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 50,
    opacity: '0.8'
})

const NoMails = ({ message }) => {
    return (
        <Container>
            <Typography>{message?.heading}</Typography>
            <Typography>{message?.subHeading}</Typography>
        </Container>
    )
}

export default NoMails