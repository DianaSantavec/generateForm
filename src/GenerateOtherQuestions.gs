function chooseStartQuestions(){
  var htmlDialog = HtmlService.createHtmlOutputFromFile('StartQuestionsDialog.html');
  var ui = SpreadsheetApp.getUi();
  ui.showModalDialog(htmlDialog, 'Select questions you would like to add to form');
}

function chooseEndQuestions(){
  var htmlDialog = HtmlService.createHtmlOutputFromFile('EndQuestionsDialog.html');
  var ui = SpreadsheetApp.getUi();
  ui.showModalDialog(htmlDialog, 'Select questions you would like to add to the end of the form');
}


function doNothing(){
}