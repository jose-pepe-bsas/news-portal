# News Portal by jp

## Get started

1st is to make up npm environment.

pnpm install

And by now, we can load up strapi, due there's not own start point yet.

- Start Strapi without watch mode.
npm run start

- Build Strapi admin panel.
npm run build

- Deploy Strapi project.
npm run deploy

- Seed your database with sample data.
npm run seed:example

- Display all available commands.
npm run strapi

- To get started in DEV mode:

cd /home/peace/Projects/portfolio/portal_noticias/portal-noticias
npm run develop

## Manual Deployment (having a github repo and using PostgreSQL)

1. Create a new project in Railway
2. Connect your GitHub repository
3. Add a PostgreSQL database service
4. Configure environment variables in Railway:
   - NODE_ENV=production
   - APP_KEYS=[set of random strings]
   - API_TOKEN_SALT=[random string]
   - ADMIN_JWT_SECRET=[random string]
   - JWT_SECRET=[random string]
   - DATABASE_HOST=[from Railway PostgreSQL]
   - DATABASE_PORT=[from Railway PostgreSQL]
   - DATABASE_NAME=[from Railway PostgreSQL]
   - DATABASE_USERNAME=[from Railway PostgreSQL]
   - DATABASE_PASSWORD=[from Railway PostgreSQL]

## CI/CD Deployment with GitHub Actions

1. Create a Railway token at https://railway.app/account/tokens
2. Add the token to your GitHub repository secrets as *RAILWAY_TOKEN*
3. Push to main branch to fire deployment

## Customization

Probably I'll be using a js config file for prod environment configuration, likely to be `config/env/production/server.js`.
