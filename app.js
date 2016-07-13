"use strict";

const RtmClient = require('@slack/client').RtmClient,
    MemoryDataStore = require('@slack/client').MemoryDataStore,
    RTM_EVENTS = require('@slack/client').RTM_EVENTS,
    isPhone = require('is-phone'),
    token = require('./.token').SLACK_TOKEN;

const rtm = new RtmClient(token, {
    logLevel: 'error',
    // logLevel: 'debug',
    // Initialise a data store for our client, this will load additional helper functions for the storing and retrieval of data
    dataStore: new MemoryDataStore(),
    // Boolean indicating whether Slack should automatically reconnect after an error response
    autoReconnect: true,
    // Boolean indicating whether each message should be marked as read or not after it is processed
    autoMark: true,
});

/* proxy for now, for flexibility in this area later */
const setState = (newState) => {
    state = newState;
}

const states = {
    DEFAULT: "DEFAULT",
    GET_NAME: "GET_NAME",
    GET_ADDRESS: "GET_ADDRESS",
    GET_PHONE: "GET_PHONE",
    GET_GENDER: "GET_GENDER"
}

/* init state, set initial state */
let state = states.DEFAULT,
    userData = {};

/* functions that send responses and set state, called based on state */

const handlers = {};

handlers.DEFAULT = (message) => {
    console.log(`${message.text}\n${state}`);
    rtm.sendMessage("Welcome! What's your name?", message.channel);
    setState(states.GET_NAME);
    console.log(`${message.text}\n${state}`);
}

handlers.GET_NAME = (message) => {
    console.log(`${message.text}\n${state}`);
    rtm.sendMessage("Ok, what's your address?", message.channel);
    setState(states.GET_ADDRESS);
    console.log(`${message.text}\n${state}`);
}

handlers.GET_ADDRESS = (message) => {
    console.log(message.text, '\n' + state);
    rtm.sendMessage("What's your phone number?", message.channel);
    setState(states.GET_PHONE);
    console.log(`${message.text}\n${state}`);
}

handlers.GET_PHONE = (message) => {
    if(isPhone(message.text)) {
        rtm.sendMessage("What's your gender?", message.channel);
        setState(states.GET_GENDER);
    } else {
        rtm.sendMessage("Oops, that doesn't look valid. Try again with this format: QQQ QQQ QQQQ", message.channel);
    }
}

handlers.GET_GENDER = (message) => {
    console.log(`${message.text}\n${state}`);
    listUserData(message);
    setState(states.DEFAULT);
    console.log(`${message.text}\n${state}`);
}

const router = (message) => {
    handlers[state](message);
}

// Listens to all `message` events from the team
rtm.on(RTM_EVENTS.MESSAGE, (message) => {
    userData[state] = message.text;
    router(message);
});

const listUserData = (message) => {
    rtm.sendMessage(`All set! Here's what you entered:\n\n
    *Name:* ${userData.GET_NAME}\n
    *Address:* ${userData.GET_ADDRESS}\n
    *Phone:* ${userData.GET_PHONE}\n
    *Gender:* ${userData.GET_GENDER}`, message.channel);
}

rtm.start();