async function capture() {
    let driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://consultaaluno.educacao.ba.gov.br/')

    let current_row = initial_row

    for(current_row; current_row <= final_row; current_row++) {

        let address_cell = col + current_row
        let cell = sheet[address_cell]
        let value_cell = (cell ? cell.v : undefined)
        let rm = value_cell

        let input
        
        let email

        input = await driver.findElement(By.id('matricula')).sendKeys(rm)
        try {
            email = await driver.wait(until.elementLocated(By.tagName('b')), 2500).getText()
        } catch {
            try{
                input = await driver.findElement(By.id('matricula')).sendKeys(Key.SPACE)
                email = await driver.wait(until.elementLocated(By.tagName('b')), 2500).getText()
            } catch {
                email = 'Não encontrado'
            } 
        }
        add_sheet(email, current_row)
        input = await driver.findElement(By.id('matricula')).clear()
    }
    nextSheet()
    driver.quit()
}

$(document).ready(() => {
    $('#start').click(() => {
        capture();
    })
})