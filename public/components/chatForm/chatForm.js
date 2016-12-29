'use strict';

import Form from '../form/form';
import Block from '../block/block';

export default class chatForm extends Form {
	constructor(options) {
		super(options);
		this._header = new Block('h1', {
			attrs: {
				class: 'header'
			}
		});
		this._header._get().innerText = 'Chat';

		this._chat = new Block('div', {
			attrs: {
				class: 'chat'
			}
		});
		this._message = new Block('textarea', {
			attrs: {
				class: 'messagebox',
				autofocus: true

			}
		});


		this._button = new Block('button', {
			attrs: {
				class: 'button'
			}
		});

		this._button._get().innerText = 'Отправить';
		this._button._get().addEventListener('click', this.sendMessage.bind(this));
		this._message._get().addEventListener('keydown', function (e) {
			if (e.keyCode === 13) {
				this.sendMessage();
			}
		}.bind(this));


		this.append(this._header._get());
		this.append(this._chat._get());
		this.append(this._message._get());
		this.append(this._button._get());
	}

	sendMessage() {
		const messages = document.querySelector('.chat');
		const message = document.createElement('div');
		message.classList.add('chat__message__my');
		messages.appendChild(message);
		message.innerHTML = document.querySelector('.messagebox').value;
		document.querySelector('.messagebox').value = '';
		const answer = document.createElement('div');
		answer.classList.add('chat__message');
		messages.appendChild(answer);
		answer.innerHTML = 'Сообщение получено';
		messages.scrollTop = messages.scrollHeight;
	}
}
