# No Mention Spam [![Build Status](https://dev.azure.com/klasacommunityplugins/Plugins/_apis/build/status/No%20Mention%20Spam?branchName=master)](https://dev.azure.com/klasacommunityplugins/Plugins/_build/latest?definitionId=4&branchName=master)

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
