# IMAGINATOR

## The random colour image generator

### Overview

This web application aims to be a solution to the challenge of producing an image that contains only 32,768 non-repeating discrete colours. It is written with React Typescript and follows the Test Driven Development (TDD) paradigm and Clean Architecture principles.

### Test Driven Development

Test Driven Development, or TDD, is a development process where each functions within the larger program is tested as they are developed. Here, I use Jest as my testing framework and all known test cases are written for each function. They are located in two files:

1. utility.test.ts
2. imageGenerator.test.ts

### Clean Architecture Principles

The Clean Architecture Principles, popularised by Robert C. Martin, cordially known as Uncle Bob, promote the practice of separation of concerns and high level of abstraction between the business rules and technical implementations.

Putting in the perspective of this project, the business rule is to create an image that contains exactly 32,768 non-repeating discrete colours, of which each RGB channels increase by step of 8. The logic to this is encapsulated within the ImageGenerator class. Further abstractions are made with number generators are kept separate inside the `utility.ts` file as this is not specific to this task and can be used for other projects.

Meanwhile the technical implementation in this case is the use of React Typescript to build the user interface (UI). In fact, this is only the skin and the UI library just implements the logic of ImageGenerator. This allows for other UI frameworks/libraries to utilise the same logic if decisions are made to switch to another, e.g., Angular, Vue, or even just plain old HTML & Javascript.

### How to run

1. First install NodeJs for your operating system. You can follow this link to do so: https://nodejs.org/en/download/
2. Run `npm install` at root directory to reinstall all dependencies. This project uses no other dependencies beside those needed to run React Typescript and Jest.
3. Run `npm start` to start the application.

### How to use

The application has two selects and 1 slider.

1. The first select controls the dimensions of the canvas. This select shows some but not all the available dimensions, factor pairs of 32,768. The reason it does not include all possible factor pairs, is that the HTML canvas has a limited render area. Any dimensions that have a width or height less than 8px that is zoomed in, will create a rendering error.
2. The second select controls the style presets. This is named according to my artistic instuitions, if I possess any. The rearrangement of the pixels are done via various sorting method of the colour channel values.
3. The slider is used to zoom in. The value is given to the canvas as dimension (width and height) or each "pixel".
