var Hyperwallet = require("hyperwallet-sdk");
var Utils = require("../utils.js");
var EncryptionConfig = require("../hyperwallet-encription-config.js");

var username = process.argv[2];
var password = process.argv[3];
var programToken = process.argv[4] || "prg-44a64920-45fc-4578-a7f9-e14813b3ed54";
var userToken = process.argv[5] || "usr-0fb6d624-f18d-480d-b1e7-f48f534bbd75";
var cardNumber = process.argv[6] || "4216701111102221";
var encryptionEnabled = process.argv[7] || 'false';

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

client.createBankCard(userToken, {
    "type":"BANK_CARD",
    "cardNumber": cardNumber,
    "dateOfExpiry":"2020-01",
    "transferMethodCountry":"US",
    "transferMethodCurrency":"USD"
}, Utils.printResponse);