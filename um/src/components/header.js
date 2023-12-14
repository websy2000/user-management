import React from 'react';
import globalIcons from '../config/icons';
import globalConstants from '../config/constants';
import { Header } from "../styles/global-styles"
import { useNavigate, NavLink } from 'react-router-dom';

const HeaderComponent = () => {
    const LogedInToken = localStorage.getItem('token');

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate(`/login`)
    }
    return (
        <>
            <Header>
                <img src={globalIcons.Header_icons.LogoIcon} />
                <ul>
                    {LogedInToken === null ? (
                        <li>{globalConstants.Login_page_constants.Login}</li>
                    ) : (
                        <>
                            <li><NavLink to="/users"> {globalConstants.Login_page_constants.Users}</NavLink></li>
                            <li onClick={handleLogOut}>{globalConstants.Login_page_constants.Logout}</li>
                        </>
                    )}
                </ul>


            </Header>
        </>
    )
}


export default HeaderComponent