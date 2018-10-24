const { Event } = require('klasa');

module.exports = class extends Event {

	async run(message) {
		await message.guild.ban(message.author.id, { days: 7, reason: 'Automatic: Mention Spam threshold exceeded'});
		return message.send(`${message.author} has been banned for exceeding this guild's mention spam threshold`);
	}

};
