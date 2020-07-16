//const { Builder, Key, By, until, Options } = require('selenium-webdriver')

async function capture() {
    let driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://consultaaluno.educacao.ba.gov.br/')

    let input = await (await driver).findElement(By.id('matricula'))
    let email
    let matricula = '9040434'

    input.sendKeys(matricula)
    input.sendKeys(Key.SPACE)

    try {
        email = await driver.wait(until.elementLocated(By.tagName('b')), 1000).getText()
    } catch {
        email = 'Não encontrado'
    }
    console.log(email)
    input.clear()
}

$(document).ready(() => {
    $('#start').click(() => {
        capture();
    })
})