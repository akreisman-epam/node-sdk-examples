var Hyperwallet = require("hyperwallet-sdk");
var Utils = require("../utils.js");

var username = process.argv[2];
var password = process.argv[3];
var programToken = process.argv[4] || "prg-44a64920-45fc-4578-a7f9-e14813b3ed54";
var userToken = process.argv[5] || "usr-0fb6d624-f18d-480d-b1e7-f48f534bbd75";
var statusTransitionToken = process.argv[6] || "";

var client = new Hyperwallet({
    username: username,
    password: password,
    programToken: programToken,
});

client.getUserStatusTransition(userToken, statusTransitionToken, Utils.printResponse);