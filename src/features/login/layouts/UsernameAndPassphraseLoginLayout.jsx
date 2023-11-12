import React from 'react';
import { useState } from 'react';
import {
    Paper,
    Typography,
    TextField,
    Stack,
    Button
} from '@mui/material';

import Joi from 'joi';

function UsernameAndPassphraseLoginLayout(props) {

    const [username, setUsername] = useState("");
    const [passphrase, setPassphrase] = useState("");
    
    const isUsernameValid = Joi.string().min(1).required().validate(username);
    const isPassphraseValid = Joi.string().min(1).required().validate(passphrase);
    const isValid = (!isUsernameValid.error && !isPassphraseValid.error);

    function handleSubmit() {
        props.onSubmit(username, passphrase)
    }

    const bottomControls = props.isPendingSubmit === true ? (<Typography>Loading...</Typography>) : [(<Button variant='text' onClick={() => props.onCancel()}>Cancel</Button>), (<Button variant='contained' disabled={!isValid} onClick={handleSubmit}>Login</Button>)];

    return (
        <Paper
            sx={{
                position: 'absolute',
                width: '400px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: 2
            }}    
        >
            <Stack direction="column" spacing={1}>
                <Typography variant='h6'>Please log in:</Typography>
                <TextField
                    type="text"
                    variant="outlined"
                    label="Username"
                    disabled={props.isPendingSubmit}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    type="password"
                    variant="outlined"
                    label="Passphrase"
                    disabled={props.isPendingSubmit}
                    value={passphrase}
                    onChange={(e) => setPassphrase(e.target.value)}
                />
                {props.errorMessage != '' ? (<Typography color="red">{props.errorMessage}</Typography>) : null}
                <Stack direction="row" spacing={1} justifyContent="right">{bottomControls}</Stack>
            </Stack>
        </Paper>
    );
}

export default UsernameAndPassphraseLoginLayout;