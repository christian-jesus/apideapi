# Usa una imagen base de Node.js
FROM node:20

# Configura el directorio de trabajo
WORKDIR /app

# Copia package.json e instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto en el que corre la API
EXPOSE 8080

# Comando para ejecutar la API
CMD ["node", "index.js"]
