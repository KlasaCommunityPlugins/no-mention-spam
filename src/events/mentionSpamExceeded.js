const { Event } = require('klasa');

module.exports = class extends Event {

	async run(message) {
		await message.guild.ban(message.author.id);
		return message.send(`${message.author} has been banned for exceeding this guild's mention spam threshold`);
	}

};
