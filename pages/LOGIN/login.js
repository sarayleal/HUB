import { initContent } from "../../main";
import "./login.css";

const template = `
 <div class="containerPrincipal">
   <div class="form-group">
     <p></p>
     <input id="usuario" type="text" class="form-control" name="username" placeholder="usuario">
     <button id="botonLogin" class="botonLogin">Iniciar Sesion</button>
   </div>
 </div>
 `;
const addListeners = () => {
  const userInput = document.querySelector("#usuario");
  const loginBtn = document.querySelector("#botonLogin");
  loginBtn.addEventListener("click", () => {
    localStorage.setItem("user", userInput.value);
    initContent();
  });
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template;
  addListeners();
};
