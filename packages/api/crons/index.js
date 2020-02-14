const config = require('rob-config');
const cron = require('node-cron');

const { cronExpression, timezone } = config.get('cron');

module.exports = () => {
  cron.schedule(cronExpression, require('./daily_fetch'), {
    // scheduled: true,
    timezone: timezone,
  });
};
