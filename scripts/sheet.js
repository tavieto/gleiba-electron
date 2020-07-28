var col = 'B'
var col_rm = 'C'
var initial_row = 2
var final_row

$(document).ready(() => {

    $('#insert-data').click(() => {
        col = $('#col').val()
        initial_row = $('#linha-inicial').val()
    })

    $('#submit-file').submit(() =>{
        
    });

});

const spreadsheet = XLSX.readFile(usr + '/Desktop/spreadsheet.xlsx')

var sheet
var index = 0
var max_index = spreadsheet.SheetNames.length

function next_sheet() {
    const name_spreadsheet = spreadsheet.SheetNames[index]
    sheet = spreadsheet.Sheets[name_spreadsheet]
    if(index < max_index) {
        index++
        what_final_row()
    }
}

next_sheet()


function what_final_row() {
    let how_many_cell = 0
    let while_condition = true
    let current_row = initial_row
    do {
        let address_cell

        address_cell = col + current_row

        if(sheet[address_cell] != undefined) {
            how_many_cell++
            
        } else {
            while_condition = false
            final_row = initial_row + (how_many_cell - 1)
        }

        current_row++

    } while(while_condition)
}

what_final_row()

function add_sheet(value_cell, current_row) {
    let address_cell = col_rm + current_row
    
    sheet[address_cell] = {
        t: 's',
        v: value_cell,
        r: '<t xml:space="preserve">' + value_cell + '</t>',  
        h: value_cell,
        w: value_cell
    }

    let refe = "!ref"
    sheet[refe] = "A1:" + address_cell
    
}

function create_spreadsheet(){
    console.log(spreadsheet)
    XLSX.writeFile(spreadsheet, dir + '/result.xlsx')
}