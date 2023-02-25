function errorDialogForDrive() {
  var ui = SpreadsheetApp.getUi();
  var dialog = ui.alert(
     'Error occured',
     'An error occured while trying to save form in directory with spredsheet. This can happen if you don\'t have perrmisions on directory. If that doesn\'t resolve the issue, please contact the administrator.',
      ui.ButtonSet.OK);
}
