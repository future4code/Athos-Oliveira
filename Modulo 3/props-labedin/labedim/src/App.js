import React,{Component} from 'react';
import './App.css';
import CardGrande from './components/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton';
import fotoMinha from './img/e.jpg';


 


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={fotoMinha}
          nome="Athos de Oliveira"
          descricao="Oi, me chamo Athos , sou aluno na Labenu quero atuar como fullstack ao termino do curso, trabalho em uma fabrica de software."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
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

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
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
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://i0.wp.com/trucao.com.br/wp-content/uploads/2018/07/instagram-logo.png?fit=1200%2C1200&ssl=1"
          texto="Instagram"
        />
      </div>
    </div>
  );
}

export default App;
