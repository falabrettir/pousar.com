// 1. Importe os tipos 'Request' e 'Response' do express
import express, { Request, Response } from 'express';

// Define a porta que vamos usar (a mesma do docker-compose.yml)
const PORT = 3001;

// Cria a aplicação Express
const app = express();

// Rota "raiz" (http://localhost:3001/)
//
// 2. Adicione os tipos 'Request' e 'Response' aos parâmetros
app.get('/', (req: Request, res: Response) => {
  res.send('Olá, Pousar.com! ✈️');
});

// Inicia o servidor e fica "ouvindo" a porta
app.listen(PORT, () => {
  console.log(`[servidor]: API do Pousar.com rodando em http://localhost:${PORT}`);
});