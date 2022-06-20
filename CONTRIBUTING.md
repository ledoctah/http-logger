# Contributing

Before start contributing read all these guidelines to keep best practices and improve productivity.

### Development workflow

To get started you need to install all the project dependencies:

```bash
  yarn
```
> While it's possible to use ``npm`` command we highly recommend you to use ``yarn`` due to its better performance installing dependencies.

After installing all project dependencies it's time to code, so open the project in your favorite IDE and run the following command to run your code locally:

```bash
  yarn dev
```

###### Above we have some useful commands in this project.

To test your application with jest:
```bash
  yarn test
```

To build your application:
```bash
  yarn build
```

To start your application with your build:
```bash
  yarn start
```

To lint your project with prettier/eslint:
```bash
  yarn lint
```
> If you are using VSCode, click [here](#linting) to see some tips about automatically linting.

### Repository guidelines

- Never try to push your commits into ``main`` branch. Instead create your branch using the [branch name convention](#branch-name-convention), push your commits to this branch and then open a pull request.
- Before pull requesting your changes, make sure tests are working properly.
- Don't pull request your changes before running ``yarn lint`` command (or linting automatically if you have the ESLint extension).
- It's a good practice to see if everything it's working in production build, so before pull requesting build the project and test it.

### Commit message convention

This repository uses the [Conventional Commits specification v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). So in every commit you should use the following prefixes:

- ``fix``: bug fixes, e.g. fix wrong cart calculation
- ``feature``: new features, e.g. add option to redeem coupons in cart
- ``refactor``: code refactors, e.g. migrate sequelize to typeorm
- ``doc``: documentation changes, e.g. add entity and relationship model
- ``test``: adding or updating tests, e.g. unit test to order process
- ``chore``: tools change, e.g. change tslint to eslint

So in every commit you make use the prefixes above. For example, if you want to commit a feature you just developed, you should use something like this as your commit message:

``feature: add error logging on errors middleware``

> Avoid committing more than one feature/fix per commit, focus in committing only one per time, this will help code reviewing later.

### Branch name convention

We should use the same prefixes as [Commit message convention](#commit-message-convention) to the branches names. But it's a good practice to add your Github username as a prefix before specifying the branch type. So, a branch name should be defined like this:

<author-username\>/<branch-type\>/<branch-name\>

- author-username: your Github username
- branch-type: prefix based on branch type (see: [Commit message convention](#commit-message-convention))
- branch-name: a short description of your branch

For example:

john-doe/feature/add-logs-middleware

### Linting

We use some tools to keep our code linted:

- EditorConfig
- ESLint
- Prettier

Make sure to lint your code before committing your changes.

Some tips:

- If you're using VSCode you can install [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). This extension will automatically lint your code, so you don't have to always run ``yarn lint`` to this ending.

  > After installing this extension, add the following setting to your ``settings.json``.
  ```json
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
  ```

- In VSCode don't use the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension as it can cause some conflicts with ESLint.
- Install [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) in your VSCode to make sure some of your user/workspace settings is overridden to the repository defaults.
