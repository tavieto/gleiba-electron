var col = 'B'
var col_rm = 'C'
var initial_row = 3
var final_row = 43

$(document).ready(() => {

    $('#insert-data').click(() => {
        col = $('#col').val()
        initial_row = $('#linha-inicial').val()
        final_row = $('#linha-final').val()
    })

    $('#submit-file').submit(() =>{
        
    });

});

const spreadsheet = XLSX.readFile(usr + '/Desktop/spreadsheet.xlsx')

var sheet
let index = 0
let max_index = spreadsheet.SheetNames.length

function nextSheet() {
    const name_spreadsheet = spreadsheet.SheetNames[index]
    sheet = spreadsheet.Sheets[name_spreadsheet]
    if(index < max_index) {
        index++
    } else {
        create_spreadsheet()
    }
}

nextSheet()

function add_sheet(value_cell, current_row) {
    let address_cell = col_rm + current_row
    
    sheet[address_cell] = {
        t: 's',
        v: value_cell,
        r: '<t xml:space="preserve">' + value_cell + '</t>',  
        h: value_cell,
        w: value_cell
    }
}

function create_spreadsheet(){
    XLSX.writeFile(spreadsheet, dir + '/result.xlsx')
}