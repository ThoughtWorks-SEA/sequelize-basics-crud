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
console.log('Hello World!');
console.log(`process.env.ENV_VAR=${process.env.ENV_VAR}`);
```

Verify the set up with `npm start` and `npm run start:dev`.