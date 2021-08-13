# [telegraf](https://www.npmjs.com/package/telegraf)-ignore-old-messages

[![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)](# "zero dependency")

Ignores old messages in Telegram chats.

Why? POV:
> Your bot **was off** for an hour • Each of 1000 users sent 2 messages in that time • Bot wakes up and gets all the updates • Tries to **reply to 2000 messages** simultaneously • **most probably** crashes the server

## Quick start

First, run `npm i telegraf-ignore-old-messages`. Then, in your Telegraf app:

```js
const { Telegraf } = require('telegraf')
const ignoreOldMessages = require('telegraf-ignore-old-messages')

const bot = new Telegraf(process.env.BOT_TOKEN)

const skipAfter = 5
// the message skipping interval in minutes. Defaults to 1.

bot.use(
  ignoreOldMessages(skipAfter)
)

// ...

bot.launch()
```

> ignoreOldMessages should be connected first, before all the other message-related middlewares

## Caught a Bug?

1. [Fork](https://help.github.com/articles/fork-a-repo/) this [repository](https://github.com/artginzburg/telegraf-ignore-old-messages/fork) to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Within the Telegraf app you want to test your local development instance of telegraf-ignore-old-messages, just link it to the dependencies: `npm link telegraf-ignore-old-messages`. Instead of the default one from npm, Node.js will now use your clone of the middleware!