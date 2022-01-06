require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/DUck02oJQ2hU5_asJbdvok7_DlwdX0M2",
      accounts: [
        "fed8bfecd3d7205b9b3ae58aca3896f08128e6040de052e3c775b70266451385",
      ],
    },
  },
};
