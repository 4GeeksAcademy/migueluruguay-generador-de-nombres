/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Variables que contienen los pronombres, adjetivos y sustantivos
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

// Función que genera los nombres de dominio
function generateDomains() {
  let domains = []; // Aquí guardamos los dominios generados
  let domainList = document.getElementById("domainList"); // Obtenemos el elemento HTML donde mostraremos los dominios

  // Tres bucles anidados para recorrer las tres listas
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        let domain = p + a + n + ".com"; // Concatenamos los valores y agregamos ".com"
        domains.push(domain); // Guardamos el dominio en el array

        // Mostramos cada dominio en el HTML
        let li = document.createElement("li"); // Creamos un elemento <li>
        li.textContent = domain; // Le damos el contenido del dominio
        domainList.appendChild(li); // Lo añadimos a la lista en el HTML
      }
    }
  }

  // Mostramos todos los dominios en la consola
  console.log(domains);
}

// Llamamos a la función cuando la página carga
window.onload = function() {
  generateDomains(); // Llamada a la función que genera dominios
  console.log("Hello Rigo from the console!");
};
