function createForm(){
  var form = FormApp.create('Anketa - Zimski 2023');
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
  console.log("id = " + id);
  var negativeImpressions = form.addTextItem();
  negativeImpressions.setTitle("Pokušaj u dve reči da sumiraš najnegativnije utiske seminara.");

}

function generateQuestionForInterview(){
  var id  = ScriptProperties.getProperty('FormId');
  var form = FormApp.openById(id)

  console.log('in gen quest');
  console.log(form);
  var multipleVote = form.addGridItem();
  multipleVote.setTitle("Intervjui")
    .setRows(["Koliko je bilo korisno", "Koliko je bilo zanimljivo", "Koliko je bilo stresno"])
    .setColumns(["1", "2", "3", "4", "5"]);
  
}

function generateQuestionsForAssistants(){
  var id  = ScriptProperties.getProperty('FormId');
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

}

function generateEndQuestions(){
  var id  = ScriptProperties.getProperty('FormId');
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

}

function generateQuestionsForLecture(form, value){
  var multipleVote = form.addGridItem();
  multipleVote.setTitle("Ativnost \"" + value + "\"")
    .setRows(["Koliko je razumljivo", "Koliko je korisno", "Koliko je zanimljivo"])
    .setColumns(["1", "2", "3", "4", "5"]);

    var otherComments = form.addTextItem();
    otherComments.setTitle("Dodatan komentar o aktivnosti \"" + value + "\"");
}