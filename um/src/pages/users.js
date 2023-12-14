import React, { useState, useEffect } from 'react';
import { getAllUSers, CreateUser } from "../services/service";
import globalConstants from '../config/constants';
import globalIcons from '../config/icons';
import { Table, CreateUserBtn } from '../styles/global-styles';
import { useNavigate } from 'react-router-dom';
import LayoutComponent from '../components/layout';
import PopUpUsers from '../components/user-popup';
import UpdateUserForm from '../components/update-form';
import LoaderComponent from '../components/loader';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [openUpdatePop, setOpenUpdatePop] = useState(false);
    const [popupId, setPopupId] = useState(null);
    const [userObj, setUserObj] = useState({});

    const UsersList = async () => {
        setLoader(true);
        const response = await getAllUSers();
        setUsers(response);
        setLoader(false);
        console.log(response);
    }

    const userDetailsList = (id) => {
        navigate(`/user-details?userId=${id}`)
    }

    const CreateUser = () => {
        setPopUp(true);
    }

    const onOpenUpdatePop = (record) => {
        setOpenUpdatePop(true);
        setPopupId(record.id);
        setUserObj(record);
    }

    useEffect(() => {
        UsersList();
    }, []);
    return (
        <>
            <LayoutComponent>
                <CreateUserBtn><button onClick={CreateUser} >{globalConstants.Table_content.Create}</button></CreateUserBtn>
                {loader ? (<LoaderComponent type="user" />) : (
                    <Table>
                        <thead>
                            <tr>
                                <th>{globalConstants.Table_content.Id}</th>
                                <th>{globalConstants.Table_content.Name}</th>
                                <th>{globalConstants.Table_content.Email}</th>
                                <th>{globalConstants.Table_content.Actions}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <div>
                                            <img onClick={() => onOpenUpdatePop(item)} src={globalIcons.Action_icons.EditIcon} />
                                            <img src={globalIcons.Action_icons.DeleteIcon} />
                                            <img onClick={() => userDetailsList(item.id)} src={globalIcons.Action_icons.EyeIcon} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                )}
                {popUp && (
                    <PopUpUsers getUserList={UsersList} setPopUp={setPopUp} />
                )}

                {openUpdatePop && (
                    <UpdateUserForm setOpenUpdatePop={setOpenUpdatePop} popupId={popupId} userObj={userObj} getUserList={UsersList} />

                )}

            </LayoutComponent>
        </>
    )
}


export default UsersPage;