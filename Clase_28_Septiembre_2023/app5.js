/**
 * @type {HTMLUListElement}
 */
const lista = document.querySelector("#resultados");

/**
 * Esta funcion permite controlar el evento submit sobre el formulario
 * @param {SubmitEvent} evt
 */
const controlador5 = (evt) => {
  evt.preventDefault();

  const resultados = [];
  const numeros = Array.from(new FormData(evt.target).values()).map(Number);
  const [a, b, c] = numeros;

  resultados.push(`Mayor: ${Math.max(...numeros)}`);
  resultados.push(`Menor: ${Math.min(...numeros)}`);

  if (new Set(numeros).size === 1) resultados.push("Todos son iguales");
  else if (a === b)
    resultados.push("El primer numero es igual al segundo numero");
  else if (a === c)
    resultados.push("El primer numero es igual al tercer numero");
  else if (b === c)
    resultados.push("El segundo numero es igual al tercer numero");
  else resultados.push("Todos son diferentes");

  lista.textContent = "";
  lista.insertAdjacentHTML(
    "afterbegin",
    `${resultados.map((r) => `<li>${r}</li>`).join("")}`
  );
};

document.querySelector("#app5-form").addEventListener("submit", controlador5);
