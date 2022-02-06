import React from 'react';
import './RecommendedCategory.css';
import ImageCard from '../image-card/ImageCard';

function RecommendedCategory() {
    return (
        <div className='recommended-category'>
            <div className="category-row-1">
                <a href = "/Hats">
                    <ImageCard className='row-1-image'
                        image='https://i.ibb.co/cvpntL1/hats.png'
                        category="HATS"
                        imageClassName="row-1-image"
                        infoContainerClassName="info-container-1"
                        infoClassName="info-1"
                    />
                </a>
                <a href = "/Jackets">
                    <ImageCard className='row-1-image'
                        image='https://i.ibb.co/px2tCc3/jackets.png'
                        category="JACKETS"
                        imageClassName="row-1-image"
                        infoContainerClassName="info-container-1"
                        infoClassName="info-1"
                    />
                </a>

                <a href = "/Sneakers">
                    <ImageCard className='row-1-image'
                        image='https://i.ibb.co/0jqHpnp/sneakers.png'
                        category="SNEAKERS"
                        imageClassName="row-1-image"
                        infoContainerClassName="info-container-1"
                        infoClassName="info-1"
                    />
                </a>
            </div>
            <div className="category-row-2">
                <a href = "/Womens">
                    <ImageCard
                        image='https://i.ibb.co/GCCdy8t/womens.png'
                        category="WOMENS"
                        imageClassName="row-2-image"
                        infoContainerClassName="info-container-2"
                        infoClassName="info-2"
                    />
                </a>
                <a href = "/Mens">
                    <ImageCard
                        image='https://i.ibb.co/R70vBrQ/men.png'
                        category="MENS"
                        imageClassName="row-2-image"   
                        infoContainerClassName="info-container-2" 
                        infoClassName="info-2"      
                    />
                </a>
            </div>
        </div>
    )
};

export default RecommendedCategory;