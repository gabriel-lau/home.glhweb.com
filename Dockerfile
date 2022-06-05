# syntax=docker/dockerfile:1

FROM node
ENV NODE_ENV=production

WORKDIR /app

RUN ls -al

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
COPY . ./
RUN npm run build
RUN npm install -g serve
#RUN serve -s build

COPY . .

CMD [ "serve", "-s", "build" ]
