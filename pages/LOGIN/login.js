import "./login.css"


const template = () => `
    <section class="login">
        <h2>LOGIN</h2>
    </section>
`;

export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
};
