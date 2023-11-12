import Cookies from 'universal-cookie';

async function logout() {
    const cookies = new Cookies();

    if (cookies.get('accessToken') === undefined) {
        return null;
    }

    return fetch(getCompleteApiUrl(config, '/auth/logout'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookies.get('accessToken')}`
            }
        }).then((response) => {
            if (response.status === 200) {
                cookies.remove('accessToken', { path: '/' });
            } else {
                return null;
            }
        });
}

export default logout;