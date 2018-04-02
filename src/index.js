import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
const config = require('../config');
import ReduxPromise from 'redux-promise';

const api_key = config.youtubeApiKey.key;
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div> 
           <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
            </div>);
    }
}


ReactDOM.render( <Index /> , document.querySelector('.container'));