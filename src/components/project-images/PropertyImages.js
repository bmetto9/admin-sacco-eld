import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './propertyImages.css'

const subImages = [
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810077/Shikilia/ryan-hoffman-Ft4p5E9HjTQ-unsplash_nutqmt.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810075/Shikilia/ryan-hoffman-A7f7XRKgUWc-unsplash_wk29tc.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810074/Shikilia/ryan-hoffman-Cs4GVbMqKGY-unsplash_r0jtis.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810074/Shikilia/ryan-hoffman-czLSitCJ3Dw-unsplash_ehfvuw.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810077/Shikilia/ryan-hoffman-Ft4p5E9HjTQ-unsplash_nutqmt.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810075/Shikilia/ryan-hoffman-A7f7XRKgUWc-unsplash_wk29tc.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810074/Shikilia/ryan-hoffman-Cs4GVbMqKGY-unsplash_r0jtis.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810074/Shikilia/ryan-hoffman-czLSitCJ3Dw-unsplash_ehfvuw.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810077/Shikilia/ryan-hoffman-Ft4p5E9HjTQ-unsplash_nutqmt.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810075/Shikilia/ryan-hoffman-A7f7XRKgUWc-unsplash_wk29tc.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810074/Shikilia/ryan-hoffman-Cs4GVbMqKGY-unsplash_r0jtis.jpg',
    'https://res.cloudinary.com/emacon-production/image/upload/v1625810074/Shikilia/ryan-hoffman-czLSitCJ3Dw-unsplash_ehfvuw.jpg'
]

function PropertyImages(props) {
    const [mainImage, setMainImage] = useState(subImages[0]);
    
    return (
        <div className="property__image">
            {/* Main Image */}
            <div className="property__image-main">
                <img src={mainImage} alt="Project Name"/>
            </div>

            {/* Sub Images */}
            <div className="row mt-4">
                {
                    subImages.map((item, index) => (
                        <React.Fragment>
                            {
                                index <= 10 ? (
                                    <div className="col-2 col-md-2 col-sm-4 property__image-subimage" key={index}>
                                        <img
                                            src={item}
                                            alt="property name"
                                            onClick={() => setMainImage(item)}
                                        />
                                    </div>
                                ) : (
                                    <Link to="#" className="col-2 col-md-2 col-sm-4 property__image-addimage">
                                        <i className="bx bx-image-add"/>
                                        <p>Add Photo</p>
                                    </Link>
                                )
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default PropertyImages
