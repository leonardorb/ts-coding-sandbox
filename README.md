# TS Coding Sandbox

Start here. Code away!

## Overview

This project gives you a quick start on coding and testing with the latest and greatest from TypeScript. It's a sandbox to play, test and be creative with your projects. Don't worry about setting up things. Focus on coding. For beginners and experienced developers. If you're looking for working on a lot of mini dev projects, this repo is ideal for you.

## Technologies Used

- [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
- [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

## Folders & Files Structure

Really simple. You have the `root` of the project and you have `src`.

```
src/
  ...projects
.eslintrc.js
.gitignore
.prettier
jest.config.js
nodemon.json
package-lock.json
package.json
README.md
tsconfig.json
```

## How To Use

Even simpler. To run a project, just do:

```
$ npm run dev <project-path>

// Example:
$ npm run dev src/simple-math
```

This will run your project and refresh it every time that you save:
![](https://leo.d.pr/UqTYPS+)

To run tests for a particular project, do:

```
$ npm run test <project-path>

// Example
$ npm run test src/simple-math
```

This will give you a scoped view of the test suite for the particular project. Like this:

![](https://leo.d.pr/mOB8q7+)

## Creating a Project

You can definitely get creative in your project structure, but to start we recommend only 3 files. A project file, a test file for your project and an `index` file. After you're comfortable with the structure, go crazy!

```
src/
  simple-math/
    index.ts
    simpleMath.ts
    simpleMath.test.ts
```

In this example we have:

- `simpleMath.ts`: your project file, where you're exporting the needed pieces for your project to run and be tested
- `simpleMath.test.ts`: your test file, this file will host your specs
- `index.ts`: your "command" file, where you'll interact with your project

So, let's assume that you want to create a Tic Tac Toe project. Start by creating a `tic-tac-toe` folder under `src` with 3 files:

```
src/
  tic-tac-toe/
    index.ts
    ticTacToe.ts
    ticTacToe.test.ts
```

Have fun!

## License

This project is an open-sourced software licensed under the [MIT license](https://github.com/busayo/meanmap/blob/master/LICENSE).
