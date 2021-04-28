require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender spot jar raise outside collect coral light army gauge'; 
let testAccounts = [
"0xc49e34031adf7c76297f24077c166bf20499a48ff3148533d7f2b77ba27036ee",
"0x62ef09defb66aacc72647986cd573cf5a19f8a60a31eac0564fcd5248fa5ea92",
"0x4077f669f73502a8fdb5ae0463acd8c91a71f427dc17e02c37034bb9a4ddb791",
"0xad6af2093f2e5bc020f4bf2b4518ccc0906f76db1995c8a9bded9e3f29995d9b",
"0x64bc512c62d58a8dfb8301ee6252b67c5410c1ff5d05550ba9b2f1f04ff0fcf1",
"0x7a3cad27a5ed91ddc774860e9b8f3e6b20132112447a4288ea2fa7e0f75fa34b",
"0xe7ee8e7752decd04097b90408f9d33bcb82e5a5fb24d0934c84ffed025e0cea8",
"0xf9736fe010bbeec024ee70ccc405434a25695b742f83baba66d64680aa822305",
"0xacd591f698b34bfd43e031795d4a10d578ae29fef56b0fa58249accc9d75e8b1",
"0x4a4a06ad2c535b9e1a7a772333a1e4fe4d197b99d2cb53f07919613972266de6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
