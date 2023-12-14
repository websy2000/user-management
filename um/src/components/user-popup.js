import React, { useState } from 'react';
import { CreateUser } from "../services/service";
import { PopUser, Text } from '../styles/global-styles';
import globalConstants from '../config/constants';

const PopUpUsers = ({ getUserList, setPopUp }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [image, setImage] = useState("");
    const [loader, setLoader] = useState(false);

    const userPopCreate = async () => {
        setLoader(true);
        const response = await CreateUser(name, email, password, image);
        if (response) {
            setLoader(false);
            getUserList();
            setPopUp(false);

        }
        console.log(response);


    }

    const nameChange = (event) => {
        setName(event.target.value);
    }
    const emailChange = (event) => {
        setEmail(event.target.value);
    }
    const passwordChange = (event) => {
        SetPassword(event.target.value);
    }
    const imageChange = (event) => {
        setImage(event.target.value);
    }

    const closePopUp = () => {
        setPopUp(false);
    }

    return (
        <PopUser>
            <Text pageType="user">
                <h3>{globalConstants.Table_content.Create}</h3>
                <input type="text" id="name" name="name" placeholder='Enter your name' onChange={nameChange} />
                <input type="email" id="email" name="email" placeholder='Enter your email' onChange={emailChange} />
                <input type="password" id="password" name="email" placeholder='Enter your password' onChange={passwordChange} />
                <input type="url" id="avatar" name="avatar" placeholder='Enter image url' onChange={imageChange} />
                <div>
                    <button onClick={userPopCreate} type="button">{loader ? 'Loading...' : globalConstants.User_popup.Create}</button>
                    <button onClick={closePopUp} type="button">{globalConstants.User_popup.Close}</button>
                </div>
            </Text>
        </PopUser>
    )
}


export default PopUpUsers;