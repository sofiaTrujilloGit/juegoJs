let numeroAleatorio = 0;
let intentos=0;
let listaNumeros = []
let numMaximo = 10

function asignar(elemento,texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
}

function numAleatorio(){
    let numeroGenerado= Math.floor(Math.random()*numMaximo+1)
    console.log(numeroGenerado)
    console.log(listaNumeros)
    
    if(listaNumeros.length ==numMaximo){
        asignar('p','Ya sorteaste todos los números')
    }else{
        if(listaNumeros.includes(numeroGenerado)){
            return numAleatorio()
        }else{
            listaNumeros.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

function clean(){
    document.getElementById('valorUsuario').value = ''
}

function verificarIntento(){
    console.log(numAleatorio)
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value)

    if(numeroAleatorio===numeroUsuario){
        asignar('p',`Acertaste! en ${intentos} ${(intentos==1 ?'vez' : 'veces')}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //
        if(numeroUsuario<numeroAleatorio){
            asignar('p','El numero secreto es mayor')
        }else{
            asignar('p','El numero secreto es menor')
        }
        intentos++
        clean()
    }
    return;

}


function condicionesIniciales(){
    asignar('h1','Jueguito Adivinanza')
    asignar('p','Ingresa un número')
    numeroAleatorio = numAleatorio()
    intentos=1
}



function reiniciarJuego(){
    clean()
    condicionesIniciales()
    document.getElementById('reiniciar').setAttribute('disabled',true)
    
}

condicionesIniciales()