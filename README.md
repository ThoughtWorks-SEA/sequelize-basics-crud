# Sequelize-Basics-CRUD

## Quick Start the Repo with vanilla NodeJS

```sh
mkdir sequelize-basics-crud
cd sequelize-basics-crud

npm init -y

git init

npm install --save-dev nodemon eslint jest supertest

echo "node_modules" >> .gitignore
echo ".env" >> .gitignore

echo "ENV_VAR=bootstrap" >> .env
```

Configure the `package.json`.

```json
{
  ...
  "scripts": {
    "start": "node index.js",
    "start:dev": "nodemon index.js",
    "lint": "eslint .",
    "lint:fix": "eslint --fix .",
    "test": "jest",
    "test:coverage": "jest --coverage"
    "test:watch": "jest --watch"
  }
}
```

Create dummy `index.js` to verify installation.
```js

logger.debug('Hello World!');
logger.debug(`process.env.ENV_VAR=${process.env.ENV_VAR}`);
```

Verify the set up with `npm start` and `npm run start:dev`.

## Install Sequelize and Start Exploring

Follow notes in: https://thoughtworks-sea.github.io/developer-training/#/backend/postgresql/sequelize-basics?id=installation