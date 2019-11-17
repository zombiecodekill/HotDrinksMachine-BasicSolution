describe("lemonTea", function() {

    describe("haveAllIngredients", function(){

        beforeEach(function() {

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
        });
        
        it("returns true when has all ingredients", function(){
            let result = lemonTea.haveAllIngredients();

            expect(result).toBe(true);
        });
       
        it("returns false when no water", function(){
            store.stocks.water = 0;
            
            let result = lemonTea.haveAllIngredients();

            expect(result).toBe(false);
        });

        it("returns false when no tea", function(){
            store.stocks.tea = 0;
            
            let result = lemonTea.haveAllIngredients();

            expect(result).toBe(false);
        });

        it("returns false when no cups", function(){
            store.stocks.cups = 0;
            
            let result = lemonTea.haveAllIngredients();

            expect(result).toBe(false);
        });

        it("returns false when no lemon", function(){
            store.stocks.lemon = 0;
            
            let result = lemonTea.haveAllIngredients();

            expect(result).toBe(false);
        });
    })

    describe("make", function() {

        beforeEach(function() {

            //set the timings to zero so the promises return quickly
            timings = {
                boilWater: 0,
                steepWater: 0,
                brewCoffee: 0,
                addPowder: 0,
                addSugar: 0,
                addLemon: 0,
                addMilk: 0,
                pourIntoCup: 0,
            };
        });

        xit("calls to see if we have all the ingredients", function(){

            spyOn(lemonTea, 'haveAllIngredients').and.callThrough();
            
            let result = lemonTea.make();

            expect(lemonTea.haveAllIngredients).toHaveBeenCalled();
        });


        it("setStatusMessage with lemon tea selection", function(){

            setStatusMessage = jasmine.createSpy('setStatusMessage spy');

            lemonTea.make();

            expect(setStatusMessage).toHaveBeenCalledWith("Lemon Tea selected");
        });

        it("returns a promise to make tea if we can boil the water", function() {
            store.stocks.water = 2;
    
            let result = lemonTea.make();

            expect(result.toString()).toBe("[object Promise]");    
        });

        it("returns false if there's no water left", function() {
            store.stocks.water = 0;

            let result = lemonTea.make();

            expect(result).toBe(false);
        });

        xit("calls the timer promise if we can boil the water", function(){
            store.stocks.water = 2;
            //return the equivalent function
            spyOn(window, 'timerPromise').and.returnValue(function(milliseconds) {
                return new Promise(function(resolve) {
                    setTimeout(function() {	resolve(true);}, milliseconds);
                });
            });
            
            let result = lemonTea.make();

            expect(result).toBe(timerPromise);
            expect(timerPromise).toHaveBeenCalledWith(timings.boilWater);
        });
    });
});