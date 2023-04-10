FROM node:16-alpine3.12

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn
RUN yarn add @nestjs/cli -g

COPY . .

RUN yarn prisma generate

EXPOSE 8000

CMD ["yarn", "dev"]
