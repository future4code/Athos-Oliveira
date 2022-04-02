import express, { Request, Response } from 'express';
import cors from 'cors';
import { users } from './data';
// import { AddressInfo } from "net";


const app = express();

app.use(express.json());
app.use(cors())

// const server = app.listen(process.env.PORT || 3001, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost:${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// });
//Execicio 1

app.listen(3000, ()=> {
	console.log("Server running OK 127.0.0.1:3000")
})

app.get('/', (request,  response) =>{
	response.status(200).send("get OK")
	console.log("ok")
	const id = request.params
	const senha = request.headers
	const nome = request.body
	console.log(id,senha,nome)
})

//Execicio 4
app.get('/apoios', (request,  response) =>{
	
	const listaApoios = users.map((a => a.mes))

	response.status(200).send(listaApoios)
	const id = request.params
	const senha = request.headers
	const nome = request.body
	console.log(id,senha,nome)
})
//execicio 5
app.get('/posts', (request,  response) =>{
	
	const id = request.params
	const userId = request.headers
	const title = request.body
	const body = request.body
})


import express, { Request, Response } from 'express';
import cors from 'cors';
import { users } from './data';
import { v4 as generateId } from 'uuid';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/playlists', (request: Request, response: Response) => {
   const playlists = users.map((user) => user.playlists).flat(1);

   response.status(210).send(playlists);
});

app.get('/tracks', (request: Request, response: Response) => {
   const IDPlaylist = request.body.id;

   if (!IDPlaylist) {
      response.status(400).send('O id da playlist é obrigatorio');
   }

   const playlists = users.map((user) => user.playlists).flat(1);

   let tracks;
   playlists.forEach((playlist) => {
      if (playlist.id === IDPlaylist) {
         tracks = playlist.tracks;
      }
   });
   response.send(tracks);
});

app.delete('/playlist', (request: Request, response: Response) => {
   const IDPlaylist = request.query.id;

   users.forEach((user) => {
      user.playlists = user.playlists.map((playlist: any) => {
         if (playlist.id === IDPlaylist) {
            return {};
         }
         return playlist;
      });
   });
   response.status(200).send(users);
});

app.delete('/track', (request: Request, response: Response) => {
   const trackId = request.query.id1;
   const playlistId = request.query.id2;

   const allPlaylists = users
      .map((user: any) => {
         return user.playlists;
      })
      .flat(1);

   allPlaylists.forEach((playlist: any) => {
      if (playlist.id === playlistId) {
         playlist.tracks = playlist.tracks.map((track: any) => {
            if (track.id === trackId) {
               return {};
            }

            return track;
         });
      }
   });

   response.status(200).send(allPlaylists);
});

app.get('/playlists/search', (request: Request, response: Response) => {
   const userName = request.headers.authorization;
   // console.log("usuário é",userName);
   const usuario = users.find(user => user.id === userName);
   if(!usuario) {
      response.status(404).send("usuário não encontrado");
      return
   }
   const playlistName = request.query.name; // query é sempre string, params também
   console.log(playlistName);
   const playlistsDoUsuario = usuario?.playlists;
   const playlist = playlistsDoUsuario.find(playlist => playlist.name ===
       (playlistName as string).toLocaleLowerCase())
   if(!playlist) {
      response.status(404).send("playlist não encontrada");
      return
   }
   // console.log(playlistsDoUsuario)
   response.status(200).send(playlist)
});

app.post('/playlists', (request: Request, response: Response) => {
   const userName = request.headers.authorization;
   const usuario = users.find(user => user.id === userName);
   if(!usuario) {
      response.status(404).send("usuário não encontrado");
      return
   }
   const playlistName = request.body.name;
   if(!playlistName) {
      response.status(400).send("Favor informar nome da playlist no body.");
      return
   }
   const newPlaylist = {
      id: generateId(),
      name: playlistName,
      tracks: []
   }
   // console.log(newPlaylist);
   usuario.playlists.push(newPlaylist);
   response.status(201).send("ok")
});

app.post('/playlists/:playlistId/tracks', (request: Request, response: Response) => {
   const playlists = users.map((user) => user.playlists).flat(1);
   const playlist = playlists.find((playlist: any) => playlist.id === request.params.playlistId);
   if(!playlist) {
      response.status(404).send("Playlist com este id não foi encontrada");
      return
   }
   // Validar o body primeiro, se as propriedades são corretas
   playlist.tracks.push(request.body);
   response.status(201).send("ok")
})

// /test/9 /test/10 /test/0
// /test/hello

// /teste/lucky-number/:number
// /teste/lucky-profession/:profissao

app.get('/test/hello', (req: Request, res) => res.send("olá mundo"))

app.get('/test/:number', (req: Request, res) => {
   res.send(`Seu número da sorte é ${Number(req.params.number)}`)
})


// erro CANNOT GET /test/hello2

app.listen(3003, () => console.log('Server rodando.....'));
