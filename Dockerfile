FROM node:17-slim
LABEL maintainer="Bruno Santana"

WORKDIR /usr/app

# Install app dependencies
COPY package*.json ./
COPY . .
RUN npm install

ENV DATABASE_URL=postgresql://postgres:docker@localhost:5432/ments?schema=public
ENV SECRET_KEY=7f7fccd0-6ad2-4a6a-b761-ca4b5f02f930

EXPOSE 3003

CMD [ "npm", "run", "dev" ]