const { Composer } = require('telegraf');

function dateInSeconds() {
  return Math.round(Date.now() / 1000);
}

module.exports = function ignoreOldMessages(afterMinutes = 1) {
  const afterSeconds = afterMinutes * 60;

  return Composer.on('message', (ctx, next) => {
    if (dateInSeconds() - ctx.message.date < afterSeconds) {
      // bypass if message was sent less than `afterMinutes` minutes ago
      return next();
    }
  });
};
