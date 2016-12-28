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

		this._chat = new Form();

		this.append(this._header._get());
	}
}
