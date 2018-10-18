module.exports = {
  networks: {
    development: { // This one is optional and reduces the scope for failing fast
      host: "localhost",
      port: 8545,
      network_id: "*"//, // Match any network id
      //gas: 500000
    },
    net42: {
      host: "localhost",
      port: 8545,
      network_id: 42,
      gas: 500000
    }
  }
};
