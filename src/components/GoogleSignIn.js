import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Session } from '../App'

export function GoogleSignIn() {
    const session = useContext(Session)

    const responseMessage = (response) => {
        session.setUser(response)
    };


    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
          {/* onsuccess thì gọi hàm 1, thất bại thì gọi hàm 2 */}
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}

