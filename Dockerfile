# Usar a imagem oficial do Node.js como imagem base
FROM node:22

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar os arquivos 'package.json' e 'package-lock.json' (ou 'yarn.lock')
COPY package*.json ./

# Instalar todas as dependências
RUN npm install

# Copiar os arquivos e diretórios restantes para o diretório de trabalho
COPY . .

# Compilar o projeto TypeScript
RUN npm run build

# Expor a porta que o NestJS usará
EXPOSE 3000

# Comando para executar o aplicativo
CMD [ "npm", "start" ]
