import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import NavigationBarItem from '../components/NavigationBarItem';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/LogoutRounded';

import config from '../../data/config';
import getCompleteUiUrl from '../../data/getCompleteUiUrl';
import logout from '../../data/auth/logout';

function PrimaryDesktopLayout(props) {
    const navigate = useNavigate();
    const [isNavigationDrawerOpen, setNavigationDrawerOpen] = useState(false);
    document.title = 'Simple Chore Tracker - ' + props.title;

    // TODO: Make it so the app bar is still displayed while the userData API call is still in progress.
    if (props.userData === null || props.userData === undefined) {
        return (<Typography>Loading...</Typography>);
    }

    const NavigationSideBar = (
        <Paper>
            <Stack direction="column" justifyContent="space-between" height="100%">
                <List>
                    <NavigationBarItem
                        open={isNavigationDrawerOpen}
                        label="Menu"
                        icon={<MenuIcon />}
                        onClick={() => setNavigationDrawerOpen(!isNavigationDrawerOpen)}
                    />
                    <NavigationBarItem
                        open={isNavigationDrawerOpen}
                        label="My Houses"
                        icon={<ArrowRightIcon />}
                        onClick={() => navigate(getCompleteUiUrl(config, '/myhouses'))}
                    />
                    <NavigationBarItem
                        open={isNavigationDrawerOpen}
                        label="Chores"
                        icon={<ArrowRightIcon />}
                        onClick={() => navigate(getCompleteUiUrl(config, '/chores'))}
                    />
                </List>
                <List>
                    <NavigationBarItem
                        open={isNavigationDrawerOpen}
                        label={props.userData.nameDisplay}
                        icon={<AccountBoxIcon />}
                        onClick={() => {}}
                    />
                    <NavigationBarItem
                        open={isNavigationDrawerOpen}
                        label="Logout"
                        icon={<LogoutIcon />}
                        onClick={() => logout().then(() => navigate('/'))}
                    />
                </List>
            </Stack>
        </Paper>
    );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                height: '100vh'
            }}
        >
            {props.modals}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'clip'
                }}
            >
                <Stack direction="row" sx={{ width: '100%', height: '100%' }}>
                    {NavigationSideBar}
                    <Divider orientation='vertical' />
                    <Box overflow='scroll' sx={{ width: '100%' }}>{props.content}</Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default PrimaryDesktopLayout;