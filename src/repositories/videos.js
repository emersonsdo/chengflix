import configs from '../config';

const URL_VIDEOS = `${configs.BASE_URL}/videos`;

function create(objetoVideo) { 
    //Retirar esse complemento da url e testar
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoVideo),
    })
        .then(async (response) => {
        if(response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }

        throw new Error('Não foi possível carregar os dados :(')
    } );
}

export default {
    create,
};