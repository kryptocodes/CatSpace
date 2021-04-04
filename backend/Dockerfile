FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .


EXPOSE 4000
WORKDIR ./dist

CMD ["node", "dist/index.js"]
USER node