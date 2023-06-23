module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "key.pem",
      user: "ubuntu",
      host: "3.6.89.127",
      ref: "origin/temp",
      repo: "git@github.com:Procurre2-0/procurre_complete.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh &&npm install --force && npm run build  && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
