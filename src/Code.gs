function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Generate Survey')
      .addItem('Generate survey', 'generateFieldPrompt')
      .addToUi();
}

function generateFieldPrompt() {
  var ui = SpreadsheetApp.getUi();
  
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var selection = activeSheet.getSelection();
  var selectedRange = selection.getActiveRange().getA1Notation();

  Logger.log(selection.getActiveRange().getA1Notation());
  
  var response = ui.prompt('NOT WORKING: Currently selected cells are: ' + selectedRange + ', if this is not correct enter new range using A1 notation:', ui.ButtonSet.OK_CANCEL);

  var userRange = response.getResponseText();
  
  //if (userRange != ""){
    //selectedRange = userRange;
  //}

  var numberOfColumns = activeSheet.getActiveRange().getWidth();
  var values = activeSheet.getActiveRange().getValues();

  listAllActivities(ui, numberOfColumns, values);
}

function listAllActivities(ui, selectedRange, activeSheet){

  var html = HtmlService.createHtmlOutputFromFile('ListAllActivities');
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Test');

  var generatedHtml = '<!DOCTYPE html> <html> <head> <base target="_top"> </head> <body>'
  for (i=0;i<5;i++){
    html = html + Utilities.formatString('<input type="checkbox" name="checkboxGroup" id="%s" value="%s" checked="yes"> <label> %s </label> <br>', Number(i), Number(i) ,Number(i));
  }
  html += '<input type="button" value="Next" onclick="google.script.host.close()" />'
  html = html + '</body> </html>'

  var uiHtml = HtmlService.createHtmlOutput(html);

  ui.showModalDialog(uiHtml, 'Uncheck boxes for lectures that need to be excluded');
}
