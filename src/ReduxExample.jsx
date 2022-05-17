import React from 'react';
import "./redux.css"
import Rheader from './redux/Rheader';
import Rleft from './redux/Rleft';
import Rmain from './redux/Rmain';
import Rright from './redux/Rright';
import Rfooter from './redux/Rfooter';
import { useSelector } from 'react-redux';


const ReduxExample = () => {
    return (
        <>
            <Rheader />
            <Rleft />
            <Rmain />
            <Rright />
            <Rfooter />
        </>
    )
}

export default ReduxExample
