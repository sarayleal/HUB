import "./ip.css";

const template = () => `
    <section class="IP-GEOLOCATION">
        <h2>IP GEOLOCATION</h2>
        <img src="https://res.cloudinary.com/damtbzspb/image/upload/v1676025029/hub%20app/download_zlwwd1.jpg">
    </section>
`;

const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "ipstack1.p.rapidapi.com",
  },
};

const fetchIpInfo = (ip) => {
  return fetch("https://ipstack1.p.rapidapi.com/${ip}", OPTIONS)
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

const $ = (selector) => document.querySelector(selector);

const $form = $("#form");
const $input = $("#input");
const $submit = $("#submit");
const $results = $("#results");

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};
