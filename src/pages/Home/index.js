import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
// import dadosIniciais from '../../data/dados_iniciais.json'; 
import categoriaRepositories from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(async () => {
    try {
      const categoriasComVideo = await categoriaRepositories.getAllWithVideos(); 
      
      //Assim o conteúdo do objeto é exibido no console   
      // console.log(categoriasComVideo); 
      //Assim o conteúdo do objeto não é exibido no console
      // console.log(`${categoriasComVideo}`);
      
      setDadosIniciais(categoriasComVideo);
    } catch(error) {
      //mostrat um popup ou algo do tipo
      console.log(`Ocorreu um erro e o desenvolvedor não tratou :(. A mensagem do erro foi: ${error.message}`)
    }
  },[]);

  return (
    <PageDefault paddingAll={0}>

      {/*&& = Se... então*/} 
      {dadosIniciais.length === 0 && <div>Carregando...</div>}

      {dadosIniciais.map((categoria, indice) => {
        if(indice === 0) {
          return(
            <div key={categoria.id}>
              <BannerMain 
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription={"Vamos conhecer como trabalham os front-ends?"}
              />

              <Carousel 
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
        
        return (
          <Carousel 
            key={categoria.id}
            category={categoria}
          />
        );}
      )}


      {/* <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Vamos conhecer como trabalham os front-ends?"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        category={dadosIniciais.categorias[4]}
      />

      <Carousel 
        category={dadosIniciais.categorias[5]}
      /> */}

    </PageDefault>
  );
}

export default Home;
