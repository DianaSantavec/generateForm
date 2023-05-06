function listAllActivities(numberOfColumns, values, id){

  var ui = SpreadsheetApp.getUi();

  var generatedHtml = HtmlService.createHtmlOutputFromFile('CheckboxDialog');

  var saved = [""];
  for (var range = 0; range < numberOfColumns.length; range++){
    for (i=0;i<numberOfColumns[range];i++){
    for (const row in values[range]){
    
      var value = values[range][row][i];
      switch (value.toLowerCase()){
        case 'doručak':
        case 'ručak':
        case 'večera':
        case "":
        case "\n":
        case '':
        case undefined:
          continue;
        default:
          var temp = value.split("\n").map(item => item.trim());
          
        if (saved.indexOf(value) == -1){
          console.log(value);
          saved.push(value);
              if (value.indexOf("/") != -1){
                var multiple = value.split("/").map(item => item.trim());
                if (multiple[0].toLowerCase() != 'intervjui'){
                  generatedHtml.append(Utilities.formatString('<input type="checkbox" name="checkboxGroup" id="%s" value="%s" checked="yes"> <label> %s </label> <br>', multiple[0].replace('\n',' '), multiple[0].replace('\n',' ') ,multiple[0].replace('\n',' ')));
                }
                if (multiple[1].toLowerCase() != 'intervjui'){
                  generatedHtml.append(Utilities.formatString('<input type="checkbox" name="checkboxGroup" id="%s" value="%s" checked="yes"> <label> %s </label> <br>', multiple[1].replace('\n',' '), multiple[1].replace('\n',' ') ,multiple[1].replace('\n',' ')));
                }
              }
              else{
                if (temp[1] != null){
                  value = temp[0] + " - " + temp[1];
                }
                generatedHtml.append(Utilities.formatString('<input type="checkbox" name="checkboxGroup" id="%s" value="%s" checked="yes"> <label> %s </label> <br>', value.replace('\n',' '), value.replace('\n',' ') ,value.replace('\n',' ')));
              }
              
            }
        
        }
      
    }
  }}

  generatedHtml.append('<div id="outer">');
  generatedHtml.append('<div class="inner"><button class="sidebar_button" role="button" data-inline="true" onclick="google.script.host.close()" > Close </button></div>');
  generatedHtml.append('<div class="inner"><button class="sidebar_button" role="button" data-inline="true" onclick="getLectures()"> Next </button></div>');
  generatedHtml.append('</div>');
  generatedHtml.append('<div id="wait" style="display:none;" class="load"></div>');

  generatedHtml.append('<div id="progressBar" style="display:none;">');
  generatedHtml.append('<input type="checkbox" name="progressGroup" id="startQuestions" disabled> <label> Start questions </label> <br>');
  generatedHtml.append('<input type="checkbox" name="progressGroup" id="interviewQuestions" disabled> <label> Interview questions </label> <br>');
  generatedHtml.append('<input type="checkbox" name="progressGroup" id="lecturesQuestions" disabled> <label> Lectures questions </label> <br>');
  generatedHtml.append('<div id="patience" style="display:none;"> <p id="patience_p"> </p> </div>');
  generatedHtml.append('<input type="checkbox" name="progressGroup" id="assistantsQuestions" disabled> <label> Questions for assistants </label> <br>');
  generatedHtml.append('<input type="checkbox" name="progressGroup" id="endQuestions" disabled> <label> End questions </label> <br>');
  generatedHtml.append('</div>');
  
  generatedHtml.append( '</body> </html>');

  var uiHtml = HtmlService.createHtmlOutput(generatedHtml);

  ui.showModalDialog(uiHtml, 'Remove selection on boxes for lectures that need to be excluded');
}