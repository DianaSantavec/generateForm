function generateSelectCoordinatesSidebar() {

  var htmlSidebar = HtmlService.createHtmlOutputFromFile('SelectRange');
  htmlSidebar.setTitle('Cell selection')
  
  var ui = SpreadsheetApp.getUi();
  ui.showSidebar(htmlSidebar);
}

function getSelectedCoordinates(){
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var selectedRanges = activeSheet.getActiveRangeList().getRanges();
  var return_value = "";
  for (var i = 0; i<selectedRanges.length; i++){
    return_value += selectedRanges[i].getA1Notation() + " ";
  }
  return return_value;
}

function closeCoordinateSidebar(){
  var activeSheet = SpreadsheetApp.getActiveSheet();

  var selectedRanges = activeSheet.getActiveRangeList().getRanges();
  var numberOfColumns=[];
  var values = [];
  for (var i = 0; i < selectedRanges.length; i++){
    var range = selectedRanges[i];
    numberOfColumns[i] = range.getWidth();
    values[i] = range.getValues();
  }

  listAllActivities(numberOfColumns, values);
}