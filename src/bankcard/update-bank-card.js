var Hyperwallet = require("hyperwallet-sdk");
var Utils = require("../utils.js");

var username = process.argv[2];
var password = process.argv[3];
var programToken = process.argv[4] || "prg-44a64920-45fc-4578-a7f9-e14813b3ed54";
var userToken = process.argv[5] || "usr-0fb6d624-f18d-480d-b1e7-f48f534bbd75";
var bankCardToken = process.argv[6] || "trm-4b3d6b2b-8959-4e19-b9dc-1e0b923bbbb3";
var dateOfExpiry = process.argv[7] || "2030-12";

var client = new Hyperwallet({
    username: username,
    password: password,
    programToken: programToken,
});

client.updateBankCard(userToken, bankCardToken, {
    "dateOfExpiry": dateOfExpiry,
}, Utils.printResponse);