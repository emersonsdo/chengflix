import configs from '../config';

const URL_CATEGORIAS = `${configs.BASE_URL}/categorias`;

function getAll() {    
    return fetch(`${URL_CATEGORIAS}`)
        .then(async (response) => {
        if(response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }

        throw new Error('Não foi possível carregar os dados :(')
    } );
}

function getAllWithVideos() {    
    return fetch(`${URL_CATEGORIAS}?_embed=videos`)
        .then(async (response) => {
        if(response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }

        throw new Error('Não foi possível carregar os dados :(')
    } );
}

export default {
    getAll,
    getAllWithVideos,
};