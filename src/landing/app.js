import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style1.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'whatwg-fetch'
import Promise from 'promise-polyfill';

if(!window.Promise){
    window.Promise = Promise;
}

