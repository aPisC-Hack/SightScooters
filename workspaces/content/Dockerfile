FROM nginx as server
WORKDIR /app

COPY workspaces/content/public /app
COPY workspaces/content/nginx.conf /etc/nginx/conf.d/default.conf