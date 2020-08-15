import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import videoReporitory from '../../../repositories/videos';
import categoriaRepositories from '../../../repositories/categorias';

function CadastroVideo () {
    const history = useHistory();  
    const [categorias, setCategorias] = useState([]);
    //Equivalentes
    const titulosDasCategorias = categorias.map(({titulo}) => titulo );
    // const titulosDasCategorias = categorias.map((categoria) => (
    //     categoria.titulo
    // ));

    const { handleOnChange, valores } = useForm({
        categoria: '',
        titulo: '',
        url: '',
    }); 

    useEffect(() => {
        categoriaRepositories.getAll()
        //async await é de mais fácil leitura...
        .then((categorias) => {
            setCategorias(categorias);
        });
    },[]);

    return (
        <PageDefault>
            <h1>
                Cadastro de vídeos
            </h1>

            <form onSubmit={(event) => {
                event.preventDefault();

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === valores.categoria;
                })

                videoReporitory.create({
                    categoriaId: categoriaEscolhida.id,
                    titulo: valores.titulo,
                    url: valores.url
                })
                .then(() => {
                    history.push('/');
                })

            }}>
                <FormField 
                    label="Categoria: "
                    type="text"
                    name="categoria" 
                    value ={valores.categoria} 
                    onChange={handleOnChange} 
                    suggestions={titulosDasCategorias}
                />

                <FormField 
                    label="Título: "
                    type="text"
                    name="titulo" 
                    value ={valores.titulo} 
                    onChange={handleOnChange} 
                />

                <FormField 
                    label="URL: "
                    type="text"
                    name="url" 
                    value ={valores.url} 
                    onChange={handleOnChange} 
                />

                <Button type="submit">
                        Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                 Cadastrar categoria
             </Link>
         </PageDefault>
    );
}

export default CadastroVideo;