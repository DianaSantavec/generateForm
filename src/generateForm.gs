function generateForm(){
  var form = FormApp.create('Anketa - Zimski 2023');
  generateStartQuestions(form);
  generateQuestionsForAssistants(form);
  generateEndQuestions(form);
  

  Logger.log('Published URL: ' + form.getPublishedUrl());
  Logger.log('Editor URL: ' + form.getEditUrl());  
}

function generateStartQuestions(form){
  var positiveImpressions = form.addTextItem()
  positiveImpressions.setTitle("Pokušaj u dve reči da sumiraš najpozitivnije utiske seminara.")

  var negativeImpressions = form.addTextItem()
  negativeImpressions.setTitle("Pokušaj u dve reči da sumiraš najnegativnije utiske seminara.")
}

function generateQuestionsForAssistants(form){
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

function generateEndQuestions(form){
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