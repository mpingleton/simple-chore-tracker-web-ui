import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PrimaryDesktopLayout from '../../../common/layouts/PrimaryDesktopLayout';

import config from '../../../data/config';
import getCompleteUiUrl from '../../../data/getCompleteUiUrl';
import self from '../../../data/user/self';

function MyHouses() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState(undefined);

    if (userData === undefined) {
        setUserData(null);
        self()
            .then((result) => {
                if (result === null) {
                    navigate(getCompleteUiUrl(config, '/'));
                } else {
                    setUserData(result);
                }
            }).catch((err) => console.log("Could not connect to the server." + err));
    }

    return (
        <PrimaryDesktopLayout
            title="My Houses"
            content={null}
            userData={userData}
        />
    );
}

export default MyHouses;