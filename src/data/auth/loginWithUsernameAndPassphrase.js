import Cookies from 'universal-cookie';
import { sha512 } from 'js-sha512';

import config from '../config';
import getCompleteApiUrl from '../getCompleteApiUrl';

async function loginWithUsernameAndPassphrase(username, passphrase) {
    const cookies = new Cookies();

    const passphraseHash = sha512.update(passphrase).hex();

    return fetch(getCompleteApiUrl(config, '/auth/login'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                passphraseHash,
            })
        }).then((response) => {
            if (response.status === 200 || response.status === 401 || response.status === 403) {
                return response.json();
            } else {
                return null;
            }
        }).then((data) => {
            if (data != null) {
                if (data.token != undefined) {
                    cookies.set('accessToken', data.token, { path: '/'});
                }
                return data;
            } else {
                return null;
            }
        });
}

export default loginWithUsernameAndPassphrase;