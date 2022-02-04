import React from 'react';
import './ImageCard.css';

function ImageCard({image, category}) {
    return (
        <div className="info-container">        
            <img className='card-image' src={image} alt=""/>
            <div className='info'> 
                <p>{category}</p>
                <p>SHOP NOW</p>
            </div>
        </div>        
    )
};

export default ImageCard;