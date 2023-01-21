# opening-times

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test opening-times` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint opening-times` to execute the lint via [ESLint](https://eslint.org/).

## Tags

#incremental-kata

## About this Kata

> **_This is loosely based on the [Opening Hours](https://github.com/christian-fei/opening-hours-kata) kata_**

Amy and Valerie, the shop owners, need you to develop a simple program that satisfies the following requirements:

- The opening days and hours of the shop need to be configurable, and can be scattered in the week (e.g. Mon, Wed, Fri from 08:00 to 16:00)
- Amy needs to display the date of the next opening on a billboard outside of the shop
- Amy also wants to display on the website of the shop whether it is opened or closed at the moment

Write a small module that follows this contract, so that Valerie can easily integrate it:

```
OpeningHours.isOpenOn(date)
OpeningHours.nextOpeningDate(date)
```

This Kata should be performed using Test Driven Development (TDD).

## Tasks

Using these times provided:
```
Opening Times: Monday - Friday
Opening hours: 09:00 - 17:00

Do not open on Bank Holidays
```

* Output of `isOpenOn` function is true when the shop is open of that day
* Output of `nextOpeningDate` details the day and time of when the shop is open
* Cater for shop opening times when the function `isOpenOn` is called (after 5pm should show next day)
* Cater for shop opening times when the function `nextOpeningDate` is called (after 5pm should show next day and times)
* Cater for bank holidays in the logic

### Bonus Tasks

Amy and Valerie want to update the opening times

```
Opening Times Weekdays: Monday - Friday
Opening hours: 09:00 - 17:00

Opening Times Weekdays: Saturday
Opening hours: 10:00 - 16:00

Amy's Birthday is the 8th January - shop closed
```

* Cater for Saturday opening times
* Output of `isOpenOn` when false should return either:
  * "Closed due to Bank Holiday" - If it is a Bank Holiday
  * "Temporarily Closed" - If the shop is closed due to Amy's Birthday

## Before you start

This kata has the expectation that you will incrementally work on the tasks (one step at a time).
You have **1 hour** to work on this kata.
