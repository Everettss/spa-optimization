
import Layout from './Containers/Layout';
import backgroundLader from './backgroundLoader';

const HomePage = (nextState, cb) => {
    require.ensure([], require => {
        cb(null, require('./Containers/Pages/Home').default);
    });
};

const TalksPage = (nextState, cb) => {
    require.ensure([], require => {
        cb(null, require('./Containers/Pages/Talks').default);
    });
};

const GalleryPage = (nextState, cb) => {
    require.ensure([], require => {
        cb(null, require('./Containers/Pages/Gallery').default);
    });
};

backgroundLader(HomePage);
backgroundLader(TalksPage);
backgroundLader(GalleryPage);

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
