var driver
async function create_browser() {
    driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://consultaaluno.educacao.ba.gov.br/')
}

async function capture() {
    let current_row = initial_row

    for(current_row; current_row <= final_row; current_row++) {

        let address_cell = col + current_row
        let cell = sheet[address_cell]
        let value_cell = (cell ? cell.v : undefined)
        let rm = value_cell

        let input
        
        let email

        await driver.findElement(By.id('optMatricula')).click()

        console.log(rm)
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
    next_sheet()
}

$(document).ready(() => {
    $('#start').click(() => {
        async function start() {
            console.log("start")

            await create_browser()

            let actually_sheet = index -1
            while(actually_sheet < max_index) {
                
                console.log("capture")
                await capture()
                actually_sheet++
            }
            driver.quit()
            create_spreadsheet()
        }
        
        start()

    })
})