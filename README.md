# Sequelize-Basics-CRUD

## Quick Start the Repo with vanilla NodeJS with ES6 support

```sh
mkdir sequelize-basics-crud
cd sequelize-basics-crud

npm init -y

git init

npm install --save-dev dotenv-cli nodemon eslint jest supertest

echo "node_modules" >> .gitignore
echo ".env" >> .gitignore

echo "ENV_VAR=bootstrap" >> .env
```

Configure the `package.json`.

```json
{
  "type": "module",
  ...
  "scripts": {
    "start": "node index.js",
    "start:dev": "dotenv nodemon index.js",
    "lint": "eslint .",
    "lint:fix": "eslint --fix .",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

Create dummy `index.js` to verify `dotenv-cli` installation.
```js
logger.debug('Hello World!');
logger.debug(`process.env.ENV_VAR=${process.env.ENV_VAR}`);
```

Verify the set up with `npm start` and `npm run start:dev`.

## Install Sequelize and Start Exploring

For development environment, configure `.env` to bypass Postgres setup without SSL support.
```
PG_SSL_MODE=false
```

Follow notes in: https://thoughtworks-sea.github.io/developer-training/#/backend/postgresql/sequelize-basics?id=installation

## Notes for Doubts

### ES Lint reported issues

-  We could disable some of these with `// eslint-disable-line`.

1. `Top-level await`: Cannot use keyword 'await' outside an async function.
    - [Node.js v14.3.0 supports experimental flag `--experimental-top-level-await`](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md#support-for-top-level-await)
    - Without experimental flag, we could workaround this issue by the following. However, if we choose to do it this way, consumers will not be aware that there are some blocking codes. See: [Stack Overflow](https://stackoverflow.com/questions/39679505/using-await-outside-of-an-async-function).
      ```js
      await myAsyncFunction;
      // → SyntaxError: await is only valid in async function

      (async () => {
        await myAsyncFunction);
        // → 🎉
      }());
      ```
    - The demonstration files are added to `.eslintignore`.
