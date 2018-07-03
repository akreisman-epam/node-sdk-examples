var Hyperwallet = require("hyperwallet-sdk");
var Utils = require("../utils.js");

var username = process.argv[2];
var password = process.argv[3];
var programToken = process.argv[4] || "prg-44a64920-45fc-4578-a7f9-e14813b3ed54";
var sourceToken = process.argv[5] || "usr-b4a1f0bd-cbf7-4467-aa6f-4445dea7e67d";

var client = new Hyperwallet({
    username: username,
    password: password,
    programToken: programToken,
});

client.listTransfers({
    limit: 5,
    sourceToken: sourceToken,
}, Utils.printResponse);