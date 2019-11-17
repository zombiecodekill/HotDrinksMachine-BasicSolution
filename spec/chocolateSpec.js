describe("chocolate", function() {

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

    describe("haveAllIngredients", function(){

        it("returns true when has all ingredients", function(){
            let result = chocolate.haveAllIngredients();

            expect(result).toBe(true);
        });
       
        it("returns false when no water", function(){
            store.stocks.water = 0;
            
            let result = chocolate.haveAllIngredients();

            expect(result).toBe(false);
        });

        it("returns false when no chocolate", function(){
            store.stocks.chocolate = 0;
            
            let result = chocolate.haveAllIngredients();

            expect(result).toBe(false);
        });

        it("returns false when no cups", function(){
            store.stocks.cups = 0;
            
            let result = chocolate.haveAllIngredients();

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
             addSugar: 1000,
             addLemon: 0,
             addMilk: 0,
             pourIntoCup: 0,
            };

            setStatusMessage = jasmine.createSpy('setStatusMessage spy');
        });

        xit("calls to see if we have all the ingredients", function(){

            spyOn(chocolate, 'haveAllIngredients').and.callThrough();
            
            let result = chocolate.make();

            expect(chocolate.haveAllIngredients).toHaveBeenCalled();
        });

        it("asks for confirmation if we don't have all the ingredients", function(){
            store.stocks.chocolate = 0;

            spyOn(window, 'confirm').and.returnValue(false);

            let result = chocolate.make();

            expect(window.confirm).toHaveBeenCalledWith('One or more items are out of stock. Do you wish to proceed anyway?');
        });

        it("setStatusMessage with chocolate selection", function(){

            let result = chocolate.make();

            expect(setStatusMessage).toHaveBeenCalledWith("Hot Chocolate selected");
        });

        it("set Hot chocolate canceled message if user cancels", function(){

            store.stocks.chocolate = 0;

            spyOn(chocolate, 'haveAllIngredients').and.callThrough();
            spyOn(window, 'confirm').and.returnValue(false);

            let result = chocolate.make();

            expect(setStatusMessage).toHaveBeenCalledWith("Hot chocolate canceled");

        });

        it("Checks whether we can boil the water", function() {
            store.stocks.water = 2;
            spyOn(window, 'canBoilWater').and.callThrough();

            let result = chocolate.make();

            expect(window.canBoilWater).toHaveBeenCalled();    
        });


        it("returns a promise to make coffee if we can boil the water", function() {
            store.stocks.water = 2;
    
            let result = chocolate.make();

            expect(result.toString()).toBe("[object Promise]");    
        });

        it("returns false if there's no water left", function() {
            store.stocks.water = 0;

            let result = chocolate.make();

            expect(result).toBe(false);
        });

        xit("calls the timer promise if we can boil the water", function(){
            store.stocks.water = 2;
            timerPromise = jasmine.createSpy('timerPromise spy').and;

            let result = chocolate.make();

            expect(result).toBe(timerPromise);
            expect(timerPromise).toHaveBeenCalledWith(timings.boilWater);
        });
    });
});