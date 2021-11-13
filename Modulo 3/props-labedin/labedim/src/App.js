import React,{Component} from 'react';
import styled from "styled-components";
//import './App.css';
//import Estrutura from './components/Estrutura';
import CardGrande from './components/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton';
import MeuBotao from './components/botao';
import fotoMinha from './img/e.jpg';

const Estrutura = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const MeuBody = styled.body`
 padding: 0;
    margin: 0;
    box-sizing: border-box;
`
const PageSection = styled.div`
width: 40vw;
margin: 10px 0;
`

const Texto2pageSection = styled.h2`
display: flex;
justify-content: center;
margin-bottom: 20px;
text-align: center;
`

 


class App extends Component {
  render() {
    return(
    <MeuBody>
    <Estrutura>
      <PageSection>
        <Texto2pageSection>Dados pessoais</Texto2pageSection>
        <CardGrande
          imagem={fotoMinha}
          nome="Athos de Oliveira"
          descricao="Oi, me chamo Athos , sou aluno na Labenu quero atuar como fullstack ao termino do curso, trabalho em uma fabrica de software."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </PageSection>
      <PageSection>
          <CardPequeno
         icone="https://thumbs.dreamstime.com/z/email-icon-isolated-13761939.jpg"
          texto2="Email:"
          endereco="ath@gmail.com"
        />       
        <CardPequeno
          icone="https://thumbs.dreamstime.com/z/location-map-navigation-icon-gps-pointer-mark-location-map-navigation-icon-gps-pointer-mark-business-travel-map-marker-red-colored-124924319.jpg"
          texto2="Endereço:"
          endereco="Rua 2 de julho"
        />

      </PageSection>

      <PageSection>
        <Texto2pageSection>Experiências profissionais</Texto2pageSection>
        <CardGrande
          imagem="https://pro2-bar-s3-cdn-cf6.myportfolio.com/63120a16-60cc-4009-93e1-3af75a7ea9d5/03f98bb8-b369-442d-9cb6-726ba582c773_rw_1920.jpg?h=f7eb1fd4b26d776e6bd23112ead7a852"
          nome="Adsoft"
          descricao="Trabalho com QA e Poduct Owner"
        />

        <CardGrande
          imagem="http://3.bp.blogspot.com/-KV-869abbR8/Tyl7wN5TphI/AAAAAAAAAAc/pJYdI4Hixz4/s400/logo%2Badsoft%2Boficial.jpg"
          nome="Adsoft"
          descricao="Trabalhei co suporte em soft de automacao e gestao empresarial."
        />
      </PageSection>

      <PageSection>
        <Texto2pageSection>Minhas redes sociais</Texto2pageSection>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://i0.wp.com/trucao.com.br/wp-content/uploads/2018/07/instagram-logo.png?fit=1200%2C1200&ssl=1"
          texto="Instagram"
        />
      </PageSection>
      <MeuBotao>Enviar</MeuBotao>
      </Estrutura>
      </MeuBody>
  );
}
}
export default App;
