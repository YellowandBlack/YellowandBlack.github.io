var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'datesForContributors.js';
head.appendChild(script);


var head2= document.getElementsByTagName('head')[1];
var script2 = document.createElement('script');
script2.type= 'text/javascript';
script.src= 'datesForFairs.js';
head2.appendChild(script2);



// erstellung einer Tabelle
function createcebitTab(){

    clear();

    var myTabBody = document.createElement('tbody');

    // weißt den Erstellentabelleninhalt zu der Tabelle hinzu
    document.getElementById("table").appendChild(myTabBody);

    // Diese Schleife erstellt jeweils eine Tabellenreihe
    for(var i=0;i<ceBitTeilnehmer.CB.length;i++){
        var myRow = document.createElement('tr');

        // Diese Schleife erstellt die Tabellenzellen einer Reihe
       // for(var j=0;j<5;j++){

            var myCell = document.createElement('td');
            currenttext = document.createTextNode(ceBitTeilnehmer.CB[i].name);
            myCell.appendChild(currenttext);
            myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(ceBitTeilnehmer.CB[i].vorname);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(ceBitTeilnehmer.CB[i].studiengang);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(ceBitTeilnehmer.CB[i].Email);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

       // }
        myTabBody.appendChild(myRow);
    }

}

function createconhitTab(){

    clear();

    var myTabBody = document.createElement('tbody');

    // weißt den Erstellentabelleninhalt zu der Tabelle hinzu
    document.getElementById("table").appendChild(myTabBody);

    // Diese Schleife erstellt jeweils eine Tabellenreihe
    for(var i=0;i<conHitTeilnehmer.CH.length;i++){
        var myRow = document.createElement('tr');

        // Diese Schleife erstellt die Tabellenzellen einer Reihe
        // for(var j=0;j<5;j++){

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(conHitTeilnehmer.CH[i].name);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(conHitTeilnehmer.CH[i].vorname);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(conHitTeilnehmer.CH[i].studiengang);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(conHitTeilnehmer.CH[i].Email);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        // }
        myTabBody.appendChild(myRow);
    }

}

function createwebtechconTab(){

    clear();

    var myTabBody = document.createElement('tbody');

    // weißt den Erstellentabelleninhalt zu der Tabelle hinzu
    document.getElementById("table").appendChild(myTabBody);

    // Diese Schleife erstellt jeweils eine Tabellenreihe
    for(var i=0;i<webTechConTeilnehmer.WTC.length;i++){
        var myRow = document.createElement('tr');

        // Diese Schleife erstellt die Tabellenzellen einer Reihe
        // for(var j=0;j<5;j++){

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(webTechConTeilnehmer.WTC[i].name);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(webTechConTeilnehmer.WTC[i].vorname);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(webTechConTeilnehmer.WTC[i].studiengang);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(webTechConTeilnehmer.WTC[i].Email);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        // }
        myTabBody.appendChild(myRow);
    }

}

// erstellung einer Tabelle ohne die Untertabelle mit Messe zu löschen
function createkostenTab(){

    clear();
    clearRow();
    var myTabBody = document.createElement('tbody');

    // weißt den Erstellentabelleninhalt zu der Tabelle hinzu
    document.getElementById("table").appendChild(myTabBody);

    // Diese Schleife erstellt jeweils eine Tabellenreihe
    for(var i=0;i<3;i++){
        var myRow = document.createElement('tr');

        // Diese Schleife erstellt die Tabellenzellen einer Reihe

            var myCell = document.createElement('td');
            currenttext = document.createTextNode(kosten.kosten[i].name);
            myCell.appendChild(currenttext);
            myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(kosten.kosten[i].kosten);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);


        myTabBody.appendChild(myRow);
    }

}
// löscht eine ganze Tabelle
function clear(){
    tbl=document.getElementById('table');

    while(tbl.rows.length>0)
    {
        tbl.deleteRow(0);
    }

}

// löscht die zweite Zeile von einer Tabelle (um das Untermenü mit den Messen weg zubekommen)
function clearRow(){
   tbl2=document.getElementById('mainTable');
    while(tbl2.rows.length>1)
    {
        tbl2.deleteRow(1);
    }
}

// erweitert die Überschrifttabelle um die Messen
function extendTab(){

    clear();
    clearRow();
   // Die Erweiterungsreihe
    var messeRow = document.createElement('tr');


    var messe1 = document.createElement('td');
    text1 = document.createTextNode("CeBit");
    messe1.setAttribute('onclick','javascript:createcebitTab()' );

    // farbliche Markierung wenn man mit der Maus auf der Tabellenzelle ist
    messe1.setAttribute('onmouseover',"style.backgroundColor='red'");
    messe1.setAttribute('onmouseout',"style.backgroundColor='#99D9EA'");

    //fügt den Text in die Tabellen zelle hinzu
    messe1.appendChild(text1);

    var messe2 = document.createElement('td');
    text2 = document.createTextNode("ConHit");
    messe2.setAttribute('onclick','javascript:createconhitTab()' );

    // farbliche Markierung wenn man mit der Maus auf der Tabellenzelle ist
    messe2.setAttribute('onmouseover',"style.backgroundColor='red'");
    messe2.setAttribute('onmouseout',"style.backgroundColor='#99D9EA'");

    //fügt den Text in die Tabellen zelle hinzu
    messe2.appendChild(text2);

    var messe3 = document.createElement('td');
    text3 = document.createTextNode("WebTechcon");
    messe3.setAttribute('onclick','javascript:createwebtechconTab()' );

    // farbliche Markierung wenn man mit der Maus auf der Tabellenzelle ist
    messe3.setAttribute('onmouseover',"style.backgroundColor='red'");
    messe3.setAttribute('onmouseout',"style.backgroundColor='#99D9EA'");

    //fügt den Text in die Tabellen zelle hinzu
    messe3.appendChild(text3);

    //fügt die Zellen der Erweiterungsreihe zu
    messeRow.appendChild(messe1);
    messeRow.appendChild(messe2);
    messeRow.appendChild(messe3);



    document.getElementById('mainTable').appendChild(messeRow);

}

