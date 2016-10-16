
import React from 'react';
import ImageGallery from 'react-image-gallery';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ig from '!isomorphic-style-loader!original-css!react-image-gallery/styles/css/image-gallery.css';
import imagesList from './imagesList';

const Gallery = () => (
    <div>
        <ImageGallery
            items={imagesList}
            slideInterval={2000}
        />
    </div>
);

export default withStyles(ig)(Gallery);
