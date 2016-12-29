'use strict';

import View from '../modules/view';
import chatForm from '../components/chatForm/chatForm';


export default class ChatView extends View {
	constructor(tag, {user}) {
		super('js-chat');
		this._user = user;
	}

	init() {
		this.chatForm = new chatForm();
		this.chatForm.renderTo(this.getElement());
		this.chatForm._get().setAttribute('onsubmit', 'return false; ');
	}
}
