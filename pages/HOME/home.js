import { initContent } from "../../main";
import "./HOME.css";

const template = () => `
    <section id="Home">
        <h1 class="saludo>Hola, ${localStorage.getItem("user)}!>Bienvenido a mi Hub de Apps</h1>
        <div class="hub">
              <button id="pokeapi">
                <img src="https://res.cloudinary.com/damtbzspb/image/upload/v1676023794/pokeapi/Logo-Pokemon_hb3vin.png"/>
                <a href="#" id="pokelink></a>
              </button>
        </div>
    </section>
`;

const addListeners = () => {
  document
  .querySelector("#pokeapi")
  .addEventListener("click" () => initContent("Pokemon));
}

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};



 
        



/* export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template();
    addListeners();
}   */