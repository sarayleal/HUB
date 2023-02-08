import { initContent } from "../../main";
import "./header.css";

const template = () => `
<nav>
<ul>
<li>
<a href="#" id="homelink">HOME</a>
</li>
<li>
<a href="#" id="iplink">IP-GEOLOCATION</a>
</li>
<li>
<a href="#" id="loginlink">LOGIN</a>   
</li>
<li>
<a href="#" id="pokeapilink">POKEAPI</a>
</li>
<li>
<a href="#" id="spslink">SPS</a>
</li>
</ul>
</nav>
`;

const addListeners = () => {
  document
    .querySelector("#homelink")
    .addEventListener("click", () => initContent("HOME"));
  document
    .querySelector("#ip-geolocationlink")
    .addEventListener("click", () => initContent("IP-GEOLOCATION"));
  document
    .querySelector("#loginlink")
    .addEventListener("click", () => initContent("LOGIN"));
  document
    .querySelector("#pokeapilink")
    .addEventListener("click", () => initContent("POKAPI"));
  document
    .querySelector("#spslink")
    .addEventListener("click", () => initContent("SPS"));
};

export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
  addListeners();
};
