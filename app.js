import { listarCursos, inserirCurso } from './cursoRepository.js';
import express from 'express';
const servidor = express();
servidor.use(express.json());

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

servidor.get('/mensagem/ocupado/mensagem', (req, resp) =>{

resp.send('Estou ocupado, deixe uma mensagem no email xxxxxxxx.')
})

servidor.get('/calculadora/soma/:n1/:n2', (req, resp) =>{
let n1 = Number(req.params.n1)
let n2 = Number(req.params.n2)
let soma = n1 + n2

resp.send('A soma é' + soma)
})

servidor.get('/calculadora/subtração/:n1/:n2', (req, resp) =>{
let n1 = Number(req.params.n1)
let n2 = Number(req.params.n2)
let soma = n1 - n2

resp.send('A subtração é' + soma)
})


servidor.get('/calculadora/multiplicação/:n1/:n2', (req, resp) =>{
let n1 = Number(req.params.n1)
let n2 = Number(req.params.n2)
let soma = n1 * n2

resp.send('A multiplicação é' + soma)
})


servidor.get('/calculadora/divisão/:n1/:n2', (req, resp) =>{
let n1 = Number(req.params.n1)
let n2 = Number(req.params.n2)
let soma = n1 / n2

resp.send('A divisão é' + soma)
})



servidor.get('/calculadora/soma2', (req, resp) =>{
let n1 = Number(req.query.n1)
let n2 = Number(req.query.n2)
let soma = n1 + n2

resp.send('A soma é ' + soma)
})

servidor.get('/mensagem/ola', (req, resp) =>{

   let nome = req.query.nome ?? 'você'

   resp.send('Olá ' + nome)
})

servidor.post('/media', (req, resp)=>{

   let n1 = req.body.nota1;
   let n2 = req.body.nota2;
   let n3 = req.body.nota3;
   let media = (n1+n2+n3)/3

   resp.send('A média é ' + media)
})

servidor.post('/dobro', (req, resp) =>{

   let num1 = req.body.numeros;
   let num2 = []

   for(let i = 0; i < num1.length; i++){
      num2[i] = num1[i] * 2
   }
   resp.send('O dobros dos numeros são ' + num2)
})


servidor.get('/curso', async (req, resp) => {
  let registros = await listarCursos();
  resp.send(registros);
})

servidor.post('/curso', async (req, resp) => {
  let novoCurso = req.body;

  let id = await inserirCurso(novoCurso);
  resp.send({ novoId: id });
})


servidor.listen(5001, () => console.log('Api subida com sucesso'))

