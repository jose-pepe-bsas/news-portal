FROM node:18-alpine

RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1

WORKDIR /opt/app
# This is where persistent data is going to
RUN mkdir -p .tmp

COPY ../package.json ../package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
# use strapi port
EXPOSE 1337
# starting strapi on dev mode
CMD ["npm", "run", "develop"]
