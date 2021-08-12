const { Composer } = require('telegraf');

const defaultConfig = 1;
// default message skipping interval

module.exports = function ignoreOldMessages(afterMinutes = defaultConfig) {
  const afterSeconds = afterMinutes * 60;

  return Composer.on('message', (ctx, next) => {
    const currentDateInSeconds = Date.now() / 1000;

    if (currentDateInSeconds - ctx.message.date < afterSeconds) {
      // bypass if message date was less then `afterSeconds` ago
      return next();
    }

    // console.log(
    //   `Ignoring message from ${ctx.from.id} at ${ctx.chat.id} (${currentDateInSeconds}:${ctx.message.date})`,
    // );
  });
};
