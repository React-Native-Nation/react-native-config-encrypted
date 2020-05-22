#!/usr/bin/env node

var fs = require('fs')
  , ini = require('ini')
  , crypto = require('crypto-js');

const args = process.argv.splice(2);
const [file, key, property] = args;
const config = ini.parse(fs.readFileSync(file, 'utf-8'));
const msg = config[property];
const encrypted = crypto.AES.encrypt(String(msg), key).toString();
console.log(encrypted);