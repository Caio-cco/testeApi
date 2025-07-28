import express from 'express';
const servidor = express();


servidor.get('/helloworld', (req, resp ) =>{

    
   resp.send('helloworld!!! :)')

})

servidor.get('/mensagem/boasvindas', (req, resp) =>{


resp.send('Olá, sejam bem-vindos e bem-vindas!')

})

servidor.get('/v2/mensagem/boasvindas', (req, resp) =>{

   resp.send('Que bom que você está aqui! s2')
})

servidor.get('/mensagem/ocupado', (req, resp) =>{


resp.send('Estou ocupado no momento!')

})


servidor.listen(5001, () => console.log('Api subida com sucesso'))

