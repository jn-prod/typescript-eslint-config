# ESLint (w/ Prettier) config

ESlint/prettier settings for personnal projects.

## Installing

In your project folder, run:

```bash
npm i -D eslint-config-jnprod # or yarn install --dev eslint-config-jnprod
npx install-peerdeps --dev eslint-config-jnprod
```

You will see several dependencies were installed.

Now, create (or update) a .eslintrc.js file with the following content:

```js
const { eslintrc } = require('eslint-config-jnprod');

const eslintConfig = eslintrc();

module.exports = {
  ...eslintConfig,
}
```

Import the .prettierrc file from this repository into your project folder

Now, create (or update) a .prettierrc.js file with the following content:

```js
const { prettierrc } = require('eslint-config-jnprod');

module.exports = {
  ...prettierrc,
}
```

## setting

You can pass a setting object to activate typescript and/or jest. To do this update .eslintrc.js by passing this setting object to eslintrc function

```js
// ...

const eslintConfig = eslintrc({ts: true, jest: true});

// ...
```