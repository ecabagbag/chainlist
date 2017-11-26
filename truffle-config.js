module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4600000 // Specify gas amount else you'll encounter --> Error: Exceeds block gas limit
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4, // id for rinkeby
      from: "0x9051ad6c02655f32d3badbe6918e02cd359dca00", // From C:\Users\elmer\Documents\Ethereum.With.Baldy\rinkeby\keystore
      gas: 4600000 // Specify gas amount else you'll encounter --> Error: Exceeds block gas limit
    }
  }
};
