import { getHeroeById } from "./bases/08-imp-exp";
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const p1 = getHeroeById(2);
//     // reject("no se pudo encontrar el heroe");
//     resolve(p1);
//   }, 2000);
// });
// promesa
//   .then((heroe) => {
//     console.log("heroe", heroe);
//   })
//   .catch((error) => console.warn(error));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se pudo encontrar");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
















