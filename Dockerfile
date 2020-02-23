FROM node:10
WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm install --registry=http://registry.npm.taobao.org

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
