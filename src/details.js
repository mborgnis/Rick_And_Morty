import { getCharacter } from './services/getData.js';

const container = document.querySelector('#characters');
const loader = document.querySelector('#lds-ring');
const id = localStorage.getItem('charID');

const loadCharacter = async (id) => {
    const data = await getCharacter(id);
    loader.style.display = 'none';

    const article = document.createElement('article');
    article.setAttribute('class', 'character');
    article.innerHTML = `
        <img src="${data.image}" alt="">
        <h2>${data.name}</h2>
        <p class="data"><span>Origen:</span> ${data.origin.name}</p>
        <p class="data"><span>Locación Actual:</span> ${data.location.name}</p>
        <div>
            <p class="data"><span>Especie:</span> ${data.species}</p>
            <p class="${data.status.toLowerCase()}"></p>
        </div>
    `;
    container.appendChild(article);
}

loadCharacter(id);