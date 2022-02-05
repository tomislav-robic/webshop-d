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
                    imageClassName="row-1-image"
                />
                <ImageCard className='row-1-image'
                    image='https://i.ibb.co/px2tCc3/jackets.png'
                    category="JACKETS"
                    imageClassName="row-1-image"
                />
                <ImageCard className='row-1-image'
                    image='https://i.ibb.co/0jqHpnp/sneakers.png'
                    category="SNEAKERS"
                    imageClassName="row-1-image"
                />
            </div>
            <div className="category-row">
                <ImageCard
                    image='https://i.ibb.co/GCCdy8t/womens.png'
                    category="WOMENS"
                    imageClassName="row-2-image"
                />
                <ImageCard
                    image='https://i.ibb.co/R70vBrQ/men.png'
                    category="MENS"
                    imageClassName="row-2-image"          
                />
            </div>
        </div>
    )
};

export default RecommendedCategory;