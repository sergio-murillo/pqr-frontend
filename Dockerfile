# Stage 1

FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/out/ /usr/share/nginx/html
