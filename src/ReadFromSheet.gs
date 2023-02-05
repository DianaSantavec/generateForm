function listAllActivities(numberOfColumns, values){

  Utilities.sleep(2000);
  console.log("usao u listAllActivities");
  var ui = SpreadsheetApp.getUi();

  //var generatedHtml = '<!DOCTYPE html> <html> <head> <base target="_top"> <script> function getLectures(){ var all = document.getElementsByName("checkboxGroup"); var selectedLectures = ""; for(var i=0; i <all.length; i++){ if(all[i].checked){ selectedLectures += all[i].id + "/";}} if (selectedLectures.length > 0){ google.script.run.withSuccessHandler(function() { google.script.host.close() }).generateForm(selectedLectures);} else{ google.script.host.close(); } } </script> </head> <body>'

  var generatedHtml = HtmlService.createHtmlOutputFromFile('CheckboxDialog');

  var saved = [""];
  for (var range = 0; range < numberOfColumns.length; range++){
  for (const row in values[range]){
    for (i=0;i<numberOfColumns[range];i++){
      var value = values[range][row][i];
      switch (value){
        case 'doručak':
        case 'ručak':
        case 'večera':
        case "":
        case undefined:
        case '':
          continue;
        default:
        if (saved.indexOf(value) == -1){
              if (value.indexOf("/") != -1){
                var temp1 = value.substring(0, value.indexOf("/"));
                var temp2 = value.substring(value.indexOf("/") + 2, value.length);
                if (temp1 != 'Intervjui'){
                  generatedHtml.append(Utilities.formatString('<input type="checkbox" name="checkboxGroup" id="%s" value="%s" checked="yes"> <label> %s </label> <br>', temp1.replace('\n',' '), temp1.replace('\n',' ') ,temp1.replace('\n',' ')));
                }
                if (temp2 != 'Intervjui'){
                  generatedHtml.append(Utilities.formatString('<input type="checkbox" name="checkboxGroup" id="%s" value="%s" checked="yes"> <label> %s </label> <br>', temp2.replace('\n',' '), temp2.replace('\n',' ') ,temp2.replace('\n',' ')));
                } 
                //console.log('%s', temp1.replace('\n',' '));
                //console.log('%s', temp2.replace('\n',' '));
              }
              else{
                //console.log('%s', value.replace('\n',' '));
                generatedHtml.append(Utilities.formatString('<input type="checkbox" name="checkboxGroup" id="%s" value="%s" checked="yes"> <label> %s </label> <br>', value.replace('\n',' '), value.replace('\n',' ') ,value.replace('\n',' ')));
              }
              saved.push(value);
            }
        
        }
      
    }
  }}

  generatedHtml.append('<div id="outer">');
  generatedHtml.append('<div class="inner"><button class="sidebar_button" role="button" data-inline="true" onclick="google.script.host.close()" > Close </button></div>');
  generatedHtml.append('<div class="inner"><button class="sidebar_button" role="button" data-inline="true" onclick="getLectures()"> Next </button></div>')
  generatedHtml.append('</div>');
  generatedHtml.append('<div id="wait" style="display:none;" class="load"></div>');
  
  generatedHtml.append( '</body> </html>');

  var uiHtml = HtmlService.createHtmlOutput(generatedHtml);

  ui.showModalDialog(uiHtml, 'Uncheck boxes for lectures that need to be excluded');
}