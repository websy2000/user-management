import React from 'react';
import HeaderComponent from "../components/header";

const LayoutComponent = ({children}) => {
    return(
        <div>
        <HeaderComponent />
        <div>
            {children}
        </div>
        </div>
    )
}


export default LayoutComponent;