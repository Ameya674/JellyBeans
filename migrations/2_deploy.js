const JellyBean = artifacts.require("JellyBean");
const JellyBeanSale = artifacts.require("JellyBeanSale");

module.exports = function (deployer) {
  deployer.deploy(JellyBean, 1000000).then(function() {
    let tokenPrice = 1000000000000000 // 0.001 ether.
    return deployer.deploy(JellyBeanSale, JellyBean.address, tokenPrice);
  });
};