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
  
  var response = ui.prompt('Currently selected cells are: ' + selectedRange + ', if this is not correct enter new range using A1 notation:', ui.ButtonSet.OK_CANCEL);

  var userRange = response.getResponseText();
  
  if (userRange != ""){
    selectedRange = userRange;
  }

  listAllActivities(selectedRange);

  function listAllActivities(range){
    var html = HtmlService.createHtmlOutputFromFile('Index');

    SpreadsheetApp.getUi().showModalDialog(html,range);

  }
}