
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, useRouterHistory } from 'react-router';
import { createHistory, useBeforeUnload } from 'history';
import routes from './routes';

const history = useRouterHistory(useBeforeUnload(createHistory))();

match({ history, routes }, (error, redirectLocation, renderProps) => {
    ReactDOM.render(<Router {...renderProps} />, document.getElementById('root'));
});
