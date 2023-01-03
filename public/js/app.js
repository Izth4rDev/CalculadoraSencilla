//variables
const num9 = document.querySelector('#num9');
const num8 = document.querySelector('#num8');
const num7 = document.querySelector('#num7');
const num6 = document.querySelector('#num6');
const num5 = document.querySelector('#num5');
const num4 = document.querySelector('#num4');
const num3 = document.querySelector('#num3');
const num2 = document.querySelector('#num2');
const num1 = document.querySelector('#num1');
const num0 = document.querySelector('#num0');
const borrar = document.querySelector('#opAC');
const igual = document.querySelector('#igual');
const suma = document.querySelector('#suma');
const restar = document.querySelector('#opRest');
const mult = document.querySelector('#opMult');
const formulario = document.querySelector('#formulario');
const pantalla = document.querySelector('#pantalla');
let numbers = [];
let resultado = 0;
let numConvert = 0;
let operatorant = '';
let temporal = 0; 

eventListener();

//eventos
function eventListener (){

    num9.addEventListener('click', ()=>{

       numbers = [...numbers,num9.value];
       concatenarNums(numbers);
    
    });

    num8.addEventListener('click', ()=>{

        numbers = [...numbers,num8.value];
        concatenarNums(numbers);

    });

    num7.addEventListener('click', ()=>{

        numbers = [...numbers,num7.value];
        concatenarNums(numbers);

    });

    num6.addEventListener('click', ()=>{

        numbers = [...numbers,num6.value];
        concatenarNums(numbers);

    });

    num5.addEventListener('click', ()=>{

        numbers = [...numbers,num5.value];
        concatenarNums(numbers);

    });

    num4.addEventListener('click', ()=>{

        numbers = [...numbers,num4.value];
        concatenarNums(numbers);

    });

    num3.addEventListener('click', ()=>{

        numbers = [...numbers,num3.value];
        concatenarNums(numbers);

    });

    num2.addEventListener('click', ()=>{

        numbers = [...numbers,num2.value];
        concatenarNums(numbers);

    });

    num1.addEventListener('click', ()=>{

        numbers = [...numbers,num1.value];
        concatenarNums(numbers);

    });

    num0.addEventListener('click', ()=>{

        numbers = [...numbers,num0.value];
        concatenarNums(numbers);

    });

    borrar.addEventListener('click', () =>{

        resultado = 0;
        limpiarPantalla();

    });


    restar.addEventListener('click', () =>{

        const calculo = new calculadora(numConvert, resultado);
        operar(calculo, '-');

    });

    suma.addEventListener('click', () =>{

        const calculo = new calculadora(numConvert, resultado);
        operar(calculo, '+');

    });

    igual.addEventListener('click', () =>{

        const calculo = new calculadora(numConvert, resultado);
        operar(calculo,'=');

    });

    mult.addEventListener('click', () =>{

        const calculo = new calculadora(numConvert, resultado);
        operar(calculo, 'x');

    });

}

class ui {

    agregarPantalla(numPantalla){

        pantalla.value = numPantalla;
        console.log(numPantalla);

    }

}

class calculadora {

    constructor(numConvert){

        this.numConvert = numConvert;

    }

    sumar(operator){

        console.log('operador' + operator);

        if(operator === ''){

            operator = '+';

        }

       if(operator === '+'){

            console.log('dentro del if vacio' + operator);
            console.log(`${resultado} + ${this.numConvert}`);
            resultado = resultado + this.numConvert ;
            numbers= [];
            limpiarPantalla();
            UI.agregarPantalla(resultado);

        }else{

            this.igual(operator);

        }
    }

    restar(operator){
        
        if(operator === ''){

            operator = '-';

        }

        if(operator === '-') {

        console.log(`resultado = ${resultado}`);
        console.log(`numero tecleado = ${numConvert}`);

            if(resultado === 0){

                resultado = this.numConvert;

            }else{

                resultado = (resultado - this.numConvert);

            }

        console.log(`${resultado} - ${this.numConvert} `); 
        console.log(`= ${resultado}`);
        limpiarPantalla();
        UI.agregarPantalla(resultado);

        }else{

         this.igual(operator);

        }
    }

    multiplicar(operator){

        if(operator === ''){

            operator = 'x';

        }

        if(operator === 'x'){

            if (temporal === 0){ // if para la primera multiplicacion para que esta no sea 0 en la primer uso del boton X

                temporal = temporal + 1;
                numbers= [];
                resultado= this.numConvert;
                limpiarPantalla();
                UI.agregarPantalla(resultado);

            }else{
                console.log(`num1 ${resultado} * num2 ${this.numConvert}`);
                resultado = resultado * this.numConvert;
                console.log(resultado);
                numbers= [];
                limpiarPantalla();
                UI.agregarPantalla(resultado);
                temporal=temporal+1;

            }

        }else{


            this.igual(operator);

        }


        

    }

    igual(operator){

        console.log('operador dentro de funcion igual'+ operator);

        switch(operator){

            case '+' : this.sumar(operator);
            break;
            
            case '-': this.restar(operator);
            break;

            case 'x' : this.multiplicar(operator);
            break;
        }
    }
}

//funciones
function concatenarNums(numeros){

    let consolidado = '';

    numeros.forEach( function (num){
       // console.log(consolidado);
        consolidado = consolidado + num;
        
    });
    
    //console.log(consolidado);
    UI.agregarPantalla(consolidado);
    numConvert = parseInt(consolidado);
    console.log(numConvert);

}


function limpiarPantalla(){

    formulario.reset();
    operatorant = '';
    numbers = [];
    console.log(numbers);

}

//console.log(numConvert);

function operar(objetoCalc, operator){

   switch(operator){

        case '+' : objetoCalc.sumar(operatorant);
                 operatorant = operator;
        break;

        case '-': objetoCalc.restar(operatorant);
                operatorant = operator;
        break;

        case '=':objetoCalc.igual(operatorant);
                operatorant = operator;
        break;

        case 'x':objetoCalc.multiplicar(operatorant);
                 operatorant = operator;
        break;

        default: alert('Error');
        break;
    }

    console.log('fin'+operatorant);

}

const UI = new ui();