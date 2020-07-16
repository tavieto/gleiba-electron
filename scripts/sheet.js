var planilhaFile;
var col;
var linhaInicial;
var linhaFinal;

$(document).ready(() => {

    $('#insert-data').click(() => {
        col = $('#col').val();
        linhaInicial = $('#linha-inicial').val();
        linhaFinal = $('#linha-final').val();
    })

    $('#submit-file').submit(() =>{
        
    });

});

function indentificaPlanilha() {
    let planilhas = XLSX.readFile('/sheets/spreadsheet.xlsx');

    let nomeDaPlanilha = planilhas.SheetNames[0];
    var planilha = planilhas.Sheets[nomeDaPlanilha];
}