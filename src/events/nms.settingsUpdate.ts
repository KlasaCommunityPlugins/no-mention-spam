// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Event, Settings, SettingsUpdateResultEntry } from 'klasa';

export default class NMSSettingsUpdateEntry extends Event {
	event = 'settingsUpdateEntry';

	run(settings: Settings, updated: SettingsUpdateResultEntry[]) {
		if (updated.every(({ data: [key] }) => !key.startsWith('no-mention-spam'))) return;

		const guild = this.client.guilds.get(settings.id)!;
		guild.nms.bucket = guild.settings.get('no-mention-spam.mentionsAllowed');
		guild.nms.cooldown = guild.settings.get('no-mention-spam.timePeriod') * 1000;
	}
}
