import { Close, DeleteOutline } from '@mui/icons-material'
import { Box, Button, Dialog, InputBase, TextField, Typography, styled } from '@mui/material'
import { useState } from 'react'
import useApi from '../hooks/useApi'
import { API_URLS } from '../services/api.urls'

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontSize: 14,
        fontWeight: 500
    }
})

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 15px',
    '& > div ': {
        fontSize: 14,
        borderBottom: '1px solid #F5F5F5',
        marginTop: 10
    }
})

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    textAlign: 'center'

})

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'capitalize',
    borderRadius: 18,
    width: 100,
    ':hover': {
        background: 'blue'
    }
})

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}


const ComposeMail = ({ setOpen, open }) => {

    const [data, setData] = useState({ to: '', subject: '', body: '' })
    const sentEmailService = useApi(API_URLS.saveSentEmail)
    const saveDraftEmail = useApi(API_URLS.saveDraftEmails)

    const accountHolderEmail = process.env.REACT_APP_YOUR_EMAIL

    const config = {
        Host: "smtp.elasticemail.com",
        Username: process.env.REACT_APP_USERNAME,
        Password: process.env.REACT_APP_PASSWORD,
        Port: 2525
    }

    const sendMail = (e) => {
        e.preventDefault()
        if (window.Email) {
            window.Email.send({
                ...config,
                To: data.to,
                From: accountHolderEmail,
                Subject: data.subject,
                Body: data.body
            }).then(
                message => alert(message)
            );
        }

        const payload = {
            to: data.to,
            from: accountHolderEmail,
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'Aadarsh Guru',
            starred: false,
            type: 'sent'
        }

        sentEmailService.call(payload)

        if (!sentEmailService.error) {
            setOpen(!open)
            setData({});
        } else {

        }
        setOpen(!open)
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const closeComposeMail = () => {
        const payload = {
            to: data.to,
            from: 'aadarshkumar8871860855@gmail.com',
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'Aadarsh Guru',
            starred: false,
            type: 'drafts'
        }

        saveDraftEmail.call(payload)

        if (!sentEmailService.error) {
            setOpen(!open)
            setData({});
        } else {

        }
        setOpen(!open)
    }

    return (
        <Dialog open={open} onClose={() => setOpen(!open)} PaperProps={{ sx: dialogStyle }} >
            <Header>
                <Typography>New Message</Typography>
                <Close style={{ cursor: 'pointer' }} onClick={() => closeComposeMail()} />
            </Header>
            <RecipientsWrapper>
                <InputBase value={data.to} name='to' onChange={(e) => onValueChange(e)} placeholder='Recipients' />
                <InputBase value={data.subject} name='subject' onChange={(e) => onValueChange(e)} placeholder='Subject' />
            </RecipientsWrapper>
            <TextField multiline rows={23} sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                }
            }} placeholder='Type the message..' value={data.body} name='body' onChange={(e) => onValueChange(e)} />
            <Footer>
                <SendButton onClick={(e) => sendMail(e)} >Send</SendButton>
                <DeleteOutline onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }} />
            </Footer>
        </Dialog>
    )
}

export default ComposeMail