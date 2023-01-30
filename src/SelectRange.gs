function generateSelectCoordinatesSidebar() {

  var html = HtmlService.createHtmlOutputFromFile('SelectRange');
  var ui = SpreadsheetApp.getUi();
  
  ui.showSidebar(html);
}

function getSelectedCoordinates(){
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var selection = activeSheet.getSelection();
  var selectedRange = selection.getActiveRange().getA1Notation();
  return selectedRange;
}

function closeCoordinateSidebar(){
  Utilities.sleep(1000);
  var activeSheet = SpreadsheetApp.getActiveSheet();

  var numberOfColumns = activeSheet.getActiveRange().getWidth();
  var values = activeSheet.getActiveRange().getValues();

  listAllActivities(numberOfColumns, values);

}