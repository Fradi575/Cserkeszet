const tortenet = document.getElementById('tortenet');
const csero = document.getElementById('csero');
const ors = document.getElementById('orsok');
const ucsoNap = document.getElementById('ucsoNap');

function megjelen() {

    if (tortenet.getAttribute("class") === "ures") tortenet.setAttribute("class", "nemUres");
    else tortenet.setAttribute("class", "ures");  

}

function megjelen2() {

    if (csero.getAttribute("class") === "ures") csero.setAttribute("class", "nemUres");
    else csero.setAttribute("class", "ures");

}

function megjelen3() {

    if (ors.getAttribute("class") === "ures") ors.setAttribute("class", "nemUres");
    else ors.setAttribute("class", "ures");

}

function megjelen4() {

    if (ucsoNap.getAttribute("class") === "ures") ucsoNap.setAttribute("class", "nemUres");
    else ucsoNap.setAttribute("class", "ures");

}




