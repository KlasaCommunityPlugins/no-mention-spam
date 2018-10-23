const { Event } = require('klasa');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { event: 'settingsUpdateEntry' });
	}

	async run(settings, updated) {
		if (updated.every(key => !key.startsWith('no-mention-spam'))) return;

		const guild = this.client.guilds.get(settings.id);
		guild.nms.bucket = guild.settings['no-mention-spam'].mentionsAllowed;
		guild.nms.cooldown = guild.settings['no-mention-spam'].timePeriod * 1000;
	}

};
