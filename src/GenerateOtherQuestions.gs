function chooseOtherQuestions(){
  var htmlDialog = HtmlService.createHtmlOutputFromFile('OtherQuestionsDialog.html');
  var ui = SpreadsheetApp.getUi();
  ui.showModalDialog(htmlDialog, 'Select questions you would like to add to form');
}


function doNothing(){
}