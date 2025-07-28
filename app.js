import express from 'express';
const servidor = express();


servidor.get('/helloworld', (req, resp ) =>{

    
   resp.send('helloworld!!! :)')

})

servidor.get('/mensagem/boasvindas', (re1, resp) =>{


resp.send('Olá, sejam bem-vindos e bem-vindas!')

})



servidor.listen(5001, () => console.log('Api subida com sucesso'))

