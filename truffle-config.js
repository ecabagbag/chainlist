module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4600000 // Specify gas amount else you'll encounter --> Error: Exceeds block gas limit
    }
  }
};
