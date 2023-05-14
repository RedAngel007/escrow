require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const {LOCAL_URL, PRIVATE_KEY} = process.env;

module.exports = {
  solidity: '0.8.17',
  paths: {
    artifacts: './app/src/artifacts',
  },
  networks: {
    local_host: {
      url: LOCAL_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
