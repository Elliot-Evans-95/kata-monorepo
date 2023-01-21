# minefield

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test minefield` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint minefield` to execute the lint via [ESLint](https://eslint.org/).

## Tags

#react-app-kata

## About this Kata

> **_This is based on the [Minesweeper](https://codingdojo.org/kata/Minesweeper/) kata_**

The Minesweeper game has goal to find all the mines within a field. To help you, the game shows a number in a square which tells you how many mines there are adjacent to that square. 
For example, take the following 4x4 field with 2 mines (which are represented by an * character):

```
  *...
  ....
  .*..
  ....
```

The same field including the hint numbers described above would look like this:

```
  *100
  2210
  1*10
  1110
```

## Tasks

Write a program that takes input as follows:
* Create a 4x4 field via a field input
* Create a 4x4 field output per sweep
* Translate safe squares via the “.” character and a mine square via the “*” character
* End the game if the mine square has been clicked
* Show scores on a field after every square sweep calculate the score for how close the click is to the mine

## Before you start

This kata has the expectation that you will incrementally work on the tasks (one step at a time).
You have **2 hours** to work on this kata.

TODO: figure out if its better as a console app or a react app
