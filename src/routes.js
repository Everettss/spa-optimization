
import Layout from './Containers/Layout';
import backgroundLoader from './backgroundLoader';

const HomePage = (nextState, cb) => {
    require.ensure([], require => {
        cb(null, require('./Containers/Pages/Home').default);
    }, 'home');
};

const TalksPage = (nextState, cb) => {
    require.ensure([], require => {
        cb(null, require('./Containers/Pages/Talks').default);
    }, 'talks');
};

const GalleryPage = (nextState, cb) => {
    require.ensure([], require => {
        cb(null, require('./Containers/Pages/Gallery').default);
    }, 'gallery');
};

backgroundLoader(HomePage);
backgroundLoader(TalksPage);
backgroundLoader(GalleryPage);

const routes = {
    path: '/',
    component: Layout,
    indexRoute: {
        getComponent: HomePage,
    },
    childRoutes: [
        {
            path: 'talks',
            getComponent: TalksPage,
        },
        {
            path: 'gallery',
            getComponent: GalleryPage,
        },
    ],
};

export default routes;
