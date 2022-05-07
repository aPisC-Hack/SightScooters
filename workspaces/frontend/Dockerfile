FROM node:16-alpine as builder
WORKDIR /app

# Copy package jsons
COPY package.json package.json
COPY workspaces/common/package.json workspaces/common/package.json
COPY workspaces/frontend/package.json workspaces/frontend/package.json

# Install dependencies 
RUN yarn --production=false

# Copy source codes
COPY workspaces/common workspaces/common
COPY workspaces/frontend workspaces/frontend

# Build project
RUN yarn workspaces run build


FROM nginx as server
WORKDIR /app

COPY --from=0 /app/workspaces/frontend/build /app
COPY workspaces/frontend/nginx.conf /etc/nginx/conf.d/default.conf