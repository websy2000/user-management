import React, { useState, useEffect } from 'react';
import { Text } from '../styles/global-styles';
import globalConstants from "../config/constants";
import LayoutComponent from '../components/layout';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");

    const navigate = useNavigate();

    const loginData = "abcdefghi";


    const onLogin = () => {
        localStorage.setItem('token', loginData);
        navigate(`/users`)

    }

    const emailChange = (event) => {
        setEmail(event.target.value);
    }

    const passwordChange = (event) => {
        SetPassword(event.target.value);
    }
    return (
        <>
            <LayoutComponent>
                <Text pageType="login">
                    <h3>{globalConstants.Login_page_constants.Title}</h3>
                    <input type="email" id="email" name="email" placeholder='Enter Your email' onChange={emailChange} />
                    <input type="password" id="password" name="email" placeholder='Enter Your Password' onChange={passwordChange} />
                    <div>
                        <button onClick={onLogin} disabled={email === "" || password === ""} type="button">{globalConstants.Login_page_constants.Login}</button>
                    </div>
                </Text>
            </LayoutComponent>
        </>
    )
}


export default LoginPage;