function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Petnica')
      .addItem('Generate survey', 'generateSelectCoordinatesSidebar') 
      .addToUi();
}
