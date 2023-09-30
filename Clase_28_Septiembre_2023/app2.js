/**
 *  @type {HTMLSpanElement}
 */
const mayorQue = document.querySelector("#app2-gt");

/**
 *  @type {HTMLSpanElement}
 */
const mayorIgualQue = document.querySelector("#app2-gte");

/**
 *  @type {HTMLSpanElement}
 */
const menorQue = document.querySelector("#app2-lt");

/**
 *  @type {HTMLSpanElement}
 */
const menorIgualQue = document.querySelector("#app2-lte");

/**
 *  @type {HTMLSpanElement}
 */
const igual = document.querySelector("#app2-e");

/**
 *  @type {HTMLSpanElement}
 */
const diferente = document.querySelector("#app2-ne");

/**
 * Esta funcion permite controlar el evento submit sobre el formulario
 * @param {SubmitEvent} evt
 */
const controlador2 = (evt) => {
  evt.preventDefault();

  const [a, b] = Array.from(new FormData(evt.target).values()).map(Number);

  mayorQue.innerText = `¿El numero ${a} es mayor que ${b}? ${a > b}`;
  mayorIgualQue.innerText = `¿El numero ${a} es mayor o igual que ${b}? ${
    a >= b
  }`;
  menorQue.innerText = `¿El numero ${a} es menor que ${b}? ${a < b}`;
  menorIgualQue.innerText = `¿El numero ${a} es menor o igual que ${b}? ${
    a <= b
  }`;
  igual.innerText = `¿El numero ${a} es igual que ${b}? ${a === b}`;
  diferente.innerText = `¿El numero ${a} es diferente a ${b}? ${a !== b}`;
};

document.querySelector("#app-form").addEventListener("submit", controlador2);
