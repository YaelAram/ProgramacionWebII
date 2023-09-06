// app1.js
document.querySelector("button").addEventListener("click", () => alert("Hola"));

// app2.js
console.log("Seccion 2");
console.log(1.2);
console.log(true);
console.log("Hola Mundo");
console.log([1, 2, 3, 4, 5]);
console.log({ status: 200, msg: "Exito" });

// app3.js
console.log("\n\nSeccion 3");
const a = 5,
  b = 6;
console.log(`Suma: ${a + b}`);
console.log(`Resta: ${a - b}`);
console.log(`Multiplicacion: ${a * b}`);
console.log(`Division: ${a / b}`);

// app4.js
console.log("\n\nSeccion 4");
const usuario = {
  nombre: "Yael",
  edad: 23,
  nacionalidad: "Mexicana",
  comprometido: false,
};

for (const key in usuario)
  console.log(`${key[0].toUpperCase() + key.slice(1)}: ${usuario[key]}`);
