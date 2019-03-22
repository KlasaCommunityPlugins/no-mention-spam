// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Event, KlasaMessage } from 'klasa';

export default class NMSMentionSpamWarning extends Event {
	event = 'mentionSpamWarning';

	run(message: KlasaMessage) {
		return message.send(`${message.author}: Be careful mentioning any more, as you are about to be banned for exceeding this guild's mention threshold`);
	}
}
