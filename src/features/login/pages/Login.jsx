import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UsernameAndPassphraseLoginLayout from '../layouts/UsernameAndPassphraseLoginLayout';

import config from '../../../data/config';
import getCompleteUiUrl from '../../../data/getCompleteUiUrl';
import loginWithUsernameAndPassphrase from '../../../data/auth/loginWithUsernameAndPassphrase';

function Login() {
    const navigate = useNavigate();

    const [isPendingSubmit, setPendingSubmit] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    function submitLogin(username, passphrase) {
        setPendingSubmit(true);
        setErrorMessage('');
        loginWithUsernameAndPassphrase(username, passphrase)
            .then((result) => {
                if (result === null) {
                    setErrorMessage('Could not connect to the server.');
                    setPendingSubmit(false);
                } else {
                    if (result.token === undefined) {
                        setErrorMessage(result.message);
                        setPendingSubmit(false);
                    } else {
                        navigate(getCompleteUiUrl(config, '/'));
                    }
                }
            }).catch((error) => {
                setErrorMessage('Could not connect to the server.');
                console.log(error);
                setPendingSubmit(false);
            });
    }

    return (
        <UsernameAndPassphraseLoginLayout
            isPendingSubmit={isPendingSubmit}
            errorMessage={errorMessage}
            onSubmit={submitLogin}
            onCancel={() => navigate('/')}
        />
    );
}

export default Login;