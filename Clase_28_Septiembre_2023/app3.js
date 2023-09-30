/**
 * @type {HTMLTableSectionElement}
 */
const and = document.querySelector("#and");

/**
 * @type {HTMLTableSectionElement}
 */
const or = document.querySelector("#or");

/**
 * @type {HTMLTableSectionElement}
 */
const not = document.querySelector("#not");

const casos = [
  [false, false],
  [false, true],
  [true, false],
  [true, true],
];

and.insertAdjacentHTML(
  "afterbegin",
  `${casos
    .map(([a, b]) => `<tr><td>${a}</td><td>${b}</td><td>${a && b}</td></tr>`)
    .join("")}`
);

or.insertAdjacentHTML(
  "afterbegin",
  `${casos
    .map(([a, b]) => `<tr><td>${a}</td><td>${b}</td><td>${a || b}</td></tr>`)
    .join("")}`
);

not.insertAdjacentHTML(
  "afterbegin",
  `${[false, true].map((v) => `<tr><td>${v}</td><td>${!v}</td></tr>`).join("")}`
);
