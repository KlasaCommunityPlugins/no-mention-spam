// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Event } from 'klasa';

export default class extends Event {
	event = 'klasaReady';
	once = true;

	run() {
		for (const guild of this.client.guilds.values()) {
			guild.nms.bucket = guild.settings.get('no-mention-spam.mentionsAllowed');
			guild.nms.cooldown = guild.settings.get('no-mention-spam.timePeriod') * 1000;
		}
	}
}
