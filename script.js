let contadorDeParesEImpares = 0
let contadorFactoria = 0
let contadoreDeTablas = 0
let contadorAdivina = 0
let contadorFibonacci = 0
let contadorNumerosPrimos = 0
let contadorTemperatura = 0
let contadorPotencia = 0
let contadorJuego = 0
function paresImpares() {


  let numero = Number(prompt("Por favor, ingresa un número:"));

  if (numero) {
    let contadorPares = 0;
    let contadorImpares = 0;
    let num = 1;

    while (num <= numero) {
      if (num % 2 == 0) {

        contadorPares++;
      } else {

        contadorImpares++;
      }
      num++;
    }

    console.log("Cantidad de números pares: " + contadorPares);
    console.log("Cantidad de números impares: " + contadorImpares);
  }

}

function calculardoraFactoria() {
  let numero = Number(prompt("ingrese un numero"))
  let num = 1
  let factor = 1
  while (num < numero) {
    num++
    factor *= num

  }
  console.log("el factorial de " + numero + "=" + factor)

}

function tablas() {
  let numero = Number(prompt("ingrese el numero de la tabla"))
  let tabla = 1
  while (tabla <= 10) {
    console.log(numero + "*" + tabla + "=" + (numero * tabla))
    tabla++
  }

}

function adivina() {
  let numero = (Number(prompt("ingrese un numero")))
  let randon = Math.floor(Math.random() * 100)

  while (numero != randon) {
    if (numero < randon) {
      numero = Number(prompt(("el numero es bajo")))
    }
    else if (numero > randon) {
      numero = Number(prompt(("el numero es alto")))
    }


  } console.log("adivinaste el numero")

}

function fibonacci(termino) {
  function generarFibonacci(termino) {
    let fibo = [0, 1];
    if (termino <= 0) {
      return [];
    } else if (termino === 1) {
      return [0];
    } else if (termino === 2) {
      return [0, 1];
    }


    for (let i = 2; i < termino; i++) {
      let siguienteTermino = fibo[i - 1] + fibo[i - 2];
      fibo.push(siguienteTermino);
    }

    return fibo;
  }


  let terminoUsuario = parseInt(prompt("Ingrese el término de la secuencia de Fibonacci que desea generar:"));


  let secuenciaFibonacci = generarFibonacci(terminoUsuario);

  console.log("Secuencia de Fibonacci hasta el término " + terminoUsuario + ":");
  console.log(secuenciaFibonacci);

}
function primos() {


function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  if (numero <= 3) {
    return true;
  }
  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }

  for (var i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}


function sumaPrimerosNPrimos(N) {
  let suma = 0;
  let numeroActual = 2; 

  while (numeero > 0) {
    if (esPrimo(numeroActual)) {
      suma += numeroActual;
      numeero--;
    }
    numeroActual++;
  }

  return suma;
}


let numeero = Number(prompt("Ingrese el valor de numero para calcular la suma de los primeros N números primos:"));


let resultado = sumaPrimerosNPrimos(numeero);

console.log("La suma de los primeros " + numeero + " números primos es: " + resultado);

}


function temperatua() {
  let inicioTemperatura = true

  while (inicioTemperatura) {

    let opcion = Number(prompt("Elija la conversión que desea hacer:\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius \n3. Salir"));
    switch (opcion) {
      case 1: {

        let celsius = Number(prompt("Ingrese la temperatura en grados Celsius:"));
        console.log(celsius + ' grados Celsius son ' + ((celsius * 9 / 5) + 32) + ' grados Fahrenheit.');
      }
        break
      case 2: {

        let fahrenheit = Number(prompt("Ingrese la temperatura en grados Fahrenheit:"));
        console.log(fahrenheit + ' grados Fahrenheit son ' + ((fahrenheit - 32) * 5 / 9) + ' grados Celsius.');
      } break
      case 3:{
       inicioTemperatura = false
      
      }

        break
      
    }
    
  }
}


function potencia() {
  let numeroBase = Number(prompt("ingrese el numero base"))
  let numeroExponencial = Number(prompt("ingrese la potencia"))
  let resultado = numeroBase ** numeroExponencial
  console.log("el resultado es : " + resultado)

}
function juego() {
  let terminar = Number(prompt("para empezar percione 1 \n para salir presione 0"))
  while (terminar != 0) {
    let maquina = Math.floor(Math.random() * 3)
    let jugador = Number(prompt("1: piedra \n 2: papel \n 3 tijera"))
    if (maquina == 1 && jugador == 1) {
      console.log("maquina: piedra: \n empate")
    }
    else if (maquina == 1 && jugador == 2) {
      console.log("maquina: piedra: \n ganaste")
    }
    else if (maquina == 1 && jugador == 3) {
      console.log("maquina: piedra: \n perdiste")
    }
    else if (maquina == 2 && jugador == 1) {
      console.log("maquina: papel: \n perdiste")
    }
    else if (maquina == 2 && jugador == 2) {
      console.log("maquina: papel: \n empate")
    }
    else if (maquina == 2 && jugador == 3) {
      console.log("maquina: papel: \n ganaste")
    }
    else if (maquina == 3 && jugador == 1) {
      console.log("maquina: tijera: \n ganaste")
    }
    else if (maquina == 3 && jugador == 2) {
      console.log("maquina: tijera: \n perdiste")
    }
    else if (maquina == 3 && jugador == 3) {
      console.log("maquina: tijera: \n empate")
    }
    terminar = Number(prompt("para empezar percione 1 \n para salir presione 0"))
  }

}

