import React from 'react'
import { FaMinusCircle, FaPlusCircle, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, uppercase, lowercase } from '../action/actions';

const Rmain = () => {
    const counter = useSelector((state) => state.counter)
    const displayName = useSelector((state) => state.display)
    const dispatch = useDispatch();
    console.log(increment(5));
    return (
        <div id='main' className='text-center'>
            <div className="card-body text-warning">
                <input type="text" name="" id="" />
                <span className='d-block p-2 bg-light text-black mb-1'>
                    <FaMinusCircle style={{ margin: "2px", cursor: "pointer" }} onClick={() => dispatch(decrement(5))} />
                    <FaPlusCircle style={{ margin: "2px", cursor: "pointer" }} onClick={() => dispatch(increment(5))} />
                </span>
            </div>
            <div className="card-body text-error">{counter}</div>
            <span className='d-block p-2 bg-light text-black mb-1'>
                <FaArrowUp style={{ margin: "2px", cursor: "pointer" }} onClick={() => dispatch(uppercase())} />
                <FaArrowDown style={{ margin: "2px", cursor: "pointer" }} onClick={() => dispatch(lowercase())} />
            </span>
            <div className="card-body text-warning">{displayName}</div>
        </div>
    )
}

export default Rmain
