function createForm(){

	//var form = FormApp.create('Anketa - Zimski 2023');
  //return form;
}
 
function generateQuestionsForLectures(id, selectedLectures) {
  var form = FormApp.openById(id);

  console.log('Started form generation');
  const lectures = selectedLectures.split('/');
  for (var i = 0; i < lectures.length; i++) {
    generateQuestionsForLecture(form, lectures[i]);
  }

  return id;
}

function createDialogWithLinks(id){
  var ui = SpreadsheetApp.getUi();
  var form = FormApp.openById(id);

  var htmlOutput = HtmlService.createHtmlOutputFromFile('LinksDialog');

  htmlOutput.append(Utilities.formatString('<input readonly type="text" value="%s" id="publishedUrl">  <div class="tooltip"> <button class="sidebar_button" role="button" data-inline="true" onclick="copyPublished()" onmouseout="outFunc()"> <span class="tooltiptext" id="myTooltip">Copy to clipboard</span> Copy</button> </div> <br> <br>', form.getPublishedUrl()));
  htmlOutput.append(Utilities.formatString('Edit url: <input readonly type="text" value="%s" id="editorUrl">  <div class="tooltip"> <button class="sidebar_button" role="button" data-inline="true" onclick="copyEditor()" onmouseout="outFunc()"> <span class="tooltiptext" id="myTooltip2">Copy to clipboard</span> Copy</button> </div>', form.getEditUrl()));
  //htmlOutput.append(Utilities.formatString('<input readonly type="text" value="%s" id="publishedUrl"> <button onclick="copyPublished()"> Copy to clipboard </button> <br> Editor URL: <input readonly type="text" value="%s" id="editorUrl"> <button onclick="copyEditor()"> Copy to clipboard </button>', form.getPublishedUrl(), form.getEditUrl()));

  htmlOutput.append('<div id="outer">');
  htmlOutput.append('<div class="inner"><button class="sidebar_button" role="button" data-inline="true" onclick="google.script.host.close()" > Close </button></div>');
  htmlOutput.append('</div> </body> </html>');

  var uiHtml = HtmlService.createHtmlOutput(htmlOutput);
  ui.showModalDialog(uiHtml, 'Links ');

  //return form;

}