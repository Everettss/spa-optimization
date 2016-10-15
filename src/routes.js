
import Layout from './Containers/Layout';
import Home from './Containers/Pages/Home';
import Talks from './Containers/Pages/Talks';
import Gallery from './Containers/Pages/Gallery';

const routes = {
    path: '/',
    component: Layout,
    indexRoute: {
        component: Home,
    },
    childRoutes: [
        {
            path: 'talks',
            component: Talks,
        },
        {
            path: 'gallery',
            component: Gallery,
        },
    ],
};

export default routes;
