import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/index';
import Button from '../../../components/Button';

function CadastroCategoria () {
    //desestruturação antes do '=' com []
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        titulo: '',
        cor: '',
        link_extra: {
            text: '',
            url: '',
        }
    }
    const [valores, setValores] = useState(valoresIniciais);

    useEffect(() => {
        console.log("Aqui");
        const URL = 'http://localhost:8080/categorias';

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

    function handleOnChange(eventInfos){
        alterarValores(
            eventInfos.target.getAttribute('name'),
            eventInfos.target.value
        );
        //Isso pode ser feito da forma abaixo, mas deu erro
        // const { getAttribute, value } = eventInfos.target;
        // alterarValores( 
        //     getAttribute('name'),
        //     value
        // );
    }

    function alterarValores(nomeProp, valor){
        setValores({
            ...valores,    
            [nomeProp]: valor // 'nome': valor, no lugar de if, por exemplo. Pega como índices de um array
        });
    }

    return (
        <PageDefault>
            <h1>
                Cadastro de categoria: {valores.titulo}
            </h1>

            <form onSubmit={function handleSubmit(eventInfos){
                eventInfos.preventDefault();
                //[...categorias] é para pegar os itens que já existem na lista e mantê-los, adicionando o novo]
                setCategorias([
                    ...categorias, 
                    valores
                ]);

                setValores(valoresIniciais);
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

                <Button>
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