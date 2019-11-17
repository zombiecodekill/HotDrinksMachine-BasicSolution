describe("refill", function() {

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

        store.capacity = {
            tea: 10,
            lemon: 10,
            water: 10,
            chocolate: 10,
            cups: 10,
            milk: 10,
            sugar: 10,
            coffee: 10,
            coffeeWaste: 10
        }

    });

    describe("tea", function(){
        
        it("adds a unit of tea when less than the capacity", function(){
            expect(store.stocks.tea).toBe(3);

            refill.tea();

            expect(store.stocks.tea).toBe(4);
        });

        it("does not refill when at capacity", function(){
            store.stocks.tea = 10;

            refill.tea();

            expect(store.stocks.tea).toBe(10);
        });
    });

    describe("lemon", function(){
        
        it("adds a unit of lemon when less than the capacity", function(){
            expect(store.stocks.lemon).toBe(1);

            refill.lemon();

            expect(store.stocks.lemon).toBe(2);
        });

        it("does not refill when at capacity", function(){
            store.stocks.lemon = 10;

            refill.lemon();

            expect(store.stocks.lemon).toBe(10);
        });
    });

    describe("water", function(){
        
        it("adds a unit of water when less than the capacity", function(){
            expect(store.stocks.water).toBe(4);

            refill.water();

            expect(store.stocks.water).toBe(5);
        });

        it("does not refill when at capacity", function(){
            store.stocks.water = 10;

            refill.water();

            expect(store.stocks.water).toBe(10);
        });
    });

    describe("chocolate", function(){
        
        it("adds a unit of chocolate when less than the capacity", function(){
            expect(store.stocks.chocolate).toBe(4);

            refill.chocolate();

            expect(store.stocks.chocolate).toBe(5);
        });

        it("does not refill when at capacity", function(){
            store.stocks.chocolate = 10;

            refill.chocolate();

            expect(store.stocks.chocolate).toBe(10);
        });
    });
    
    describe("cups", function(){
        
        it("adds a cup when less than the capacity", function(){
            expect(store.stocks.cups).toBe(1);

            refill.cups();

            expect(store.stocks.cups).toBe(2);
        });

        it("does not restock any cups when at capacity", function(){
            store.stocks.cups = 10;

            refill.cups();

            expect(store.stocks.cups).toBe(10);
        });
    });

    describe("coffee", function(){
        
        it("adds a unit of coffee when less than the capacity", function(){
            expect(store.stocks.coffee).toBe(4);

            refill.coffee();

            expect(store.stocks.coffee).toBe(5);
        });

        it("does not refill when at capacity", function(){
            store.stocks.coffee = 10;

            refill.coffee();

            expect(store.stocks.coffee).toBe(10);
        });
    });

    describe("milk", function(){
        
        it("adds a unit of milk when less than the capacity", function(){
            expect(store.stocks.milk).toBe(4);

            refill.milk();

            expect(store.stocks.milk).toBe(5);
        });

        it("does not refill when at capacity", function(){
            store.stocks.milk = 10;

            refill.milk();

            expect(store.stocks.milk).toBe(10);
        });
    });
    
    describe("sugar", function(){
        
        it("adds a unit of sugar when less than the capacity", function(){
            expect(store.stocks.sugar).toBe(5);

            refill.sugar();

            expect(store.stocks.sugar).toBe(6);
        });

        it("does not refill when at capacity", function(){
            store.stocks.sugar = 10;

            refill.sugar();

            expect(store.stocks.sugar).toBe(10);
        });
    });

    describe("setButtonText", function(){

        beforeEach(function(){
                //buttonText is defined in output.js
                expect(buttonText).toBeDefined();
                spyOn(buttonText,'updateCoffeeRefill');
                spyOn(buttonText,'updateCupsRestock');
                spyOn(buttonText,'updateMilkRefill');
                spyOn(buttonText,'updateSugarRestock');
                spyOn(buttonText,'updateWaterRefill');
                spyOn(buttonText,'updateTeaRefill');
                spyOn(buttonText,'updateLemonRefill');
                spyOn(buttonText,'updateChocolateRefill');    
        });

        it("calls updateCoffeeRefill", function(){
            refill.setButtonText();

            expect(buttonText.updateCoffeeRefill).toHaveBeenCalled();
        });
        
        it("calls updateCupsRestock", function(){
            refill.setButtonText();

            expect(buttonText.updateCupsRestock).toHaveBeenCalled();
        });

        it("calls updateMilkRefill", function(){
            refill.setButtonText();

            expect(buttonText.updateMilkRefill).toHaveBeenCalled();
        });

        it("calls updateSugarRestock", function(){
            refill.setButtonText();

            expect(buttonText.updateSugarRestock).toHaveBeenCalled();
        });

        it("calls updateWaterRefill", function(){
            refill.setButtonText();

            expect(buttonText.updateWaterRefill).toHaveBeenCalled();
        });

        it("calls updateTeaRefill", function(){
            refill.setButtonText();

            expect(buttonText.updateTeaRefill).toHaveBeenCalled();
        });
        
        it("calls updateLemonRefill", function(){
            refill.setButtonText();

            expect(buttonText.updateLemonRefill).toHaveBeenCalled();
        });
        
        it("calls updateChocolateRefill", function(){
            refill.setButtonText();

            expect(buttonText.updateChocolateRefill).toHaveBeenCalled();
        });
    });

});
