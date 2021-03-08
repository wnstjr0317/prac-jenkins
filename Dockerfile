FROM node:alpine

COPY ./package.json ./



RUN npm install --save --legacy-peer-deps



COPY . .

#nodemon 사용
CMD ["npm", "config rm proxy"]
CMD ["npm", "config rm https-proxy"]
CMD ["npm", "start"]

