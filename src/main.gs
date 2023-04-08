/*
function generateFormObsolite(){
  var form = FormApp.create('Anketa - Zimski 2023');
  generateStartQuestions(form);
  
  generateQuestionForInterview(form);

  readFromSpreadsheet(form); 
  
  generateQuestionsForAssistants(form);
  generateEndQuestions(form); 
   
 
  Logger.log('Published URL: ' + form.getPublishedUrl());
  Logger.log('Editor URL: ' + form.getEditUrl());  
}
*/

function generateStartQuestions(){
  form = FormApp.create('Anketa - Zimski 2023');
  id = form.getId();

  var positiveImpressions = form.addTextItem();
  positiveImpressions.setTitle("Pokušaj u dve reči da sumiraš najpozitivnije utiske seminara.");

  var negativeImpressions = form.addTextItem();
  negativeImpressions.setTitle("Pokušaj u dve reči da sumiraš najnegativnije utiske seminara.");
  return id;
}

function generateQuestionForInterview(id){
  var form = FormApp.openById(id)

  console.log('in gen quest');
  console.log(form);
  var multipleVote = form.addGridItem();
  multipleVote.setTitle("Intervjui")
    .setRows(["Koliko je bilo korisno", "Koliko je bilo zanimljivo", "Koliko je bilo stresno"])
    .setColumns(["1", "2", "3", "4", "5"]);
  
  return id;
}

function generateQuestionsForAssistants(id){
  var form = FormApp.openById(id)

  var rateAssistans = form.addScaleItem();
  rateAssistans.setTitle("Opšti utisak o saradnicima")
    .setBounds(1,5)
    .setLabels("najgori", "najbolji");

  var commentForAssistants = form.addTextItem();
  commentForAssistants.setTitle("Dodatan komentar o saradnicima");

  var rateAssistans = form.addScaleItem();
  rateAssistans.setTitle("Opšti utisak o rukovodiocu seminara")
    .setBounds(1,5)
    .setLabels("najgori", "najbolji");

  var commentForAssistants = form.addTextItem();
  commentForAssistants.setTitle("Dodatan komentar o rukovodiocu seminara");

  return id;
}

function generateEndQuestions(id){
  var form = FormApp.openById(id)
  

  var rateSeminar = form.addScaleItem();
  rateSeminar.setTitle("Opšti utisak o seminaru")
    .setBounds(1,5)
    .setLabels("najgori", "najbolji");

  var addToProgram = form.addTextItem();
  addToProgram.setTitle("Da li imaš neke sugestije šta ukloniti iz programa Računarstva za sledeću godinu?");

  var removeFromProgram = form.addTextItem();
  removeFromProgram.setTitle("Da li imaš neke sugestije šta dodati u program Računarstva za sledeću godinu?");

  var otherComments = form.addTextItem();
  otherComments.setTitle("Ako imaš još nešto da nam kažeš što te nismo pitali slobodno nam to napiši ovde:");

  return id;
}

function generateQuestionsForLecture(form, value){
  var multipleVote = form.addGridItem();
  multipleVote.setTitle("Ativnost \"" + value + "\"")
    .setRows(["Koliko je razumljivo", "Koliko je korisno", "Koliko je zanimljivo"])
    .setColumns(["1", "2", "3", "4", "5"]);

    var otherComments = form.addTextItem();
    otherComments.setTitle("Dodatan komentar o aktivnosti \"" + value + "\"");
}

function readFromSpreadsheet() {
  //formData.createForm();
  //form = formData.getForm();
  var form = FormApp.openById(id);
  
  const spreadsheetId = '1I2tu8QyBWblAYOLFA-c6Z79w0j6Di71ZwQFTXZV5Kwk';
  const range = 'C6:H22';

  try{
    const values = Sheets.Spreadsheets.Values.get(spreadsheetId, range).values;
    if (!values) {
      console.log('No data found.');
      return;
    }
    var saved = ["test"];
    for (const row in values) {
      for (var i=0; i< 6; i++){
        var value = values[row][i];
        switch (value){
          case 'doručak':
          case 'ručak':
          case 'večera':
          case 'jutarnji sastanak':
          case 'Dolazak i smještaj, zajednički sastanak seminara':
          case 'Uvodni sastanak':
          case 'Ležerna aktivnost':
          case 'Završni sastanak i anketa':
          case undefined:
          case '':
            continue;
          default:
            if (saved.indexOf(value) == -1){
              if (value.indexOf("/") != -1){
                var temp1 = value.substring(0, value.indexOf("/"));
                var temp2 = value.substring(value.indexOf("/") + 2, value.length);
                if (temp1 != 'Intervjui'){
                  generateQuestionsForLecture(form, temp1.replace('\n',' '));
                }
                if (temp2 != 'Intervjui'){
                  generateQuestionsForLecture(form, temp2.replace('\n',' '));
                } 
                //console.log('%s', temp1.replace('\n',' '));
                //console.log('%s', temp2.replace('\n',' '));
              }
              else{
                //console.log('%s', value.replace('\n',' '));
                generateQuestionsForLecture(form, value.replace('\n',' '));
              }
              saved.push(value);
            }
        }
      }
    }
  } catch (err) {
    console.log(err.message);
  }  
  return id;
}