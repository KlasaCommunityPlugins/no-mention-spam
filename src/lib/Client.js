const { Client, util: { mergeDefault } } = require('klasa');
const path = require('path');

const { clientOptions } = require('./util/constants'); 

Client.defaultGuildSchema
	.add('no-mention-spam', folder => folder
		.add('enabled', 'boolean', { default: false })
		.add('mentionsAllowed', 'number', { default: 25 })
		.add('timePeriod', 'number', { default: 7 })
	);

class NMSClient extends Client {

	/**
	 * Constructs the klasa-tags client
	 * @since 0.0.1
	 * @param {ClientOptions} config The config to pass to the new client
	 */
	constructor(config) {
		super(config);
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		mergeDefault(clientOptions, this.options);

		const coreDirectory = path.join(__dirname, '../');

		this.monitors.registerCoreDirectory(coreDirectory);
		this.events.registerCoreDirectory(coreDirectory);
	}

}

module.exports = NMSClient;