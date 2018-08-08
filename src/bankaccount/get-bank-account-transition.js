var Hyperwallet = require("hyperwallet-sdk");
var Utils = require("../utils.js");
var EncryptionConfig = require("../hyperwallet-encription-config.js");

var username = process.argv[2];
var password = process.argv[3];
var programToken = process.argv[4];
var userToken = process.argv[5];
var bankAccountToken = process.argv[6];
var statusTransitionToken = process.argv[7];
var encryptionEnabled = process.argv[8] || 'false';

var encryptionData = null;
if (encryptionEnabled === 'true') {
    encryptionData = {
        clientPrivateKeySetPath : EncryptionConfig.CLIENT_PRIVATE_KEYSET_PATH,
        hyperwalletKeySetPath : EncryptionConfig.HYPERWALLET_KEYSET_PATH
    };
}

var client = new Hyperwallet({
    username: username,
    password: password,
    programToken: programToken,
    encryptionData: encryptionData
});

client.getBankAccountStatusTransition(userToken, bankAccountToken, statusTransitionToken, Utils.printResponse);