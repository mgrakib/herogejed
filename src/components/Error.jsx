import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const {error, status} = useRouteError();
    
    return (
        <div>
            <p>{error.message}</p>
            <p>status : { status}</p>
        </div>
    );
};

export default Error;