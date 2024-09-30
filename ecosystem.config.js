module.exports = {
  apps: [
    {
      name: 'timesheet-sequelize',
      script: 'npm run serve:production',
      instances: 1, // max instance = 0 | max
      exec_mode: 'fork',
      watch: false, // default: watch = true
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
