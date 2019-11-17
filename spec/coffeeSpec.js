describe("coffee", function() {

    beforeEach(function() {

        //set the timings to zero so the promises return quickly
        timings = {
         boilWater: 0,
         steepWater: 0,
         brewCoffee: 0,
         addPowder: 0,
         addSugar: 1000,
         addLemon: 0,
         addMilk: 0,
         pourIntoCup: 0,
        };
    
    });

    describe("haveAllIngredients", function(){

        beforeEach(function(){
            store.stocks = {
                tea: 3,
                lemon: 1,
                water: 4,
                chocolate: 4,
                cups: 1,
                milk: 4,
                sugar: 5,
                coffee: 4,
                coffeeWaste: 0
            };
        })
        
        it("returns true when has all ingredients", function(){
            let result = coffee.haveAllIngredients();

            expect(result).toBe(true);
        });
       
        it("returns false when no water", function(){
            store.stocks.water = 0;
            
            let result = coffee.haveAllIngredients();

            expect(result).toBe(false);
        });

        it("returns false when no coffee", function(){
            store.stocks.coffee = 0;
            
            let result = coffee.haveAllIngredients();

            expect(result).toBe(false);
        });

        it("returns false when no cups", function(){
            store.stocks.cups = 0;
            
            let result = coffee.haveAllIngredients();

            expect(result).toBe(false);
        });

        it("returns false when no sugar", function(){
            store.stocks.sugar = 0;
            
            let result = coffee.haveAllIngredients();

            expect(result).toBe(false);
        });

        it("returns false when no milk", function(){
            store.stocks.milk = 0;
            
            let result = coffee.haveAllIngredients();

            expect(result).toBe(false);
        });
    })

    describe("make", function() {

        beforeEach(function() {
        });

        xit("setStatusMessage with coffee selection", function(){
            spyOn(window,'setStatusMessage');

            coffee.make();

            expect(window.setStatusMessage).toHaveBeenCalledWith("Coffee selected");
        });

        xit("returns a promise to make coffee if we can boil the water", function() {
            store.stocks.water = 2;
    
            let result = coffee.make();

            expect(result.toString()).toBe("[object Promise]");    
        });

        it("returns false if there's no water left", function() {
            store.stocks.water = 0;

            let result = coffee.make();

            expect(result).toBe(false);
        });


        xit("calls to see if we have all the ingredients", function(){

            spyOn(coffee, 'haveAllIngredients').and.callThrough();
            
            let result = coffee.make();

            expect(coffee.haveAllIngredients).toHaveBeenCalled();
        });


        xit("calls the timer promise if we can boil the water", function(){
            store.stocks.water = 2;

            spyOn(window, 'timerPromise').and.returnValue(function(milliseconds) {
                return new Promise(function(resolve) {
                    setTimeout(function() {	resolve(true);}, milliseconds);
                });
            });
            
            let result = coffee.make();

            expect(result).toBe(timerPromise);
            expect(timerPromise).toHaveBeenCalledWith(timings.boilWater);
        });
    });
});