module.exports = {
  apps: [
    {
      name: "brprop-api",
      script: "./server/index.js",
      cwd: "/var/www/brprop",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
