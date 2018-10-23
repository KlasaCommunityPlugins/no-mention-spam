const { Monitor } = require('klasa');

module.exports = class extends Monitor {

	constructor(...args) {
		super(...args, {
			ignoreOthers: false,
			ignoreBots: false
		});

		this.roleValue = this.client.options.nms.role;
		this.everyoneValue = this.client.options.nms.everyone;
	}

	async run(message) {
		if (!message.guild || !message.guild.settings['no-mention-spam'].enabled) return;

		const mentions = message.mentions.users.size +
			(message.mentions.roles.size * this.roleValue) +
			(Number(message.mentions.everyone) * this.everyoneValue);
		const rateLimit = message.guild.nms.acquire(message.author.id);

		try {
			for (let i = 0; i < mentions; i++) rateLimit.drip();
		} catch {
			this.client.emit('mentionSpamExceeded', message);
		}
	}

};
