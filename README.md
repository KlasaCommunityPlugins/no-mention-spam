<div>
	<br/>
	<p>
	    <a href="https://www.npmjs.com/package/@kcp/no-mention-spam"><img src="https://img.shields.io/npm/v/@kcp/no-mention-spam.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/@kcp/no-mention-spam"><img src="https://img.shields.io/npm/dt/@kcp/no-mention-spam.svg?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://packagephobia.now.sh/result?p=@kcp/no-mention-spam"><img src="https://packagephobia.now.sh/badge?p=@kcp/no-mention-spam" alt="Install Size"></a>
        <a href="https://dev.azure.com/klasacommunityplugins/Plugins/_build/latest?definitionId=4&branchName=master"><img src="https://dev.azure.com/klasacommunityplugins/Plugins/_apis/build/status/No%20Mention%20Spam?branchName=master" alt="Build Status"></a>
	</p>
	<p>
    <a href="https://nodei.co/npm/@kcp/no-mention-spam"><img src="https://nodei.co/npm/@kcp/no-mention-spam.png?downloads=true&stars=true" alt="NPM info"></a>
  </p>
</div>

# No Mention Spam

A Klasa plugin to seamlessly replicate no-mention-spam behavior in Klasa bots

## How To Use

1. Install the plugin.

```bash
npm i @kcp/no-mention-spam

# If you use yarn
yarn add @kcp/no-mention-spam
```

1. Use `@kcp/no-mention-spam` in your client.

```js
const { Client } = require("klasa");
Client.use(require("@kcp/no-mention-spam"));
```

If you use TypeScript

```ts
import { Client } from 'klasa';
import { Client as NMSClient } from '@kcp/no-mention-spam';

Client.use(NMSClient);
```

1. ???... Enjoy!

## License

This project is under the [MIT](https://github.com/KlasaCommunityPlugins/no-mention-spam/blob/master/LICENSE) license.
