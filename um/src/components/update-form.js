import React, { useState } from 'react';
import { UpdateForm } from '../styles/global-styles';
import globalConstants from '../config/constants';
import { UpdateUserData } from '../services/service';
import LoaderCompoent from "../components/loader";

const UpdateUserForm = ({ setOpenUpdatePop, popupId, userObj, getUserList }) => {
    const [email, setEmail] = useState(userObj.email);
    const [name, setName] = useState(userObj.name);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState();

    const userFormUpdate = async () => {
        setLoader(true);
        const response = await UpdateUserData(popupId, email, name);
        if (response) {
            setLoader(false);
            getUserList();
            setOpenUpdatePop(false);
            setError("")
        } else {
            setError("Update sholu only works for newly created items.");
            setLoader(false);
        }
    }


    const emailChange = (event) => {
        setEmail(event.target.value);
    }

    const nameChange = (event) => {
        setName(event.target.value);
    }

    const closeUpdatePopUp = () => {
        setOpenUpdatePop(false);
    }

    return (
        <>
            <UpdateForm>
                <h3>{globalConstants.Update_user_form.Update}</h3>
                <span>{error}</span>
                <input type="email" id="email" name="email" placeholder='Enter your email' value={email} onChange={emailChange} />
                <input type="text" id="name" name="name" placeholder='Enter your name' value={name} onChange={nameChange} />
                <div>
                    <button onClick={userFormUpdate} type="button">{loader ? <LoaderCompoent type="update" /> : globalConstants.Update_user_form.Update_form}</button>
                    <button onClick={closeUpdatePopUp} tpye="button">{globalConstants.User_popup.Close}</button>
                </div>
            </UpdateForm>
        </>
    )
};


export default UpdateUserForm;