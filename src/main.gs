function callFurther(){
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt("Insert survey title",ui.ButtonSet.OK_CANCEL);
  if (response.getSelectedButton() == ui.Button.CANCEL){
    console.log("cancel");
    return;
  } 
  else{
    console.log("ok");
    ScriptProperties.setProperty('FormTitle', response.getResponseText());
  }
  chooseStartQuestions();
}
function getFormName(){
  callFurther();
  
}

function createForm(){
  var title = ScriptProperties.getProperty('FormTitle');

  var form = FormApp.create(title);
  var id = form.getId();

  try{  
    const scriptProperties = PropertiesService.getScriptProperties();
    scriptProperties.setProperty('FormId', id);
  }
  catch(err){
    console.log(err);
  }
}

function generateStartQuestions(){
  var id  = ScriptProperties.getProperty('FormId');
  var form = FormApp.openById(id);

  var positiveImpressions = form.addTextItem();
  positiveImpressions.setTitle("Pokušaj u dve reči da sumiraš najpozitivnije utiske seminara.");
  positiveImpressions.setRequired(true);

  var negativeImpressions = form.addTextItem();
  negativeImpressions.setTitle("Pokušaj u dve reči da sumiraš najnegativnije utiske seminara.");
  negativeImpressions.setRequired(true);

}

function generateQuestionForInterview(){
  var id  = ScriptProperties.getProperty('FormId');
  var form = FormApp.openById(id)

  var stressLevel = form.addScaleItem();
  stressLevel.setTitle("Koliko su bili stresni intervjui?")
    .setBounds(1,5)
    .setLabels("stresno", "nije stresno");


  //var description = form.setDescription("Nesto");
  var description = form.addSectionHeaderItem();
  description.setTitle("U nastavku ćemo te pitati za pojedinačne aktivnosti sa ocenama od 1 do 5\n1 - nije bilo korisno/zanimljivo/razumljivo, \n5 - bilo je korisno/zanimljivo/razumljivo");
  var multipleVote = form.addGridItem();
  multipleVote.setTitle("Intervjui")
    .setRows(["Koliko je bilo korisno", "Koliko je bilo zanimljivo"])
    .setColumns(["1", "2", "3", "4", "5"]);
  multipleVote.setRequired(true);
  
}

function generateQuestionsForAssistants(){
  var id  = ScriptProperties.getProperty('FormId');
  var form = FormApp.openById(id)

  var rateAssistans = form.addScaleItem();
  rateAssistans.setTitle("Opšti utisak o saradnicima")
    .setBounds(1,5)
    .setLabels("najgori", "najbolji");
    rateAssistans.setRequired(true);

  var commentForAssistants = form.addTextItem();
  commentForAssistants.setTitle("Dodatan komentar o saradnicima");
  commentForAssistants.setRequired(true);

  var rateManagers = form.addScaleItem();
  rateManagers.setTitle("Opšti utisak o rukovodiocu seminara")
    .setBounds(1,5)
    .setLabels("najgori", "najbolji");
  rateManagers.setRequired(true);

  var commentForManagers = form.addTextItem();
  commentForManagers.setTitle("Dodatan komentar o rukovodiocu seminara");
  commentForManagers.setRequired(true);

}

function generateEndQuestions(){
  var id  = ScriptProperties.getProperty('FormId');
  var form = FormApp.openById(id)
  

  var rateSeminar = form.addScaleItem();
  rateSeminar.setTitle("Opšti utisak o seminaru")
    .setBounds(1,5)
    .setLabels("najgori", "najbolji");
  rateSeminar.setRequired(true);

  var addToProgram = form.addTextItem();
  addToProgram.setTitle("Da li imaš neke sugestije šta ukloniti iz programa Računarstva za sledeću godinu?");
  addToProgram.setRequired(true);

  var removeFromProgram = form.addTextItem();
  removeFromProgram.setTitle("Da li imaš neke sugestije šta dodati u program Računarstva za sledeću godinu?");
  removeFromProgram.setRequired(true);

  var otherComments = form.addTextItem();
  otherComments.setTitle("Ako imaš još nešto da nam kažeš što te nismo pitali slobodno nam to napiši ovde:");
  otherComments.setRequired(true);

}

function generateQuestionsForLecture(form, value){
  var multipleVote = form.addGridItem();
  if (value.toLowerCase() == 'seminarski' || value.toLowerCase() == 'izrada seminarskih'){
    multipleVote.setTitle("Aktivnost \"" + value + "\"")
    .setRows(["Koliko je razumljivo", "Koliko je korisno", "Koliko je zanimljivo", "Koliko ti se svidela tema", "Da li smatraš da je bilo dovoljno vremena?"])
    .setColumns(["1", "2", "3", "4", "5"]);  
  }
  else{
    multipleVote.setTitle("Aktivnost \"" + value + "\"")
    .setRows(["Koliko je razumljivo", "Koliko je korisno", "Koliko je zanimljivo"])
    .setColumns(["1", "2", "3", "4", "5"]);
  }
  
  multipleVote.setRequired(true);
    var otherComments = form.addTextItem();
    otherComments.setTitle("Dodatan komentar o aktivnosti \"" + value + "\"");
    otherComments.setRequired(true);
}