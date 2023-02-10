import { initContent } from "../../main";
import "./HOME.css";

const template = () => `
    <section id="Home">
        <h1 class="saludo">Hola, ${localStorage.getItem(
          "user")}>Bienvenido a mi Hub de Apps</h1>
        <div class="hub">
              <button id="pokeapi">POKEAPI
                <a href="#" id="pokelink"></a>
              </button>
        </div>
        <div class="hub">IP´GEOLOCATION
              <button id="ipgeolocation">
                <a href="#" id="ip"></a>
              </button>
        </div>
        <div class="hub">SPS
        <button id="sps"></button>
          <a href="#" id="sps"></a>
        </button>
        </div>
    </section>
`;

const addListeners = () => {
  document
    .querySelector("#iplink")
    .addEventListener("click", () => initContent("IP-GEOLOCATION"));
  document
    .querySelector("#pokeapilink")
    .addEventListener("click", () => initContent("POKEAPI"));
  document
    .querySelector("#spslink")
    .addEventListener("click", () => initContent("SPS"));
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};



