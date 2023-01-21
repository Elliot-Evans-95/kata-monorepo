# mars-rover

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test mars-rover` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint mars-rover` to execute the lint via [ESLint](https://eslint.org/).

## Tags

#Incremental-Kata

## About this Kata

> **_This is based on the [Mars Rover](https://kata-log.rocks/mars-rover-kata) kata_**

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. 
Develop an API that translates the commands sent from earth to instructions that are understood by the rover.
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
The rover receives a character array of commands.

## Tasks

* Implement commands that move the rover forward/backward (f,b).
* Implement commands that turn the rover left/right (l,r).
* Implement wrapping at edges. But be careful, planets are spheres.
* Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.

## Before you start

This kata has the expectation that you will incrementally work on the tasks (one step at a time).
You have **1 hour** to work on this kata. 
If you unsure how to start I would recommend drawing a 4x4 grid and mapping out the co-ordinates to the Mars Rover
