
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './home.scss';
import audience from './img/audience.jpg';

const Home = () => (
    <div>
        <div className={s.aboutWarsawjs}>
            WarsawJS is a local community of JavaScript professionals and enthusiasts. We meet every month to talk and
            debate about our favorite programming language. This community is focused on sharing experience from
            different fields on which JS is used, from web browsers, to servers, dev tools, mobiles, smart tvs,
            micro controllers, databases, video games and so on. We increase our collective knowledge,
            by building integrated network of skilled individuals and local companies. Join Us Today!
        </div>
        <img src={audience} alt="audience" className={s.audience} />
    </div>
);

export default withStyles(s)(Home);
