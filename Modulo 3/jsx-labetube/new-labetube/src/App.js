//import logo from './logo.svg';
import './App.css';

function App() {
  const tituloVideo = "iframe"
  const tituloVideo2 = "youtube"
  const arrayNome = ["Bloody", "Beach" ,"rabbit six"]
 
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
    <div className="tela-inteira">
    <header className="header">
      <div>
        <h1>New Labe Tube</h1>
     </div>
     <div>
          <input type="text" id="Texto-Busca" placeholder=" Buscar" />
      
          <button id="Busca" onClick={reproduzVideo} > Buscar </button>
          </div>
    </header>
<main>
<nav className="menu-vestical">

  <ul> 
    <li><button className="botoes-menu2">Inicio</button></li>
    <li> <button className="botoes-menu2">Em Alta</button></li>
    <li> <button className="botoes-menu2">Inscrições</button></li>
    <hr/>
    <li className="botoes-menu">Originais</li>
    <li className="botoes-menu">Historico</li>
  
  </ul>
 
</nav>

<section className="painel-videos">

<div className="box-video-media" onClick={reproduzVideo}>    
<iframe  title={tituloVideo}
width="320" height="240"  src="https://storage.googleapis.com/future-apis.appspot.com/1.mp4" type="video" alt="video1" 
frameborder="0" allowfullscreen />
<h4>{tituloVideo}</h4>
</div>
<div className="box-video-media" onClick={reproduzVideo}>
<iframe  title={tituloVideo} width="320" height="240" src='https://www.youtube.com/watch?v=E7wJTI-1dvQ&t=155s'frameborder="0" allowfullscreen />
<h4>{tituloVideo2}</h4>
</div>
<div className="box-video-media"  onClick={reproduzVideo}>
<video  controls width="320" height="240"  src="https://storage.googleapis.com/future-apis.appspot.com/2.mp4"    type="video" alt="video1"/>
<h4>{arrayNome[0]}</h4>
</div>
<div className="box-video-media"  onClick={reproduzVideo}>
<video controls width="320" height="240"  src="https://storage.googleapis.com/future-apis.appspot.com/4.mp4" type="video" alt="video1"/>
<h4>{arrayNome[1]}</h4>
</div>
<div className="box-video-media"  onClick={reproduzVideo}>
<video controls width="320" height="240"  src="https://storage.googleapis.com/future-apis.appspot.com/6.mp4" type="video" alt="video1"/>
<h4>{arrayNome[2]}</h4>
</div>
<div className="box-video-media"onClick={reproduzVideo}  >
<video controls width="320" height="240"  src="https://storage.googleapis.com/future-apis.appspot.com/7.mp4" type="video" alt="video1"/>
<h4>Aero Beach</h4>
</div>
<div className="box-video-media" onClick={reproduzVideo} >
<video controls width="320" height="240"  src="https://storage.googleapis.com/future-apis.appspot.com/8.mp4" type="video" alt="video1"/>
<h4>Rock Waterfall</h4>
</div>
<div className="box-video-media"  onClick={reproduzVideo}>
<video controls width="320" height="240"  src="https://storage.googleapis.com/future-apis.appspot.com/9.mp4" type="video" alt="video1"/>
<h4>Nasa</h4>
</div>
<div className="box-video-media" onClick={reproduzVideo} >
<video controls width="320" height="240"  src="https://storage.googleapis.com/future-apis.appspot.com/10.mp4" type="video" alt="video1"/>
<h4>Ireland´s Beauty</h4>
</div>
<div></div>
</section>
  </main>
  <footer className="footer">
            <p>Oi! Eu moro no footer!</p>
        </footer>
  </div>
  </div>
  );
}

export default App;
