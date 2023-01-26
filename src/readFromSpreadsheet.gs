function read() {
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
                console.log('%s', temp1.replace('\n',' '));
                console.log('%s', temp2.replace('\n',' '));
              }
              else{
                console.log('%s', value.replace('\n',' '));
              }
              saved.push(value);
            }
        }
      }
    }
  } catch (err) {
    console.log(err.message);
  }  
}