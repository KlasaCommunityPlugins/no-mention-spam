// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, Guild, Structures } from 'discord.js';
import { RateLimitManager } from 'klasa';

class NMSGuild extends Guild {
	/**
	 * The ratelimit management for the no-mention-spam behavior
	 * @since 0.0.1
	 * @type {RateLimitManager}
	 * @protected
	 */
	nms = new RateLimitManager(
		this.settings.get('no-mention-spam.mentionsAllowed'),
		this.settings.get('no-mention-spam.timePeriod') * 1000,
	);

	constructor(client: Client, data: object) {
		super(client, data);

		if (this.client.ready) {
			this.settings.sync()
				.then(() => {
					this.nms.bucket = this.settings.get('no-mention-spam.mentionsAllowed');
					this.nms.cooldown = this.settings.get('no-mention-spam.timePeriod') * 1000;
				})
				.catch(() => null);
		}
	}
}

Structures.extend('Guild', () => NMSGuild);

export { NMSGuild };

declare module 'discord.js' {
	interface Guild {
		nms: RateLimitManager;
	}
}
