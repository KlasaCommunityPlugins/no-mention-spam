const { Event } = require('klasa');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			event: 'klasaReady',
			once: true
		});
	}

	async run() {
		for (const guild of this.client.guilds.values()) {
			guild.nms.bucket = guild.settings['no-mention-spam'].mentionsAllowed;
			guild.nms.cooldown = guild.settings['no-mention-spam'].timePeriod * 1000;
		}
	}

};
