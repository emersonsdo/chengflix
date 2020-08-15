import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/index';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria () {
    //desestruturação antes do '=' com []
    const [categorias, setCategorias] = useState([]);

    //Resolver problema de acesso a estado aninhado
    const valoresIniciais = {
        titulo: '',
        cor: '',
        link_extra: {
            text: '',
            url: '',
        }
    }

    const { valores, limpar, handleOnChange } = useForm(valoresIniciais);

    useEffect(() => {
        const isLocalHost = window.location.hostname.includes('localhost')
        //Variável de ambiente
        const URL = isLocalHost ? 'http://localhost:8080/categorias' : 'https://chengflix.herokuapp.com/categorias';
        
        fetch(URL)
            .then(async (response) => {
                const jsonResponse = await response.json();
                setCategorias([...jsonResponse]);
                console.log(`JSON: ${jsonResponse[0].link_extra.text}`);
            } )

        // setTimeout(() => {
        //     setCategorias([
        //         {
        //             id: 1,
        //             nome: "Front End",
        //             cor: '#6BD1FF',
        //             descricao: "Formação de Front End na Alura"
        //           }
        //         ]);
        // }, 2 * 1000);
    }, [/**parâmetros de quando acontecer (quando variável xpto mudar). 
    vazio para só acontecer uma vez, no carregamento da tela (tipo didMount?) */]);

    return (
        <PageDefault>
            <h1>
                Cadastro de categoria: {valores.link_extra.text}
            </h1>

            <form onSubmit={function handleSubmit(eventInfos){
                eventInfos.preventDefault();
                //[...categorias] é para pegar os itens que já existem na lista e mantê-los, adicionando o novo]
                setCategorias([
                    ...categorias, 
                    valores
                ]);

                limpar(valoresIniciais);
            }}>

                <FormField 
                    label="Nome da categoria: "
                    type="text"
                    name="titulo" 
                    value ={valores.titulo} 
                    onChange={handleOnChange} 
                />

                <FormField 
                    label="Descrição: "
                    type="textarea" 
                    name="link_extra.text" 
                    value ={valores.link_extra.text} 
                    onChange={handleOnChange} 
                />

                <FormField 
                    label="Cor: "
                    type="color" 
                    name="cor" 
                    value ={valores.cor} 
                    onChange={handleOnChange} 
                />

                {/* <div>
                    <label>
                        Nome da Categoria:
                        <input
                            type="text"
                            name="nome"
                            value={valores.nome} // Poderia ser valores['nome']
                            onChange={handleOnChange}
                        />
                    </label>
                </div> */}
                
                {/* <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            name="descricao"
                            value={valores.descricao}
                            onChange={handleOnChange}
                        />
                    </label>
                </div> */}
                
                {/* <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            name="cor"
                            value={valores.cor}
                            onChange={handleOnChange}
                        />
                    </label>
                </div> */}

                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.titulo}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                 Ir para Home
             </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;