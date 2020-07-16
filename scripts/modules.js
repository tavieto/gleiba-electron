const { Builder, Key, By, until, Options } = require('selenium-webdriver')
const form = require('formidable')
const XLSX = require('xlsx')
const fs = require('fs')

window.$ = window.jQuery = require('jquery')
