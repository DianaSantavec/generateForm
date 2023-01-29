function listAllActivities(ui, numberOfColumns, values){

 /* var html = HtmlService.createHtmlOutputFromFile('ListAllActivities');
  SpreadsheetApp.getUi().showSidebar(html);*/
//      .showModalDialog(html, 'Test');

  var generatedHtml = '<!DOCTYPE html> <html> <head> <base target="_top"> <script> function getLectures(){ var all = document.getElementsByName("checkboxGroup"); var selectedLectures = ""; for(var i=0; i <all.length; i++){ if(all[i].checked){ selectedLectures += all[i].id + "/";}} if (selectedLectures.length > 0){ google.script.run.generateForm(selectedLectures);google.script.host.close();} else{ google.script.host.close(); } } </script> </head> <body>'
  var saved = [""];
  for (const row in values){
    for (i=0;i<numberOfColumns;i++){
      var value = values[row][i];
      switch (value){
        case 'doručak':
        case 'ručak':
        case 'večera':
        case undefined:
        case '':
          continue;
        default:
        if (saved.indexOf(value) == -1){
              if (value.indexOf("/") != -1){
                var temp1 = value.substring(0, value.indexOf("/"));
                var temp2 = value.substring(value.indexOf("/") + 2, value.length);
                if (temp1 != 'Intervjui'){
                  generatedHtml = generatedHtml + Utilities.formatString('<input type="checkbox" name="checkboxGroup" id="%s" value="%s" checked="yes"> <label> %s </label> <br>', temp1.replace('\n',' '), temp1.replace('\n',' ') ,temp1.replace('\n',' '));
                }
                if (temp2 != 'Intervjui'){
                  generatedHtml = generatedHtml + Utilities.formatString('<input type="checkbox" name="checkboxGroup" id="%s" value="%s" checked="yes"> <label> %s </label> <br>', temp2.replace('\n',' '), temp2.replace('\n',' ') ,temp2.replace('\n',' '));
                } 
                //console.log('%s', temp1.replace('\n',' '));
                //console.log('%s', temp2.replace('\n',' '));
              }
              else{
                //console.log('%s', value.replace('\n',' '));
                generatedHtml = generatedHtml + Utilities.formatString('<input type="checkbox" name="checkboxGroup" id="%s" value="%s" checked="yes"> <label> %s </label> <br>', value.replace('\n',' '), value.replace('\n',' ') ,value.replace('\n',' '));
              }
              saved.push(value);
            }
        
        }
      
    }
  }
  generatedHtml += '<br><br><input type="button" value="Next" onclick="getLectures()" /> <br>'
  generatedHtml += '<input type="button" value="Next" onclick="google.script.host.close();" />'
  
  generatedHtml = generatedHtml + '</body> </html>'

  var uiHtml = HtmlService.createHtmlOutput(generatedHtml);

  ui.showModalDialog(uiHtml, 'Uncheck boxes for lectures that need to be excluded');
  //ui.showSidebar(uiHtml);
}