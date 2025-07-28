import express from 'express';
const servidor = express();


servidor.get('/helloworld', (res, resp ) =>{

   resp.send('helloworld!!! :)')

})




servidor.listen(5001, () => console.log('Api subida com sucesso'))

