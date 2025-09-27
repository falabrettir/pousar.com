// 1. Importar os pacotes necessários
const express = require('express');
const cors = require('cors');

// 2. Inicializar o express
const app = express();
const PORT = 3000;

// 3. Configurar os middlewares
app.use(cors());
app.use(express.json());

// 4. Criar uma rota de teste
app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo à API do meu backend!</h1>');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Conexão com o backend funcionando!' });
});



// 5. INICIAR O SERVIDOR (ESTA É A PARTE MAIS IMPORTANTE)
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta http://localhost:${PORT}`);
});