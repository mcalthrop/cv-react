# cv-react

> Source code for my online CV

## Overview

This codebase contains the source for my online CV: [cv.mattcalthrop.com](http://cv.mattcalthrop.com/).

It uses the following features:

- [React](https://reactjs.org/) for building the UI
- [MUI CSS](https://www.muicss.com/docs/v1/react/introduction) for the design framework
- [Contentful](https://www.contentful.com/) for hosting the content
- [Yarn](https://yarnpkg.com/en/) for dependency management
- [Prettier](https://prettier.io/) for code formatting
- [Husky](https://github.com/typicode/husky) for git commit hooks
- [Heroku](https://www.heroku.com/) for deployment and hosting

You can fork this repo, and run it locally yourself. Following are instructions for setting it up and running it.

## Setup

### Install yarn

Follow the instructions here:

[yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

### Install NodeJS packages

Install the NodeJS packages:

``` sh
$ yarn
```

## Running the app

### During development

``` sh
$ yarn start
```

This will open a web browser at this URL:

[http://localhost:3000/](http://localhost:3000/)

## Tests

### All

To run all tests:

``` sh
$ yarn test
```

### Code formatting

> Check the `.prettierrc` file for the Prettier rules.

The formatting of the JavaScript source code can be checked as follows:

``` sh
$ yarn prettier:check
```

And to auto-correct any errors that can be corrected:

``` sh
$ yarn prettier:fix
```

## License

[MIT](LICENSE)
