import { initContent } from "../../main";
import "./HOME.css";

const template = () => `
    <section id="Home">
        <button id="btnBackground">CHANGE BACKGROUND</button>
        <button id="logout">LOGOUT</button> 
        <h1 class="saludo">Hola, ${localStorage.getItem("user")}. Bienvenido a mi Hub de Apps</h1>
          <div class="hub">
            <button id="pokeapi">POKEAPI</button>
          </div>
          <div class="hub">
              <button id="ipgeolocation">IP-GEOLOCATION</button>
          </div>
          <div class="hub">
              <button id="sps">SPS</button>
          </div>
    </section>
`;


//&Aquí hacemos la funcion del Random Color
const getNumber = () => `${Math.floor(Math.random() * 256)}`;

const generateRandomRgb = () => `rgb("${getNumber()},${getNumber()},${getNumber()}");`

export const changeBackground = () => {
    document.body.style.background = generateRandomRgb();
};

const logout = () => {
  localStorage.removeItem("user");

  
  //&Aqui va a redireccionar al login.
}
const addListeners = () => {
  document
    .querySelector("#btnBackground")
    .addEventListener("click", () => initContent("CHANGE BACKGROUND"));
  document
    .querySelector("#ipgeolocation")
    .addEventListener("click", () => initContent("IP-GEOLOCATION"));
  document
    .querySelector("#pokeapi")
    .addEventListener("click", () => initContent("POKEAPI"));
  document
    .querySelector("#sps")
    .addEventListener("click", () => initContent("SPS"));
  document
  .querySelector("#logout")
  .addEventListener("click", () => initContent("LOGOUT"));
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};

