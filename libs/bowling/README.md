# bowling

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test bowling` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint bowling` to execute the lint via [ESLint](https://eslint.org/).

## Tags

#Incremental-Kata

## About this Kata

> **_This is based on the [Bowling](https://codingdojo.org/kata/Bowling/) kata_**

Create a Ten-Pin Bowling game that produces the total score for the game.
Here are the details of the bowling game:
* Each game, or “line” of bowling, includes 10 turns, or “frames” for the bowler.
* In each frame, the bowler gets up to two tries to knock down all the pins.
* If in two tries the bowler fails to knock them all down, the score for that frame is the total number of pins knocked down in the two tries.
* If in two tries the bowler knocks them all down, this is called a “spare” and the bowler's score for the frame is ten plus the number of pins knocked down on the next throw (next frame).
* If on the first try in the frame the bowler knocks down all the pins, this is called a “strike”. The bowler's turn is over, and the score for the frame is ten plus the simple total of the pins knocked down in the next two rolls.
* If the bowler gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively. These bonus throws are taken as part of the same turn. If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.
* The game score is the total of all frame scores.

The game does not need to:
* provide scores during frames

## Tasks

* Create a bowling game with one frame
* Able to sum points from all frames
* Create a bowling game with 10 frames
* Enable bowlers to score a 'spare'
* Enable bowlers to score a 'strike'
* Enable the last frame to have three goes if a spare or strike is performed

## Before you start

This kata has the expectation that you will incrementally work on the tasks (one step at a time).
You have **1 hour** to work on this kata.
If you unsure how to start I would recommend ignoring spares and strikes so there will always be two goes and for the score to always show
