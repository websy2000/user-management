import React,{useState, useEffect} from 'react';
import {getUserDetails} from "../services/service";
import { UserList } from '../styles/global-styles';
import LayoutComponent from '../components/layout';

const UserDetailsPage = () => {

    const [singleUser, setSingleUser] = useState({});
    const [loader, setLoader] = useState(false);

    const searchParams = new URLSearchParams(window.location.search);

    const singleUserList = async() => {
        setLoader(true);
        const response = await getUserDetails(searchParams.get('userId'));
        setSingleUser(response);
        setLoader(false);
    }

    useEffect(() => {
        singleUserList();
    },[])

    return(
       <LayoutComponent>
         {loader ? (
            <span>Loading...</span>
         ) : (
            <UserList>
            <div>
                <img src={singleUser.avatar} />
            </div>
            <div>
                <h3>{singleUser.name}</h3>
                <h4>{singleUser.role}</h4>
                <small>{singleUser.email}</small>
            </div>
        </UserList>
         )}
       </LayoutComponent>
    )
}


export default UserDetailsPage;