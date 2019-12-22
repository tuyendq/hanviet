FROM node:12
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Install app dependencies
RUN npm ci --only=production

# app source
COPY . .

EXPOSE 8080

CMD [ "node", "./bin/www" ]


