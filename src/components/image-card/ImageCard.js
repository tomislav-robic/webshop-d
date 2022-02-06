import React from 'react';
import './ImageCard.css';

function ImageCard({image, category, imageClassName, infoContainerClassName, infoClassName}) {
    return (
        <div className={infoContainerClassName}>        
            <img className={imageClassName} src={image} alt="" width="1200" height="800" />
            <div className={infoClassName}> 
                <p>{category}</p>
                <p>SHOP NOW</p>
            </div>
        </div>        
    )
};

export default ImageCard;