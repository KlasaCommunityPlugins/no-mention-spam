const { Client: { plugin } } = require('klasa');

module.exports = {
	KlasaNMSGuild: require('./lib/extensions/KlasaNMSGuild'),
	NMSClient: require('./lib/Client'),
	Client: require('./lib/Client'),
	[plugin]: require('./lib/Client')[plugin]
};
