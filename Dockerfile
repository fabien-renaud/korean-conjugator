FROM node:14-alpine AS base
WORKDIR /app

FROM base AS test

COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "test"]

FROM base AS release

COPY package*.json .babelrc ./
COPY ./src ./src
RUN npm ci
RUN npm run build
RUN npm prune --production
EXPOSE 10081
CMD ["npm", "run", "server"]