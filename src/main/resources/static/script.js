

const personRegister=[];



function kjopBillett(){
    console.log("Kjøp billet metode kjørt")

    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const epost = $("#epost").val();
    const tlf = $("#tlf").val();
    const film = $("#film").val();
    const antall = $("#antall").val();
    console.log("Person laget: " +fornavn, etternavn, epost, tlf, film, antall);
    // FEILMELDINGER
    if(fornavn ==""){
        $("#fornavnfm").html("Fornavn kan ikke være tomt.");
    }
    else{
        $("#fornavnfm").html("");
    }
    if(etternavn ==""){
        $("#etternavnfm").html("Etternavn kan ikke være tomt.");
    } else{
        $("#etternavnfm").html("");
    }
    if(epost ==""){
        $("#epostfm").html("Epost kan ikke være tomt.");
    } else{
        $("#epostfm").html("");
    }
    if(tlf ==""){
        $("#tlffm").html("Telefonnumer kan ikke være tomt.");
    }else{
        $("#tlffm").html("");
    }
    if(film=="" || film==null){
        $("#filmfm").html("Du må velge film.");
    } else{
        $("#filmfm").html("");
    }
    if(antall==0 || antall=="0") {
        $("#antallfm").html("Antall kan ikke være 0.");
    } else{
        $("#antallfm").html("");
    }
    if(
        fornavn!=""&&
        etternavn!=""&&
        epost!=""&&
        tlf!=""&&
        film!=null&&
        antall!=0) {
        // LAGER PERSONOBJEKT
        const person = {
            fornavn: fornavn,
            etternavn : etternavn,
            epost : epost,
            tlf : tlf,
            film : film,
            antall : antall
        };

        $.post("/lagreKunde", person, function(){
            visPersonRegister();
            console.log("Kjøp billett mnetpde ferdig");
        })


        tomFelter();
        tomFeilmeldinger()

    }
    hentKunder();

}

function hentKunder(){
    $.get("/hentKunder", function (kunderListe) {
        visPersonRegister(kunderListe)
    })
}

function visPersonRegister(kunder){

    // skriv ut
    let ut = "<table class='table'><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>Telefonnummer</th>" +
        "</tr>";
    for (const p of kunder){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.fornavn+"</td><td>"+p.etternavn+ "</td><td>"+p.epost+"</td><td>"+p.tlf+"</td>";
        ut+="</tr>";
    }
    $("#kundeListe").html(ut);
    console.log("Kjøp billett mnetpde ferdig");
    hentKunder();
}


function slettBilletter(){
    console.log("Slett billeter kalt");

    $.get("/slettKunder", function () {
        hentKunder();
    })



}


// TØMMING
function tomFelter(){
    $("#fornavn").val("");
    $("#antall").val();
    $("#etternavn").val("");
    $("#tlf").val("");
    $("#film").val("");
    $("#epost").val("");
}
function tomFeilmeldinger() {
    $("#fornavnfm").val("");
    $("#antallfm").val();
    $("#etternavnfm").val("");
    $("#tlffm").val("");
    $("#filmfm").val("");
    $("#epostfm").val("");
}












