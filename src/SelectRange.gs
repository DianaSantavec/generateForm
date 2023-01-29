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