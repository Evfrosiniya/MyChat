'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import Router from './modules/router';
import ChatView from './views/chatView';

const options = {};

(new Router())
	.addRoute('/', ChatView, options)
	.start({}, options);
