let btnGenerarArreglo = <HTMLButtonElement>(
  document.getElementById("btnGenerarArreglo")
);
let divMostrarArrAuxiliar = <HTMLDivElement>(
  document.getElementById("divMostrarArrAuxiliar")
);
let a: number[] = new Array();
let aux: number[] = new Array();
let n: number;
let copiaArreglo = a;
function generarArreglo(arreglo: number[], largo: number) {
  for (let i = 0; i < largo; i++) {
    arreglo.push(Number(prompt("ingrese un valor")));
  }
  return arreglo;
}

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
  return arregloAuxiliar;
}

btnGenerarArreglo.addEventListener("click", () => {
  n = Number(prompt("ingrese el tamaño del arreglo"));
  a = generarArreglo(a, n);
  cargarArregloAuxiliar(a, aux);
  ordenrArregloAuxiliar(a, aux);
  divMostrarArrAuxiliar.innerHTML = String(
    `el arreglo cargado es ${a}. El arreglo de posiciones en orden ascendente es ${aux} y el largo del arreglo es ${n} posiciones`
  );
});
