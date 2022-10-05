//PRIMERA PRUEBA. Ver orden en que se imprimen los mensajes.
function primerMensaje(){
     console.log('Primer mensaje');
}
function segundoMensaje (){
    console.log ('Segundo mensaje');
}
primerMensaje();
segundoMensaje();

//SEGUNDA PRUEBA CON setTimeout. Cambia el orden de los mensajes.
function primerMensajeDelay (){
    setTimeout(function()
     {console.log('Primer mensaje');
}, 2000)
 }
 
function segundoMensaje1 (){
    console.log ('Segundo mensaje');
}
primerMensajeDelay();
segundoMensaje1();
//TERCERA PRUEBA: Forzamos el orden de los mensajes.
function primerMensajeF (fn){
    setTimeout(function()
     {console.log('Primer mensaje');
     fn();
}, 2000)
 }
 
 function segundoMensajeF (){
    console.log ('Segundo mensaje');
}
primerMensajeF(segundoMensajeF);