# sweet-shop

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `npx nx test sweet-shop` to execute the unit tests via [Jest](https://jestjs.io).
Additionally, use `npx nx test sweet-shop --watch` to watch tests.

## Tags

#Incremental-Kata

## About this Kata

The sweet shop is called `Chloe's cookies`.
You can imagine a sweet shop offering all kinds of savoury goodness: cakes, cookies and the list goes on. 
You are currently the owner of the restaurant and have to take the orders of customers and product that product fresh for them!

In order to do this you need to know what goes into every item and how much you should charge the customer.

Here is a list:

| Item             | Ingredients                                                                        | Price |
|------------------|------------------------------------------------------------------------------------|-------|
| Sponge Cake (🍰) | butter (🧈), flour (🌾), flour (🌾), sugar (🍬), sugar (🍬), eggs (🥚), eggs (🥚)  | £1.55 |
| Cupcake (🧁)     | butter (🧈), flour (🌾), sugar (🍬), eggs (🥚), milk (🥛)                          | £1.20 |
| ice cream (🍨)   | cream (⚠️), sugar (🍬), eggs (🥚), milk (🥛)                                       | £0.85 |
| cookie (🍪)      | butter (🧈), flour (🌾), eggs (🥚)                                                 | £0.75 |
| doughnut (🍩)    | butter (🧈), flour (🌾), sugar (🍬)                                                | £0.55 |
| chocolate (🍫)   | butter (🧈), cocoa bean (🫘), sugar (🍬)                                           | £0.45 |
| strawberry (🍓)  | -                                                                                  | £0.25 |

> **_ Based on the [Cupcake](https://codingdojo.org/kata/cupcake/) kata_**

This kata is about incremental additional logic to core functionality either via functions or classes.
Its heavily leaning towards a class based solution with use of decorator and composite pattern.

## Tasks

* Enable a customer to buy one item from the list, it should produce the item via emoji and the price in pounds
* Enable a customer to buy all but the side items (chocolate and strawberry) from the list
* Enable a customer to buy any item from the list
* Customers are hungry! Enable them to buy more than one item from the list
* Some Customers are peckish! Enable them to buy a small sized version of each product at a reduced cost except strawberries
* Some customers are buying food for work, if they buy more than 5 they get a 10% discount

## Bonus

* Not many people are buying ice cream, if ice cream is part of a 5 item order then it is a 15% discount!
* Thanks to a new batch of chocolate and strawberries you can add these items on-top of other items creating chocolate and strawberry variants (no new items) with the variant item's cost.

## Before you start

This kata has the expectation that you will incrementally work on the tasks (one step at a time).
You have **1 hour** to work on this kata.

## Tips

* There should be tests for correct item and price output
* There should be tests for correct price on 1 or many items
* There should be tests for combing items (when possible)

| ? | ?  |
|---|----|
| b | 20 |
| f | 20 |
| s | 15 |
| e | 30 |
| m | 30 |
| c | 10 |
