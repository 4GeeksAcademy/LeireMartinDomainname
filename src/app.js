/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = generateDomainList();
  });
};

let generarDominios = () => {
  let pronouns = ["the", "our", "a", "that", "her", "my"];
  let adjectives = ["fantastic", "tiny", "cute", "best", "shinny", "weird"];
  let nouns = ["web", "corner", "net", "house", "love", "kitchen"];
  let domains = [".com", ".net", ".es", ".org"];

  let domainsList = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < domains.length; l++) {
          let nombreDeDominio =
            pronouns[i] + adjectives[j] + nouns[k] + domains[l];

          domainsList.push(nombreDeDominio);
        }
      }
    }
  }
  return domainsList;
};

generarDominios();

let generateDomainList = () => {
  let domainNames = generarDominios();

  let listaDeNombres = "<ul>";
  for (let i = 0; i < domainNames.length; i++) {
    listaDeNombres += `<li>${domainNames[i]}</li>`;
  }
  listaDeNombres += "</ol>";

  return listaDeNombres;
};

console.log("Hello Rigo from the console!");
