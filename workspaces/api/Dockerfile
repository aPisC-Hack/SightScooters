FROM node:16-alpine as builder
WORKDIR /app

# Copy package jsons
COPY package.json package.json
COPY workspaces/common/package.json workspaces/common/package.json
COPY workspaces/api/package.json workspaces/api/package.json

# Install dependencies
RUN yarn --production=false

# Copy source code
COPY workspaces/common workspaces/common
COPY workspaces/api workspaces/api

# Build project
RUN yarn workspaces run build


FROM node:16-alpine as server
WORKDIR /app

COPY package.json package.json
COPY --from=0 /app/workspaces/api workspaces/api
RUN yarn --production=true

ENV NODE_PORT=80

CMD yarn workspace api start


