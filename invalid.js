function validateInput () {
    document.myform.vorname.style.borderColor="initial";
    document.myform.name.style.borderColor="initial";
    document.myform.email.style.borderColor="initial";
    document.myform.matrikelnr.style.borderColor="initial";
    document.myform.handy.style.borderColor="initial";

    //Validierung: Vorname.
    if (document.myform.vorname.value == "") {
        console.log("vorname leere Eingabe.");
        alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
        document.myform.vorname.focus();
        document.myform.vorname.style.borderColor="red";
        return false;
  }else{ //Vorname wurde eingegeben.(nicht leer).
        var flag=false;
        for (i = 0; i < document.myform.vorname.value.length; ++i){
            if (document.myform.vorname.value.toLowerCase().charAt(i) < "a" ||
            document.myform.vorname.value.toLowerCase().charAt(i)  > "z"){
            flag=true;
            
            }
        }
        if(flag){
            console.log("vorname enthält ungültige Zeichen.");
            alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
            document.myform.vorname.focus(); 
            document.myform.vorname.style.borderColor="red";
            return false;
        }
        
    }
    //Validierung: Name.
    if (document.myform.name.value == "") {
    console.log("name leere Eingabe.");
    alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
    document.myform.name.focus();
    document.myform.name.style.borderColor="red";
    return false;
  }else{ //Vorname wurde eingegeben.(nicht leer).
        var flag=false;
        for (i = 0; i < document.myform.name.value.length; ++i){
            if (document.myform.name.value.toLowerCase().charAt(i) < "a" ||
            document.myform.name.value.toLowerCase().charAt(i)  > "z"){
            flag=true;
            }
        }
        if(flag){
            console.log("name enthält ungültige Zeichen.");
            alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
            document.myform.name.focus(); 
            document.myform.name.style.borderColor="red";
            return false;
        }
        
    }
    
    //Validierung: email.
    if (document.myform.email.value == "") {
        console.log("email leere Eingabe.");
        alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
        document.myform.email.focus();
        document.myform.email.style.borderColor="red";
        return false;
    }
    
    //@-index finden. + überprüfen auf Einmalvorkommen.
    var indxAt=-1;
    var counter=0;
    for(i=0; i < document.myform.email.value.length;++i){
        if(document.myform.email.value.charAt(i)=='@'){
            ++counter;
            indxAt=i;
        }
        //hier auf ungültige Zeichen überprüfen
        //Leerzeichen darf nicht auftauchen
        if(document.myform.email.value.charAt(i)==' '){
            console.log("email Leerzeichen nicht erlaubt.");
            alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
            document.myform.email.focus();
            document.myform.email.style.borderColor="red";
            return false;
        }
    }
    if(indxAt==-1 || (counter != 1)){
        console.log("email ungültiges Format.-kein oder mehr als ein @-Zeichen");
        alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
        document.myform.email.focus();
        document.myform.email.style.borderColor="red";
        return false;
    }
    // an dieser Stelle wurde die Position des @ zeichens gefunden.
    //den punkt nach dem @ finden.
    var indxPt=-1;
    for(i=indxAt; i < document.myform.email.value.length;++i){
        if(document.myform.email.value.charAt(i)=='.'){
            indxPt=i;
            //hier wird nur der Letzte Punkt gespeichert. bsp: @stud.hs.de
        }
    }   
    if(indxPt==-1){
        console.log("email ungültiges Format.-kein Punkt nach dem @-Zeichen");
        alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
        document.myform.email.focus();
        document.myform.email.style.borderColor="red";
        return false;
    }
    
    
    var vorstring=document.myform.email.value.substring(0, indxAt);
    var nachstring=document.myform.email.value.substring(indxAt+1, indxPt);
    var domainstring=document.myform.email.value.substring(indxPt+1, document.myform.email.value.length);
    //console.log("vorstring:"+vorstring+","+"nachstring:"+nachstring+","+"domainstring:"+domainstring+".");
    
    var flagMail=false;
    //substrings auf ungültige zeichen überprüfen.
    if(nachstring.charAt(0)=='.'){
        console.log("email ungültiges Format. Punkt nach dem @Zeichen ist unzulässig.");
        flagMail=true;
    }
    if(domainstring=='de'||domainstring=='org'||domainstring=='net'||domainstring=='com'){
        ;
    }else{
        console.log("email ungültiges Format.-gültige domainnames: de/org/net/com");
        flagMail=true;
    }
    if(vorstring.length<=0||nachstring.length<=0){
        console.log("email ungültiges Format. Keine Eingabe vor oder nach dem @-Zeichen gefunden.");
        flagMail=true;
    }
    if(flagMail){
        console.log("email ungültiges Format.");
        alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
        document.myform.email.focus();
        document.myform.email.style.borderColor="red";
        return false;
    }

    //Validierung: Matrikelnr.
    if (document.myform.matrikelnr.value == "") {
        console.log("matrikelnr leere Eingabe.");
        alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
        document.myform.matrikelnr.focus();
        document.myform.matrikelnr.style.borderColor="red";
        return false;
    }else{
        var flagMrtklnr = false;
        
        for (i = 0; i < document.myform.matrikelnr.value.length; ++i){
            if (document.myform.matrikelnr.value.charAt(i) < "0" ||
             document.myform.matrikelnr.value.charAt(i) > "9"){
                console.log("matrikelnr enthält ungültige Zeichen.");
                flagMrtklnr = true;
            }
             if(document.myform.matrikelnr.value.charAt(0)==0){
                 console.log("matrikelnr beginnt mit 0. Ungültige Eingabe.");
                 flagMrtklnr = true;
             }
        }
        if (flagMrtklnr) {
            alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
            document.myform.matrikelnr.focus();
            document.myform.matrikelnr.style.borderColor="red";
            return false;
        }
    }

    //Validierung: Handynummer.
    if (document.myform.handy.value == "") {
        console.log("handy leere Eingabe.");
        alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
        document.myform.handy.focus();
         document.myform.handy.style.borderColor="red";
        return false;
    }else{
        var flaghandy = false;
        var failNr=-1;
        for (i = 0; i < document.myform.handy.value.length; ++i){
            if (document.myform.handy.value.charAt(i) < "0" ||
             document.myform.handy.value.charAt(i) > "9"){
                failNr=0;
                flaghandy = true;
            }
             if(document.myform.handy.value.charAt(0)!=0){
                 failNr=1;
                 flaghandy = true;
             }
        }
        if (flaghandy) {
            if(failNr==0){
                console.log("handynr enthält ungültige Zeichen.");
            }else if(failNr==1){
                console.log("handynr beginnt nicht mit 0. Ungültige Eingabe.");
            }else{
                ;//Nichts unternehmen. Wert: -1
            }
            alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
            document.myform.handy.focus();
            document.myform.handy.style.borderColor="red";
            return false;
        }
    }
      
    console.log("Validierung erfolgreich.");
    

}
