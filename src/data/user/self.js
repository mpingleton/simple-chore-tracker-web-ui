import Cookies from 'universal-cookie';

import config from '../config';
import getCompleteApiUrl from '../getCompleteApiUrl';

async function self() {
    const cookies = new Cookies();

    if (cookies.get('accessToken') === undefined) {
        return null;
    }

    return fetch(getCompleteApiUrl(config, '/users/self'), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.get('accessToken')}`
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            return null;
        }
    });
}

export default self;