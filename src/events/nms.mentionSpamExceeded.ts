// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Event, KlasaMessage } from 'klasa';

export default class NMSMentionSpamExceeded extends Event {
	event = 'mentionSpamExceeded';

	async run(message: KlasaMessage) {
		await message.guild.members.ban(message.author.id, { days: 7, reason: 'Automatic: Mention Spam threshold exceeded' });
		return message.send(`${message.author} has been banned for exceeding this guild's mention spam threshold`);
	}
}
