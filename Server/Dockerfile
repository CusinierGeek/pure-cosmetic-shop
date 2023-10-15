FROM node:20.8

ENV NODE_ENV=development

# Créez le répertoire d'application dans l'image Docker
WORKDIR /usr/src/app

# Copiez le fichier package.json et package-lock.json dans l'image
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install


# Copiez tout le contenu de votre répertoire local dans l'image
COPY ./ ./

# Exposez le port sur lequel votre application écoute (s'il est différent de 8080, changez-le ici)
EXPOSE 8080

# Démarrez votre application Node.js
CMD [ "node", "app.js" ]
