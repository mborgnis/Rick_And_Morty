import { getCharacters } from './services/getData.js'; //esta trae todos la funcion anterior

// se toma el main container del HOME y el loader
const container = document.querySelector('#characters');
const loader = document.querySelector('#lds-ring');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const listCharacters = async (page = 1) => {
    loader.style.display = 'grid'; // se muestra el loader anes de llamar a la API
    const { results } = await getCharacters(page);
    loader.style.display = 'none'; // se oculta el loader una vez cargada la respuesta
    results.forEach(character => {
        const article = document.createElement('article'); // crea el nodo acticulo
        article.setAttribute('class', 'character');
        article.innerHTML = `
            <img src="${character.image}" alt="imagen del personaje ${character.name}">
            <h2>${character.name}</h2>
            <div>
                <p>${character.species}</p>
                <p class="${character.status.toLowerCase()}"></p>
            </div>
            <a href="/#/${character.id}">Ver Mas</a>
        `; // al hacer click en ver mas lleva al perfil del personaje

        container.appendChild(article);
    });
}

listCharacters();

window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1).toLocaleLowerCase().split('/')[1];
    localStorage.setItem('charID', id);
    window.location.replace('/characters.html');
});