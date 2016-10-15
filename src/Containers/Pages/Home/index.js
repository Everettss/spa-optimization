
import React from 'react';
import './home.scss';
import audience from './img/audience.jpg';

const Home = () => (
    <div>
        <div className="about-warsawjs">
            WarsawJS is a local community of JavaScript professionals and enthusiasts. We meet every month to talk and
            debate about our favorite programming language. This community is focused on sharing experience from
            different fields on which JS is used, from web browsers, to servers, dev tools, mobiles, smart tvs,
            micro controllers, databases, video games and so on. We increase our collective knowledge,
            by building integrated network of skilled individuals and local companies. Join Us Today!
        </div>
        <img src={audience} alt="audience" className="audience" />
    </div>
);

export default Home;
