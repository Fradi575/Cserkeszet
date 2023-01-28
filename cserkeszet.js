const tortenet = document.getElementById('tortenet');
const csero = document.getElementById('csero');
const ors = document.getElementById('orsok');
const ucsoNap = document.getElementById('ucsoNap');
const elso = document.getElementById('elso');
const masodik = document.getElementById('masodik');
const harmadik = document.getElementById('harmadik');
const negyedik = document.getElementById('negyedik');

function megjelen() {

    if (tortenet.getAttribute("class") === "ures") { tortenet.setAttribute("class", "nemUres");
elso.setAttribute("class", "fel"); }

    else { tortenet.setAttribute("class", "ures");
           elso.setAttribute("class", "le"); } 

}

function megjelen2() {

    if (csero.getAttribute("class") === "ures") { csero.setAttribute("class", "nemUres");
masodik.setAttribute("class", "fel"); }
    else { csero.setAttribute("class", "ures");
           masodik.setAttribute("class", "le"); }

}

function megjelen3() {

    if (ors.getAttribute("class") === "ures") { ors.setAttribute("class", "nemUres");
harmadik.setAttribute("class", "fel"); }
    else { ors.setAttribute("class", "ures");
           harmadik.setAttribute("class", "le"); }

}

function megjelen4() {

    if (ucsoNap.getAttribute("class") === "ures") { ucsoNap.setAttribute("class", "nemUres");
negyedik.setAttribute("class", "fel"); }
    else { ucsoNap.setAttribute("class", "ures");
           negyedik.setAttribute("class", "le"); }

}




