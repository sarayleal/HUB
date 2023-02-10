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


export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
} 
