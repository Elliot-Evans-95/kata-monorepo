# Tennis

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test tennis` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint tennis` to execute the lint via [ESLint](https://eslint.org/).

## Tags

#Incremental-Kata

## About this Kata

> **_This is based on the [codingdojo](https://codingdojo.org/kata/Tennis/) tennis kata_**

Implementing a simplified version of the tennis sport.
This version of tennis is similar to how WiiSports implements the game.

## Rules

- There are two sides either 1v1 or 2v2
- The match is made up of 3 games with no tie breaks
- Each side can have either of these points in a game; “love”, “15”, “30” and “40”
- One side wins the game by:
  - at least four points in total and having at least two points more than the other side
- If both sides have 40 point the score is “deuce”.
- When the game is “deuce”:
  - If the game is in deuce, the winner of a point will have advantage 
  - If the player with advantage wins the ball he wins the game 
  - If the player without advantage wins they are back at deuce. 
- If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.

## Before you start

The idea here is to think of the best approach to this kata but the solution.
You have **1 hour** to work on this kata. If you unsure how to break down the task here are some pointers:
1. Able to start the tennis match with two players
2. Able to finish a game
3. Able to finish a match with a best of 3 games
4. Able to finish a game when there has been an advantage
5. Able to start the tennis match with four players
