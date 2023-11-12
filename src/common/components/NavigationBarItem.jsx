import React from 'react';
import { ListItemIcon, ListItemText, ListItemButton} from '@mui/material';

function NavigationBarItem(props) {
    return (
        <ListItemButton onClick={props.onClick}>
            <ListItemIcon sx={{ padding: 1, minWidth: 0 }}>{props.icon}</ListItemIcon>
            {props.open && (<ListItemText primary={props.label}  sx={{ paddingRight: 4, paddingLeft: 4, width: 200 }} />)}
        </ListItemButton>
    );
}

export default NavigationBarItem;