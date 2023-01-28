function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Dialog')
      .addItem('Test', 'openDialog')
      .addToUi();
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Index');
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Hello World!');
}