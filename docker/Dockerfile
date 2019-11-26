FROM nginx

MAINTAINER developer ai@jfjun.com
# Create app directory
RUN mkdir -p /usr/src/app

# Install app dependencies
COPY dist  /usr/src/app/
COPY nginx.conf  /etc/nginx/

