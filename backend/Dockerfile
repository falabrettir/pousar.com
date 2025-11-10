# 1. Ponto de Partida: Usamos uma imagem oficial do Node.js
# A versão 18 é uma ótima escolha (LTS - Long Term Support)
FROM node:18-alpine

# 2. Define o "diretório de trabalho" dentro do container
WORKDIR /app

# 3. Copia os arquivos de definição de pacotes
# (Vamos criá-los no próximo passo!)
COPY package.json ./
COPY package-lock.json ./

# 4. Instala as dependências do Node.js
RUN npm install

# 5. Copia o resto do nosso código (que ainda vamos criar)
COPY . .

# 6. Expõe a porta que nossa API vai usar (definimos 3001 no compose)
EXPOSE 3001

# 7. O comando para "ligar" o servidor em modo de desenvolvimento
# (Usaremos o 'ts-node-dev' para hot-reload do TypeScript)
CMD [ "npm", "run", "dev" ]