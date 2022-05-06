FROM node:16-alpine as builder
WORKDIR /app

COPY package.json package.json
COPY workspaces/frontend workspaces/frontend

RUN yarn --production=false
RUN yarn workspaces run build


FROM nginx as server
WORKDIR /app

COPY --from=0 /app/workspaces/frontend/build /app
COPY workspaces/frontend/nginx.conf /etc/nginx/conf.d/default.conf