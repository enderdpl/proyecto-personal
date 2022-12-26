let slideCounter=1;

var nameTag = document.querySelector("#name-tag");
var ParrafoTag = document.querySelector("#parrafo-tag");
var imgPresent= document.getElementById('img_presen');


/*
function carro1(){
    console.log('presiono carro 1')
    imgPresent.src= 'img/carro1.png';
}

function carro2(){
    imgPresent.src= 'img/carro2.png';
}

function todo(){
    console.log('cualquier imagen')
}
*/

function setName(element) {
        //console.log(element.value);
        nameTag.innerText = element.value;
    }
     
    
function setparrafo(element) {
        //console.log(element.value);
        ParrafoTag.innerHTML = element.value;
}

function createSlide() {
    // Reset Inputs
    document.getElementById('slide-title-input').value = '';
    document.getElementById('slide-content-input').value = '';


    
    console.log(slideCounter)
    console.log('crear hoja');
    document.getElementById("slide-preview").innerHTML += '<div class="cuadro_blanco" id="'+slideCounter+'"> <h1 id="name-tag">TITULO</h1><div class="imagen"><p id="parrafo-tag">Parrafo</p><img id="img_presen" src="https://www.befunky.com/images/prismic/d98b04bd-7bb6-4e31-832f-5800572ce488_how-to_blur-image-21.svg" alt="imagen"></div></div>';
    slideCounter++; 
    setName();
    setparrafo();
}