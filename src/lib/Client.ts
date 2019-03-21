// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, KlasaClientOptions, util } from 'klasa';
import { join } from 'path';
import { OPTIONS } from './util/CONSTANTS';

Client.defaultGuildSchema
	.add('no-mention-spam', (folder) => folder
		.add('enabled', 'boolean')
		.add('mentionsAllowed', 'number', { default: 25 })
		.add('timePeriod', 'number', { default: 7 })
	);

/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
export class NoMentionSpamClient extends Client {
	/**
	 * Constructs the NMS client.
	 * @since 0.0.1
	 * @param {external:KlasaClientOptions} [config] The config to pass to the new client
	 */
	constructor(options?: KlasaClientOptions) {
		super(options);
		// @ts-ignore
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		const typedThis = this as unknown as NoMentionSpamClient;
		util.mergeDefault(OPTIONS, typedThis.options);

		const coreDirectory = join(__dirname, '../');

		// @ts-ignore
		typedThis.monitors.registerCoreDirectory(coreDirectory);
		// @ts-ignore
		typedThis.events.registerCoreDirectory(coreDirectory);
	}
}

declare module 'discord.js' {
	interface ClientOptions {
		nms: {
			role: number;
			everyone: number;
		};
	}
}
