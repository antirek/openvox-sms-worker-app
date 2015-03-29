'use strict';

var config = require('./config');
var OpenvoxSmsWorker = require('openvox-sms-worker');

var server = new OpenvoxSmsWorker(config);
server.start();