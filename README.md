# expresso with Sequelize

[![Express](https://img.shields.io/badge/Express-4.18.2-informational?logo=express&color=22272E)](https://expressjs.com/)
![Node](https://badges.aleen42.com/src/node.svg)
![Eslint](https://badges.aleen42.com/src/eslint.svg)
![TypeScript](https://badges.aleen42.com/src/typescript.svg)
![Docker](https://badges.aleen42.com/src/docker.svg)

## Feature

- [TypeScript](https://github.com/microsoft/TypeScript) `5.1.x`
- [Sequelize](https://github.com/sequelize/sequelize) `6.x`
- [Nodemailer](https://github.com/nodemailer/nodemailer) `6.x`
- [Handlebars](https://github.com/wycats/handlebars.js) for templating HTML
- [Zod](https://github.com/colinhacks/zod) for validation schema `3.x`
- [SWC](https://github.com/swc-project/swc) for build runtime app `1.3.x`
- JavaScript Style [Standard with TypeScript](https://github.com/standard/eslint-config-standard-with-typescript)
- Formating code using [Prettier](https://github.com/prettier/prettier) Integration [Eslint](https://github.com/prettier/eslint-config-prettier) and [TypeScript Eslint](https://github.com/typescript-eslint/typescript-eslint#readme)
- Documentation with [Swagger](https://github.com/swagger-api/swagger-ui) OpenApi `3.x`
- Logger with [Pino](https://github.com/pinojs/pino)
- [Convensional Commit](https://www.conventionalcommits.org/en/v1.0.0/) with [Husky](https://github.com/typicode/husky) & [Commitlint](https://github.com/conventional-changelog/commitlint)

## Steps to run this project:

1. Clone this repository
2. Duplicate `.env.example` to `.env`
3. Setup database settings inside `.env` file
4. Create your database ( manual ) or run `yarn db:create && yarn db:reset`
5. Run `yarn dev` command
6. Run watch command `yarn dev:watch`
7. Release your app for _Production_ or _Staging_ with `yarn release`
8. Build your code with Docker `docker build -t yourname/express:v1.0.0 .`
9. Run with docker image `docker run -p 7000:8000 -d yourname/express:v1.0.0`
