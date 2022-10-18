# Gilded Rose Kata Refactor

My solution to the [Refactoring kata challenge](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/GildedRoseRequirements.txt) while adding a CLI for handling extra workloads before running updates

### Requirements

- Node.JS and NPM (application was built using node V16)
- Git (recommended but not mandatory)

### How to setup and run locally

```sh
# clone repository
$ git clone git@github.com:Emmanuerl/refactoring-kata.git

# cd into path
$ cd refactoring-kata

# install dependencies
$ npm install
#
# Create two terminal windows with both windows in the root directory of the applciation
# terminal 1                        |  terminal 2
#                                   |
# run build in watch mode           |  start application in watch mode
$ npm run build:watch               |  $ npm run start:dev -- I J # where I and J are the number of update and HTTP calls respectively
#                                   |
#                                   |
#                                   |
# run build                         |  start application
$ npm run build                     |  $ npm start -- I J # where I and J are the number of update and HTTP calls respectively
```

### How to setup and run locally

This application uses Jest framework for unit and integration testing

```sh
# to run tests
$ npm test
```

### Contributors

- [Chukwuemeka Chukwurah](https://github.com/emmanuerl)
