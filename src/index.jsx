import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import immutable from 'immutable';
import { AppContainer } from 'react-hot-loader';
import { ModeSwitch } from 'chayns-components';
import App from './components/App';
import rootReducer from './reducers';
import { DEV, QA } from './constants/environment';
import SERVER_URL from './constants/server-url';
import { loadData } from './actions/fetchData';

delete AppContainer.prototype.unstable_handleError; // disables ErrorPage of HotModuleReplacement

if (DEV || QA) {
    const installDevTools = require('immutable-devtools');
    installDevTools(immutable);
}

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

if (DEV || QA) {
    store.subscribe(() => console.log('state:', store.getState()));
}

/**
 * Renders a component as entry point of your application into the tapp element.
 * @param Component
 */
const tappElement = document.querySelector('.tapp');
const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        tappElement
    );
};

/**
 * The function waits till the chayns api is successfully loaded and
 * every additional functionality of it is ready to go,
 * renders the App component then
 * and finally initializes the ModeSwitch.
 * @return {Promise.<void>}
 */
async function init() {
    try {
        console.debug('ServerUrl for current environment:', SERVER_URL);

        await chayns.ready;

        render(App);

        // use hot-module-replacement if available
        if (module.hot) {
            module.hot.accept('./components/App', () => render(App));
        }

        /**
         * Initialize the ModeSwitch. The available modes are 'user mode' (default) and 'chayns® manager'.
         * You can specify content to display according to the current mode (see chayns 'mode' component).
         */
        ModeSwitch.init({
            groups: [{
                id: 1,
                uacIds: [1],
                name: 'chayns® manager'
            }]
        });

        // dispatch async example action
        store.dispatch(loadData());
    } catch (err) {
        console.warn('no chayns environment found');
    }
}

init();
