
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import imagesList from './imagesList';

const Gallery = () => (
    <div>
        <ImageGallery
            items={imagesList}
            slideInterval={2000}
        />
    </div>
);

export default Gallery;
