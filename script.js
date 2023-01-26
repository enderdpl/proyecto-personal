
let slideCounter=1;

var nameTag = document.querySelector("#name-tag");
var ParrafoTag = document.querySelector("#parrafo-tag");
var imgPresent= document.getElementById('img_presen');
var buttonDescarga= document.getElementById("imprime")
var inside= document.getElementsByClassName("inside")



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


function setName(element) {
        //console.log(element.value);
        nameTag.innerText = element.value;
    }
     
    
function setparrafo(element) {
        //console.log(element.value);
        ParrafoTag.innerHTML = element.value;
}
function guardar(){
    // Reset Inputs
    document.getElementById('slide-title-input').value = '';
    document.getElementById('slide-content-input').value = '';
    
}

//function clickOnSlideHandler(element){
  //  alert(element.target.id)
    //console.log('event', event);
    //console.log('event.target', event.target);
    //event.target.classList.add('selected-slide');
// }

 
function createSlide() {
    //Duplicate Element and add to slides containers
    const slideDraft = document.getElementById('slide-draft');
    const newSlide = slideDraft.cloneNode(true);
    newSlide.id =  `slide${slideCounter}`;
    newSlide.classList.add('slide');
    //  BOTON DE DESCARGASS
    
    buttonDescarga.style.display= "flex"

//FUNCION DE JQUERY PARA QUE DESCARGE EL DIV






/*    newSlide.addEventListener('click', function () {
        var id = this.id;
        var h1= document.getElementById("name-tag"+id);
        alert(h1);
      })
*/    

    newSlide.children[0].addEventListener('click', function (event) {
        content_h1= event.path[0].innerText
        console.log(content_h1)
        const para = document.createElement("h1");
        para.innerHTML = content_h1;
        document.getElementById("slides").appendChild(para);
    })
    newSlide.children[1].addEventListener('click', function (event) {
        console.log(event.target)
    })
    
    // newSlide.children[2].addEventListener('click', function (event) {
    //     console.log(event.target)
    // })
    
    //nueva cuadro blanco sea original anted de editar
    nameTag.innerHTML= "TITULO";
    ParrafoTag.innerHTML= "Parrafo";
    imgPresent.src='img/foto.png';
    
    console.log(slideCounter);
    
    //document.getElementById("slides").innerHTML += '<div class="cuadro_blanco" id="'+slideCounter+'"> <h1 id="name-tag">TITULO</h1><div class="imagen"><p id="parrafo-tag">Parrafo</p><img id="img_presen" src="https://www.befunky.com/images/prismic/d98b04bd-7bb6-4e31-832f-5800572ce488_how-to_blur-image-21.svg" alt="imagen"></div></div>';
    document.getElementById("slides").append(newSlide);
    slideCounter++;
    
    
    //const slides = document.getElementsByClassName("slide");
    //console.log('slides:', slides);
}


const slides = document.getElementsByClassName("slide");

//FUNCION DE JQUERY PARA QUE DESCARGE EL DIV
$(document).ready(() => {
    $("#imprime").click(function () {
        $.print("#slides")
    }

    )
}
)

// FUNCION QUE PERMITE MOVER LOS ELEMENTOS DE POSCISION DENTRO DEL DIV
var elementoMoviendose;
window.addEventListener('load', init);
function init(){
        
        nameTag.addEventListener('dragstart', dragIniciado, false);
        nameTag.addEventListener('dragend', dragFinalizado, false);
        nameTag.addEventListener('drag', manejarDrop, false); 
    }

function dragIniciado(e){
    elementoMoviendose= this
    this.style.backgroundColor = 'blue'
    padre=document.getElementById('slide-draft')
    var  clon = this.cloneNode(true);
    padre.appendChild(clon)
    e.dataTransfer.setData('text', padre.innerHTML)
    console.log("draf iniciado")
}
function manejarDrop(e){
    e.preventDefault();
    var datos= e.dataTransfer.getData('text');
    this.innerHTML += datos;
    elementoMoviendose.parentNode.removeChild(elementoMoviendose)
    console.log("draf drof")
}

function dragFinalizado(e){
    e.preventDefault();
    this.style.backgroundColor= 'red'
    console.log("draf finalizado")

}