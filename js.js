function doGet() {
  const html = HtmlService.createTemplateFromFile('index')
  return html.evaluate()
}


function getNameForAutoComplete() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var statesSheet = ss.getSheetByName("AUTOCOMPLETES");
  var statesRange = statesSheet.getRange("A2:A");
  var statesValues = statesRange.getValues();
  return statesValues;

}

function enviarDadosParaAplanilha(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getSheetByName('DATA')
  
  sheet.appendRow(data)
}
