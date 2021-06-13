import React from 'react';
import './Card.css';

const Card = props =>{
    return(
        <div className="card text-center">
            {/* <div className="overflow">
                <img src={props.imgsrc} alt="img1" className='card-img-top'/>
            </div> */}
            <div className="card-body text-dark">
                <h4 className="card-title">{props.id}.{props.name}{props.email}{props.contact}{props.address}</h4>
                <p className="card-text text-secondary">
                    {props.email}
                </p>

            </div> 

        </div>
    );
}

export default Card;