import { AppBar, Box, InputBase, Toolbar, styled } from '@mui/material'
import { Menu as MenuIcon, Search, Tune, HelpOutline, SettingsOutlined, AppsOutlined, AccountCircleOutlined } from '@mui/icons-material';
import { gmailLogo } from '../constants/constants';

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#f5f5f5',
    boxShadow: 'none'
})

const SearchWrapper = styled(Box)({
    background: '#EAF1FB',
    marginLeft: 80,
    borderRadius: 8,
    minWidth: 690,
    maxWidth: 720,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    '& > div': {
        width: '100%',
        padding: '0 10px'
    }
})

const OntionsWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    '& > svg': {
        marginLeft: 20
    }
})

const Header = ({ toggleDrawer }) => {
    return (
        <StyledAppBar position='static' >
            <Toolbar>
                <MenuIcon color='action' style={{ cursor: 'pointer' }} onClick={toggleDrawer} />
                <img src={gmailLogo} alt="logo" width={110} style={{ marginLeft: 15 }} />
                <SearchWrapper>
                    <Search color='action' />
                    <InputBase placeholder='Search mail' />
                    <Tune color='action' />
                </SearchWrapper>
                <OntionsWrapper>
                    <HelpOutline color='action' />
                    <SettingsOutlined color='action' />
                    <AppsOutlined color='action' />
                    <AccountCircleOutlined color='action' />
                </OntionsWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header