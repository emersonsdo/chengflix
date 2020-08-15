 import { useState } from 'react';

//Controle de formulário
export default function useForm(valoresIniciais) {
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

    function limpar() {
        setValores(valoresIniciais);
    }

    return {
        valores,
        alterarValores,
        limpar,
        handleOnChange,
    }
}