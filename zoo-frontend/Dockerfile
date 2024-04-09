FROM node:latest AS builder

WORKDIR /usr/src/refCard02
COPY . .
RUN npm ci
RUN npm run build

FROM nginx
COPY --from=builder /usr/src/refCard02/dist/ /usr/share/nginx/html
EXPOSE 80