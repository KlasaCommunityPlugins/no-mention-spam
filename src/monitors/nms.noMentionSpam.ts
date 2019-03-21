// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, KlasaMessage, Monitor, MonitorStore } from 'klasa';

export default class extends Monitor {
	private readonly roleValue = this.client.options.nms.role;
	private readonly everyoneValue = this.client.options.nms.everyone;

	constructor(client: Client, store: MonitorStore, file: string[], directory: string) {
		super(client, store, file, directory, { ignoreOthers: false, ignoreBots: false });
	}

	async run(message: KlasaMessage) {
		if (!message.guild || !message.guild.settings.get('no-mention-spam.enabled')) return;

		const mentions = message.mentions.users.filter((user) => !user.bot && user !== message.author).size +
			(message.mentions.roles.size * this.roleValue) +
			(Number(message.mentions.everyone) * this.everyoneValue);

		if (!mentions) return;

		const ratelimit = message.guild.nms.acquire(message.author.id);

		try {
			for (let i = 0; i < mentions; i++) ratelimit.drip();
			// @ts-ignore
			if (ratelimit.remaining / ratelimit.bucket < 0.2) this.client.emit('mentionSpamWarning', message);
		} catch {
			this.client.emit('mentionSpamExceeded', message);
		}
	}
}