//-------------------------------------------------------------------------------------------
let contraseña = prompt("ingrese su contraseña")
if (contraseña == "secreto123") {
  console.log("acceso concedido")



  let salir = Number(prompt("para ingresar el programa oprima 1\n para salir presione 0"))
  while (salir != 0) {

    let menu = Number(prompt("ingrese la opcion deseada \n 1: pares e impares \n 2: calcular factoriales \n 3: tablas de multiplicar\n 4: adivina el numero \n 5: numeros primos\n 6: fibinacci \n 7: comvertidor de temperatura \n 8: calcular potencia \n 9: piedra, papel o tijero"))


    switch (menu) {
      case 1:
        let regresarUno = Number(prompt("desea continuar?; \n 1: continuar \n 0: regresar"))
        if (regresarUno = 1) {
          console.log("pares e impares:\n elije un umero para saber cuantos numeros pares e impares hay dentro de diho numero")
          paresImpares()
        } else {
          console.log("has regresado al menu")
        }
        contadorDeParesEImpares++
        break

      case 2:
        let regresarDos = Number(prompt("desea continuar?; \n 1: continuar \n 0: regresar"))
        if (regresarDos != 0) {
          console.log("calculadora de factoriales: \n ingrese el numero del cual queires saber su factorial")
          calculardoraFactoria()
        } else {
          console.log("has regresado al menu")
        }
        contadorFactoria++
        break

      case 3:
        let regresarTres = Number(prompt("desea continuar?; \n 1: continuar \n 0: regresar"))
        if (regresarTres != 0) {
          console.log("tablas de multiplicar:\n seleciona el numero del cual quieras saber su tabla de multiplicar ")
          tablas()
        } else {
          console.log("has regresado al menu")
        }
        contadoreDeTablas++
        break

      case 4:
        let regresarCuetro = Number(prompt("desea continuar?; \n 1: continuar \n 0: regresar"))
        if (regresarCuetro != 0) {
          console.log("adivina el numero:\n intenta adivinar el numero oculto, la maquina te dara pistas")
          adivina()
        } else {
          console.log("has regresado al menu")
        }
        contadorAdivina++
        break

      case 5:
        let regresarCinco = Number(prompt("desea continuar?; \n 1: continuar \n 0: regresar"))
        if (regresarCinco != 0) {
          console.log("numeros primos:\n ingrese un numero para ver la suma de la cantidad de numeros que elegiste")
          primos()   
        }
        else {
          console.log("has regresado al menu")
        }
        contadorNumerosPrimos++
        break

      case 6:
        let regresarSeis = Number(prompt("desea continuar?; \n 1: continuar \n 0: regresar"))
        if (regresarSeis != 0) {
          console.log("fibonacci: ingrese un numero para ver la secuencia de fibonacci hasta ese numero")
          fibonacci()
        } else {
          console.log("has regresado al menu")
        }
        contadorFibonacci++
        break


      case 7:
        let regresarSiete = Number(prompt("desea continuar?; \n 1: continuar \n 0: regresar"))
        if (regresarSiete != 0) {
          console.log("convertidor de temperatura:\n ingrese la temperatura y a que medida la quieres ver")
          temperatua()
        } else {
          console.log("has regresado al menu")
        }
        contadorTemperatura++
        break


      case 8:
        let regresarOcho = Number(prompt("desea continuar?; \n 1: continuar \n 0: regresar"))
        if (regresarOcho != 0) {
          console.log("calcular potencia:\n ingrese un numero base y luego el numero al cual lo quieres exponer")
          potencia()
        } else {
          console.log("has regresado al menu")
        }
        contadorPotencia++
        break

      case 9:
        let regresarNueve = Number(prompt("desea continuar?; \n 1: continuar \n 0: regresar"))
        if (regresarNueve != 0) {
          console.log("piedra papel o tijera:\n juega un juego clasico de piedra papel o tijera contra la maquina")
          juego()
        } else {
          console.log("has regresado al menu")
        }
        contadorJuego++
        break

    }
    salir = Number(prompt("para ingresar el programa oprima 1\n para salir presione 0"))
  }
  console.log("la catntidad de veces que uso:pares e impares fue:" + contadorDeParesEImpares)
  console.log("la catntidad de veces que uso: factoriales fue:" + contadorFactoria)
  console.log("la catntidad de veces que uso: tablas fue" + contadoreDeTablas)
  console.log("la catntidad de veces que uso: adivina el numer fue:" + contadorAdivina)
  console.log("la catntidad de veces que uso: numeros primos fue:" + contadorNumerosPrimos)
  console.log("la catntidad de veces que uso: fibonacci fue" + contadorFibonacci)
  console.log("la catntidad de veces que uso: convertidor de temperatura fue" + contadorTemperatura)
  console.log("la catntidad de veces que uso: calculadora de pontencia fue " + contadorPotencia)
  console.log("la catntidad de veces que uso: piedra papel o tijera fue" + contadorJuego)



}


else {

  console.log("acceso denegado")
}