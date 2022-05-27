let a: number[] = new Array();
let aux: number[] = new Array();
let n: number;

function cargarArregloAuxiliar(arreglo: number[], arregloDeIndices: number[]) {
  for (let i = 0; i < arreglo.length; i++) {
    arregloDeIndices.push(i);
  }
}

function comparar(numeroIzq: number, numeroDer: number) {
  if (numeroIzq === numeroDer) {
    return 0;
  } else if (numeroIzq > numeroDer) {
    return 1;
  } else return -1;
}

function ordenrArregloAuxiliar(arreglo: number[], arregloAuxiliar: number[]) {
  let copiaArreglo = arreglo;
  for (let j = 0; j < arregloAuxiliar.length; j++) {
    for (let i = 1; i < arreglo.length; i++) {
      if (comparar(copiaArreglo[i - 1], copiaArreglo[i]) === 1) {
        let numAux: number = arregloAuxiliar[i - 1];
        arregloAuxiliar[i - 1] = arregloAuxiliar[i];
        arregloAuxiliar[i] = numAux;

        let elementoArreglo: number = copiaArreglo[i - 1];
        copiaArreglo[i - 1] = copiaArreglo[i];
        copiaArreglo[i] = elementoArreglo;
      }
    }
  }
}

a[0] = 12;
a[1] = 3;
a[2] = 27;
a[3] = 16;
a[4] = 5;

cargarArregloAuxiliar(a, aux);
console.log(aux);
console.log(a);

ordenrArregloAuxiliar(a, aux);

console.log(aux);
