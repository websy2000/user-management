import React from 'react';
import { Loader } from '../styles/global-styles';

const LoaderComponent = ({ type }) => {
    return (
        <Loader type={type} />
    )
}

export default LoaderComponent;