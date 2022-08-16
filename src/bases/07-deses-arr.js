const jugadores = ["Riquelme", "Palermo", "Rojitas"];

// console.log(jugadores[0]);
// console.log(jugadores[1]);
// console.log(jugadores[2]);

const [j0, j1, j2] = jugadores;

console.log(j0, j1, j2);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// TAREA

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo Cruel");
    },
  ];
};

const [nombre, setNombre]= useState('Gerardo');
console.log(nombre);
setNombre();

