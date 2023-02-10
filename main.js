import "./style.css";

import { printTemplate as headerTemplate } from "./components/HEADER/header";
import { printTemplate as homeTemplate } from "./pages/HOME/home";
import { printTemplate as ipTemplate } from "./pages/IP-GEOLOCATION/ip";
import { printTemplate as pokeapiTemplate } from "./pages/POKEAPI/pokeapi";
import { printTemplate as spsTemplate } from "./pages/SPS/sps";
import { printTemplate as loginTemplate } from "./pages/LOGIN/login";



export const initContent = (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("user") ? homeTemplate() : loginTemplate();
      break;
    case "HOME":
      homeTemplate();
      break;
    case "IP-GEOLOCATION":
      ipTemplate();
      break;
    case "POKEAPI":
      pokeapiTemplate();
      break;
    case "SPS":
      spsTemplate();
      break;
    case "LOGIN":
      loginTemplate();
      break;
  }
};

headerTemplate(); 
initContent();

