const path = require("path");
// const HDWalletProvider = require('truffle-hdwallet-provider');
// const fs = require('fs');

// let secrets;

// if (fs.existsSync('secrets.json')) {
//  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
// }

module.exports = {

  // plugins: ["truffle-security"],

  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // contracts_build_directory: path.join(__dirname, "client/src/contracts"),

  networks: {
    development: {
      network_id: "*",
      host: 'localhost',
      port: 7545
    },
    // rinkeby: {
    //   provider: new HDWalletProvider(secrets.mnemonic, "https://rinkeby.infura.io/v3/"+secrets.infuraApiKey),
    //   network_id: '4'
    // }
  }
};
