import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria () {
    //desestruturação antes do '=' com []
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [valores, setValores] = useState(valoresIniciais);

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
                Cadastro de categorias: {valores.nome}
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
                    name="nome" 
                    value ={valores.nome} 
                    onChange={handleOnChange} 
                />

                <FormField 
                    label="Descrição: "
                    type="?????" 
                    name="descricao" 
                    value ={valores.descricao} 
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

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
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