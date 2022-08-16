// desestructuracion
// ASIGNACION DESESTRUCTURANTE

const persona = {
  nombre: "Coco",
  edad: 85,
  clave: "rock",
};

// console.log(persona);

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// console.log(persona.edad);
// console.log(persona.clave);

const useContext = ({nombre,edad,clave, rango='Capitan'}) => {
    // console.log(edad, clave, nombre, rango);

     return {
        nombreClave: clave,
        anios: edad,
        latitud: {
            lat: 12.4545,
            lng: 98.8787
        }
     }
}

const {nombreClave, anios, latitud:{lat, lng}} = useContext( persona );  //DESESTRUCTURACION

console.log(nombreClave, anios);
console.log(lat, lng);
