require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture stomach response talk comic install civil army gentle'; 
let testAccounts = [
"0x15c371604a4a59393ab45f29a9fe607ff4d834a16424aef912b739c8b2215435",
"0x5193f4b268d2d60e62db70700760327d72bfe869128bed868cbd0e41fb3bb9d9",
"0xcbf833c0a2c851ee8589131bcae37bf06e818843646822b534ff9509f5e0bdc5",
"0x62bbd43c23c93d8464243c5186f353ae1d9e7d0951dc1278a7a819e0b70c4fef",
"0x2c8d25b105000f91bdc181ca5f32a7e2dc78fc2cfbd48dcedd39d3279c01a479",
"0xbd8ad1c56c8c12c048c806ab53994d4c2cc8250f8d03b6a44c1a390ea0f2c7d2",
"0x3d06d9944d0da046f4380cebe9e5b774dffe1bd795e7eaf1f844cc0c1149b8b5",
"0xc3502338a6195fa670d439136fab0028bf0ed7703c203ca62fbab7907da282b6",
"0x6dff91dce34993da7b2d8629c4613a5286d6cbb359f9180caee4531a1d407128",
"0x0f77d09e530f0044b07dfd1155dac0408b28e658d2c4deb5f0d2c2d171fa807c"
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
