# tic-tac-toe

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test tic-tac-toe` to execute the unit tests via [Jest](https://jestjs.io).

## Run the game

Run `nx run tic-tac-toe-node:game` to start the game.

## Running lint

Run `nx lint tic-tac-toe` to execute the lint via [ESLint](https://eslint.org/).

## Tags

#react-app-kata

## About this Kata

This kata is about creating the famous game of tic-tac-toe in node via console prompts.

The Kata will expect you to follow TDD practises when working on the tasks.

The rules of the tic-tac-toe game are the following:

* a game is over when all fields are taken
* a game is over when all fields in a column are taken by a player
* a game is over when all fields in a row are taken by a player
* a game is over when all fields in a diagonal are taken by a player
* a player can take a field if not already taken
* players take turns taking fields until the game is over
* there are two player in the game (X and O)

## Tasks

* Create 3x3 grid for the game *
* Add two players into the game (player 1 as X and player 2 as O)
* Add alternate turns for the players of the game
* Prohibit players from taking the same space on the grid
* Add end of game rules that are stated above

## Before you start

This kata has the expectation that you will incrementally work on the tasks (one step at a time).
You have **1 hours** to work on this kata.

* example grids:
1. 
|X|O|X|
|O|X|O|
|X|O|X|

2. 
X - O
O X O
X O -
