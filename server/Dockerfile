FROM node:lts-alpine 
WORKDIR /server 
COPY package.json . 
COPY yarn.lock . 
RUN yarn install 

COPY . . 

EXPOSE 8000 

CMD ["node", "server.js"] 