     window.addEventListener('load', ()=> {    /*escuchamos cuando carga el documento*/

    /*Const donde se guarda los elementos necesarios*/ 
    const display = document.querySelector('.caculator-display');
    const keyPadButtons= document.getElementsByClassName('keypad-button');

    /*HTMLcollection a array*/
    const keyPadButtonsArray = Array.from(keyPadButtons);


    /*listener*/
         keyPadButtons.array.forEach( (button) => {
              
            button.addEventListener('click',()=>{
                calculadora(button,display);
            })
         })   
     });


function calculadora (button,display){
  switch (button.innerHTML){
      case 'C':
       borrar(display);
       break;

     case '=':

         calcular(display);
         break;

     default:
         actualizar(display, button);
         break;
  }
}


function calcular(display){
   display.innerHTML = eval(display.innerHTML); 
}


function actualizar(display,button){
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML +=button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}