import React from 'react';
import './RecommendedCategory.css';
import ImageCard from './ImageCard';

function RecommendedCategory() {
    return (
        <div className='RecommendedCategory'>
            <div className="category-row">
                <ImageCard className='row-1-image'
                    image='https://i.ibb.co/cvpntL1/hats.png'
                    category="HATS"
                />
                <ImageCard className='row-1-image'
                    image="https://i.ibb.co/cvpntL1/hats.png"
                    category="HATS"
                />
                <ImageCard className='row-1-image'
                    image="https://i.ibb.co/cvpntL1/hats.png"
                    category="HATS"
                />
            </div>
            <div className="category-row">
                <ImageCard
                    image="https://i.ibb.co/cvpntL1/hats.png"
                    category="HATS"
                />
                <ImageCard
                    image="https://i.ibb.co/cvpntL1/hats.png"
                    category="HATS"          
                />
            </div>
        </div>
    )
};

export default RecommendedCategory;