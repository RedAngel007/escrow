require('dotenv').config();
const ethers = require('ethers');

async function main() {
    const factory = await hre.ethers.getContractFactory('Escrow');
    const escrow = await factory.deploy();

    await escrow.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
