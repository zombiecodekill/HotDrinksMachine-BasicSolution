# HotDrinksMachine-BasicSolution
Work in progress solution for the HotDrinksMachine-Kata

For details on the Kata see https://github.com/zombiecodekill/HotDrinksMachine-Kata

I have kept it to just the three drinks Lemon Tea, Coffee and Hot Chocolate for now but added buttons to refill stocks, and checkboxes for allowing or disallowing different incomplete drinks.  

Not yet using a UI framework yet mainly because there isn't much of a UI and not much DOM manipulation in the application.
Open the index.html file to run and experiment with the drinks buttons and the refill buttons. This application can be run offline.

If you prefer the full history of messages, in output.js rewire setStatusMessage to call appendStatusMessage. 
You can also adjust the timings by editing the timings.js file.

There is a suite of Jasmine specs that can be run using the SpecRunner.html file. 
To run the specs the latest version of Jasmine and put the jasmine directory inside the HotDrinksMachine directory.

The beginnings of a modern Webpack and ESLint implementation are found at https://github.com/zombiecodekill/HotDrinksMachine-SPA
