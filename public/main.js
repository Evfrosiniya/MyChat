'use strict';

import './css/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './modules/router';
import ChatView from './views/chatView';

const options = {};

(new Router())
	.addRoute('/', ChatView, options)
	.start({}, options);
