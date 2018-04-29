# Data Stewardship Wizard - Web

A web presentation for the Data Stewardship Wizard.

## Development

The project is using [Pug](https://github.com/pugjs/pug) for HTML templates and [Sass](https://github.com/sass/node-sass) as a CSS preprocessor. Everything is configured to be built by webpack.

Before you can start working on the project, you need to install dependencies using npm.

```
$ npm install
```

The project is tested to be working with node `8.0.0`.

Webpack dev server for local development is also configured. To start the dev server simply run:

```
$ npm start
```

It will open the browser with the project with hot reload. You can then change the source code and it will be automatically reoloaded in the browser.

If you want to build the project run the following command:

```
$ npm run build
```

It will create a dist folder with generated HTML and CSS files.
