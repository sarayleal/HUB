import "./sps.css";


const template = () => `
    <section class="sps">
        <h2>SPS</h2>
    </section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};
