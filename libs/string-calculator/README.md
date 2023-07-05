# string-calculator

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `npx nx test string-calcunpxor --watch` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint string-calculator` to execute the lint via [ESLint](https://eslint.org/).

## Tags

#Incremental-Kata

## About this Kata

> **_This is based on the [String Calculator](https://codingdojo.org/kata/StringCalculator/) kata_**

This kata is about incremental adding logic to one function.

## Tasks

* Write a program that takes a string input and outputs a string
* Add to the method, so it can take 0, 1 or 2 numbers separated by comma, and return their sum
* Allow the `add` method to handle an unknown number of arguments.
* Allow the `add` method to handle newlines as separators so "1\n2,3" should return "6".
* Don’t allow the input to end in a separator so "1,3," is invalid and should return an error message.
* Calling `add` with negative numbers will return the message "Negative not allowed : " listing all negative numbers that were in the list of numbers.
* Calling `add` with multiple errors will return all error messages separated by newlines.

## Before you start

This kata has the expectation that you will incrementally work on the tasks (one step at a time).
You have **45 minutes** to work on this kata.
