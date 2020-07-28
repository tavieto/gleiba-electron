const { Builder, Key, By, until, Options } = require('selenium-webdriver')
const form = require('formidable')
const XLSX = require('xlsx')
const fs = require('fs')
const os = require('os')

window.$ = window.jQuery = require('jquery')

var usr = os.userInfo().homedir;

var usr = usr.replace('\\', '/');
var usr = usr.replace('\\', '/');

var dir = usr + '/Documents/Gleiba'

if(fs.existsSync(dir)) {
    undefined
} else {
    fs.mkdir(dir, (err) => {
        if(err) throw err;
    })
}