import { initContent } from "../../main";
import "./login.css";


const template = () => {`
 <div class="containerPrincipal">
   <div class="form-group">
     <p></p>
     <input id="usuario" type="text" class="form-control" name="username" placeholder="usuario">
     <button id="botonLogin" class="botonLogin">Iniciar Sesion</button>
   </div>
 </div>
 `
};

const addListeners = () => {
  let user;
  user = document.querySelector("#usuario");
  document.querySelector("#botonLogin").addEventListener("click", () => {
    localStorage.setItem("user", user.value);
  });
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
  initContent();
  
};
