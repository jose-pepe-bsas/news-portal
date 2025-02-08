FROM node:18-alpine

RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1

WORKDIR /opt/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

# build strapi admin panel
RUN npm run build

# use strapi port
EXPOSE 1337

# Start prod mode
CMD ["npm", "run", "start"]
