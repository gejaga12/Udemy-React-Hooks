//FUNCIONES EN JS

const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar("Tevez"));
console.log(saludar2("Riquelme"));
console.log(saludar2("Palermo"));
console.log(saludar4());

const getUser = () => {
  return {
    uid: "ABC123",
    username: "gejaga12",
  };
};

const getUser2 = () => ({ uid: "ZXC987", username: "gejaga99" });

const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);

const getUsuarioActivo = (nombre, edad) => ({
  uid: "ABB872",
  username: nombre,
  edad: edad,
});

const usuarioActivo = getUsuarioActivo("Fernando Activo", 50);
console.log(usuarioActivo);
