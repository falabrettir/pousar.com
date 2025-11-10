# 1. Ponto de Partida: Imagem do Node para o "build"
FROM node:20-alpine

# 2. Define o diretório de trabalho
WORKDIR /app

# 3. Copia os arquivos de definição de pacotes
# (Vamos criar o React com Vite no próximo passo)
COPY package.json ./
COPY package-lock.json ./

# 4. Instala as dependências
RUN npm install

# 5. Copia o resto do código
COPY . .

# 6. Expõe a porta do Vite (5173)
EXPOSE 5173

# 7. Comando para iniciar o servidor de desenvolvimento do Vite
CMD [ "npm", "run", "dev" ]