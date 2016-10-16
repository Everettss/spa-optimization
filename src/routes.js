
import Layout from './Containers/Layout';

const routes = {
    path: '/',
    component: Layout,
    indexRoute: {
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Containers/Pages/Home').default);
            });
        },
    },
    childRoutes: [
        {
            path: 'talks',
            getComponent: (nextState, cb) => {
                require.ensure([], require => {
                    cb(null, require('./Containers/Pages/Talks').default);
                });
            },
        },
        {
            path: 'gallery',
            getComponent: (nextState, cb) => {
                require.ensure([], require => {
                    cb(null, require('./Containers/Pages/Gallery').default);
                });
            },
        },
    ],
};

export default routes;
