import React from 'react';
import './Card.css';

const Card = props =>{
    return(
        <div className="card text-left">
            
            <div className="card-body text-dark">
                <h4 className="card-title">{props.name}  {props.contact}</h4>
                <h5>{props.email}</h5>
                <h6 className="card-text text-dark">
                {props.address}
                </h6>

            </div> 

        </div>
    );
}

export default Card;