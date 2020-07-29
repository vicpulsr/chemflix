import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import dadosIniciais from './../../data/dados_iniciais.json'


const AppWrapper = styled.div`
  background: var(--grayDark);
`;

let links = [
  {id:"ExperimentsatHome" , titulo:"at Home | "}, 
  {id:"ExperimentsforKids" , titulo:"for Kids | "}, 
  { id: "LearningChemistry", titulo: "Learning | " },
  {id:"ChemistryHistory" , titulo:"History | "},
  {id:"ChemistrySongs", titulo: "Songs"}
] 
 

function Home() {
  return (
    <AppWrapper>

      <Menu links={links}/>
      <BannerMain 
       videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
       url={dadosIniciais.categorias[0].videos[0].url}
      />

      <Carousel id={links[0].id}
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel id={links[1].id}
        category={dadosIniciais.categorias[1]}
      />

      <Carousel id={links[2].id}
        category={dadosIniciais.categorias[2]}
      />

      <Carousel id={links[3].id}
        category={dadosIniciais.categorias[3]}
      />

      <Carousel id={links[4].id}
        category={dadosIniciais.categorias[4]}
      />

      <Footer />

    </AppWrapper>
  );
}

export default Home;
