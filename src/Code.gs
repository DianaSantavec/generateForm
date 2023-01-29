function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Generate Survey')
      .addItem('Generate survey', 'generateFieldPrompt') 
      .addToUi();
}

function generateForm(selectedLectures){

  var html = HtmlService.createHtmlOutputFromFile('ListAllActivities');
  SpreadsheetApp.getUi().showModalDialog(html, 'Test');

  Utilities.sleep(2000);

  var ui = SpreadsheetApp.getUi();
    
  console.log('started');
  
  var form = FormApp.create('Anketa - Zimski 2023');
  generateStartQuestions(form);
  
  generateQuestionForInterview(form);
  
  const lectures = selectedLectures.split('/');
  for (var i = 0; i<lectures.length;i++)
    generateQuestionsForLecture(form, lectures[i]);

  generateQuestionsForAssistants(form);
  generateEndQuestions(form); 

  var htmlOutput = '<!DOCTYPE html> <html> <head> <base target="_top"> </head> <body> Published URL: ';
  htmlOutput = htmlOutput + Utilities.formatString('"%s" Editor URL: "%s"', form.getPublishedUrl(), form.getEditors());
  htmlOutput = htmlOutput + '<input type="button" value="Close" onclick="google.script.host.close()" /> </body> </html>'

  //ui.alert("Published URL: " + form.getPublishedUrl() + "\n Editor URL: " + form.getEditors() ,ui.Button.CLOSE);

    var uiHtml = HtmlService.createHtmlOutput(htmlOutput);
    ui.showModalDialog(uiHtml, 'Links: ');

  /*var html = HtmlService.createHtmlOutputFromFile('ListAllActivities');
  SpreadsheetApp.getUi().showModalDialog(html, 'Test');*/
//      .showSidebar(html);
}


