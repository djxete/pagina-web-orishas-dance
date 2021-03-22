
/*---------------------SLIDER CARROUSEL--------------*/

//--Variables--//

const slider= document.querySelector("#slider");
let slider__section= document.querySelectorAll(".slider__section");
let ultimo__slider = slider__section[slider__section.length - 1];

const boton__derecha= document.getElementById("boton__derecha");
const boton__izquierda= document.getElementById("boton__izquierda");


slider.insertAdjacentElement("afterbegin", ultimo__slider);


//--Funciones--//



function derecha(){
    let slider__section= document.querySelectorAll(".slider__section");
    let primer__slider= document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition = "all 1s";
    setTimeout(function (){
        slider.style.transition="none";
        slider.style.marginLeft = "-100%";
        slider.insertAdjacentElement("beforeend", primer__slider);
    },1000);
    
}

function izquierda(){

    let ultima__slider= document.querySelectorAll(".slider__section")[slider__section.length - 1];
   slider.style.marginLeft = "0%";
   slider.style.transition ="all 1s";
   setTimeout(function(){
        slider.style.transition= "none";
        slider.style.marginLeft= "-100%";
        slider.insertAdjacentElement("afterbegin",ultima__slider);

   },1000);

}


//--Add Event Listener--//

boton__derecha.addEventListener("click", ()=>{
    derecha();
})
boton__izquierda.addEventListener("click", ()=>{
    izquierda();
})






//1º selecionamos el padre slider con una const porque no va a cambiar
//2º seleccionamos cada elemento slide con un let porque van a cambiar
//3º seleccionamos el último slide con let porque va a cambiar
//4º declaramos dos variables de los botones, serán const porque no van a cambiar
//5º poner el último elemento al inicio
//6º hay que enfocar al 2 slide, para hacer esto le añadimos al slice un margin-left de -560px