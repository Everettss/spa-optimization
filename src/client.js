
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, useRouterHistory } from 'react-router';
import { createHistory, useBeforeUnload } from 'history';
import routes from './routes';
import WithStylesContext from './WithStylesContext';

const onInsertCssHandler = (...styles) => {
    const removeCss = styles.map(style => style._insertCss()); // eslint-disable-line no-underscore-dangle
    return () => {
        removeCss.forEach(f => f());
    };
};

const history = useRouterHistory(useBeforeUnload(createHistory))();

match({ history, routes }, (error, redirectLocation, renderProps) => {
    let cssContainer = document.getElementById('css');
    if (cssContainer) {
        cssContainer.parentNode.removeChild(cssContainer);
        cssContainer = null;
    }
    ReactDOM.render(
        <WithStylesContext onInsertCss={onInsertCssHandler}>
            <Router {...renderProps} />
        </WithStylesContext>,
        document.getElementById('root')
    );
});
