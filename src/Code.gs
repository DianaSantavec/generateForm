function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Generate Survey')
      .addItem('Generate survey', 'generateSelectCoordinatesSidebar') 
      .addToUi();
}
