
import "./ip.css";

const template = () => `
    <section class="IP-GEOLOCATION">
        <h2>IP GEOLOCATION</h2>
    </section>
`;




const OPTIONS = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'ipstack1.p.rapidapi.com'
    }
  };
  
  const fetchIpInfo = ip => {
    return fetch('https://ipstack1.p.rapidapi.com/${ip}', OPTIONS)
    .then(res => res.json())
    .catch(error => console.error(error))
  }
  
  const $ = selector => document.querySelector(selector);
  
  const $form = $('#form');
  const $input = $('#input');
  const $submit = $('#submit');
  const $results = $('#results');
  
 /*  $form.addEventListener('submit' async (event) => {
    event.preventDefault()
    const {value} = $input
    if (!value) return
  
    $submit.setAtributte('disable', '')
    $submit.setAtributte('aria-busy','true')
  
    const ipInfo = await fetchIpInfo(value)
  
    if ipInfo {
       $results.innerHTML = JSON.stringify(ipInfo, null, 2);
    }
  
    $submit.removeAtributte('disable', '')
    $submit.removeAtributte('aria-busy','true')
  
  }) */

  export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template();
  };