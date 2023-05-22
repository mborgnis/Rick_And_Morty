const baseURL = 'https://rickandmortyapi.com/api';

// esta es la funcion para traer por personaje
const getCharacter = async (id) => {
    const res = await fetch(`${baseURL}/character/${id}`);
    const data = await res.json(); // esto trae el body en formato json justamente
    return data;
}

// esta es para traer todos los personajes por pagina
const getCharacters = async (page) => {
    const res = await fetch(`${baseURL}/character/?page=${page}`);
    const data = await res.json(); // esto trae el body en formato json justamente
    return data;
}

export { 
    getCharacter, 
    getCharacters 
}; //el export permite usarlo desde otro archivo