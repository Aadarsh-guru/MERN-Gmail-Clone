import { Box, CircularProgress, Typography } from '@mui/material'

const SuspenseLoader = () => {
    return (
        <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '400px' }} >
            <CircularProgress />
            <Typography>Loading...</Typography>
        </Box>
    )
}

export default SuspenseLoader