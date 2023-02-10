function moveToCurrent(form) {
  var formId = form.getId();
  var sheetId = SpreadsheetApp.getActive().getId();
  var directory = DriveApp.getFileById(sheetId).getParents().next();

  DriveApp.getFileById(formId).moveTo(directory);

}
