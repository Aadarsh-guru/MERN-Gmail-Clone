import { Star, StarBorder } from '@mui/icons-material'
import { Box, Checkbox, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../routes/routes'
import useApi from '../hooks/useApi'
import { API_URLS } from '../services/api.urls'

const Wrapper = styled(Box)({
    padding: '0 0 0 10px',
    background: '#f2f6fc',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    '& > div': {
        display: 'flex',
        width: '100%',
        '& > p': {
            fontSize: 14
        }
    }
})

const Indicator = styled(Typography)({
    fontSize: '12px !important',
    background: '#ddd',
    color: '#222',
    padding: '0 4px',
    borderRadius: 4,
    marginRight: 6
})

const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontsize: 12,
    color: '#536368'
})

const Email = ({ email, selectedEmails, setSelectedEmails, setRefreshScreen }) => {

    const navigate = useNavigate(routes)

    const toggleStarredService = useApi(API_URLS.toggleStarredEmail)

    const toggleStarredMails = () => {
        toggleStarredService.call({ id: email?._id, value: !email?.starred })
        setRefreshScreen(prevState => !prevState)
    }

    const onValueChange = (e) => {
        if (selectedEmails?.includes(email?._id)) {
            setSelectedEmails(prevState => prevState.filter(id => id !== email?._id))
        } else {
            setSelectedEmails(prevState => [...prevState, email?._id])
        }
    }

    return (
        <Wrapper>
            <Checkbox size='small'
                checked={selectedEmails.includes(email._id)}
                onChange={(e) => onValueChange(e)}
            />
            {
                email?.starred === true ?
                    <Star fontSize='small' style={{ marginRight: 10, color: '#FFF200' }} onClick={() => toggleStarredMails()} />
                    :
                    <StarBorder fontSize='small' style={{ marginRight: 10 }} onClick={() => toggleStarredMails()} />
            }
            <Box onClick={() => navigate(routes.view.path, { state: { email: email } })} >
                <Typography style={{ width: 200, overflow: 'hidden' }} >{email?.name}</Typography>
                <Indicator>Inbox</Indicator>
                <Typography>{email?.subject} {email?.body && '-'} {email?.body}</Typography>
                <Date>
                    {new window.Date(email?.date).getDate()}
                    {new window.Date(email?.date).toLocaleString('default', { month: 'long' })}
                </Date>
            </Box>
        </Wrapper>
    )
}

export default Email