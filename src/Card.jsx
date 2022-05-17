import React from 'react';

const Card = (props) => {
    return (
        <div className="col-sm-4" style={{padding:"5px"}}>
            <div className="card">
                <div className="card-body">
                    <img src={props.items.image} className="card-img-top" style={{height:'150px', marginBottom:'10px'}} alt="..."/>
                    <h5 className="card-title">{props.items.title}</h5>
                    <p className="card-text">{props.items.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
