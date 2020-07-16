async function capture() {
    let driver = new Builder().forBrowser('chrome').build()
    
    await driver.get('http://consultaaluno.educacao.ba.gov.br/')
    
}

$(document).ready(() => {
    $('#start').click(() => {
        capture();
    })
})