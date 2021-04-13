const apiUrl = 'https://cats-api-demo.ew.r.appspot.com';
const tpl = document.querySelector('template').content;
const container = document.querySelector('.cat');

let page = 0;

function init () {
  fetch(`${apiUrl}/${page}`)
  .then(response => response.json())
  .then(cats => {
    container.innerHTML = '';
    cats
      .map(cat => {
        const li = document.importNode(tpl, true);
        li.querySelector('img').src = apiUrl + cat.url;
        return li;
      }).forEach(li => container.appendChild(li));
  });
  page = (page + 1 % 6);
}

init();

document.querySelector('button').addEventListener('click', init);

