# TypeScript Type Error: Passing Array to String Function

This repository demonstrates a common type error in TypeScript: passing an array to a function that expects a string argument. The example shows how to identify the issue and provide a solution using type checking and function modification.

## Bug Description

A function `greeter` is defined to take a single string argument and return a greeting string. However, when called with an array instead of a string, it throws a type error. 

## Solution

The solution demonstrates two approaches:  

1. **Type checking:** Adding type checks to ensure that the function receives a string as input. 
2. **Function modification:** Modifying the function to accept and process either strings or arrays of strings. 