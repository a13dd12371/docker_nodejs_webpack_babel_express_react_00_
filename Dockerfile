FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

## CMD [ "node", "./serverHttp/serverHttp.js" ]
CMD [ "/usr/src/app/node_modules/nodemon/bin/nodemon.js", "./serverHttp/serverHttp.js" ]
## CMD [ "node", "./serverExpress/serverExpress.js" ]
## CMD [ "/usr/src/app/node_modules/nodemon/bin/nodemon.js", "./serverExpress/serverExpress.js" ]
