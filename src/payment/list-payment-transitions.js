var Hyperwallet = require("hyperwallet-sdk");
var Utils = require("../utils.js");
var EncryptionConfig = require("../hyperwallet-encription-config.js");

var username = process.argv[2];
var password = process.argv[3];
var programToken = process.argv[4] || "prg-44a64920-45fc-4578-a7f9-e14813b3ed54";
var paymentToken = process.argv[5] || "";
var encryptionEnabled = process.argv[6] || 'false';

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

client.listPaymentStatusTransitions(paymentToken, {}, Utils.printResponse);