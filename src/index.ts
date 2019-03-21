// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client as KlasaClient } from 'klasa';

import { NoMentionSpamClient as Client } from './lib/Client';
export { NMSGuild } from './lib/extensions/NMSGuild';
export { Client };
// @ts-ignore
exports[KlasaClient.plugin] = Client[KlasaClient.plugin];
/**
 * @external KlasaClient
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/KlasaClient}
 */
/**
 * @external Piece
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Piece}
 */
/**
 * @external Store
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Store}
 */
/**
 * @external KlasaClientOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaClientOptions}
 */
/**
 * @external KlasaPieceDefaults
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaPieceDefaults}
 */
/**
 * @external PieceOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/PieceOptions}
 */
