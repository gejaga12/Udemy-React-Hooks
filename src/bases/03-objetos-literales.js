const persona = {
  nombre: "Gerardo",
  apellido: "García",
  edad: 29,
  direccion: {
    ciudad: "Corrientes",
    zip: 25555454,
    lat: 14.2525,
    lng: 22.3665,
  },
};

// console.table({persona});
const persona2 = { ...persona };

persona2.nombre = "Miguel Angel";
persona2.apellido = "Palermo";
persona2.edad = 15;

console.log(persona);

console.log(persona2);
