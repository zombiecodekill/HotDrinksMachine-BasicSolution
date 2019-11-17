describe("store", function() {

    
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

    describe("use", function() {

        describe("lemon", function(){
            it("uses a unit of lemon", function() {
                store.stocks.lemon = 1;

                store.use.lemon();
            
                expect(store.stocks.lemon).toBe(0);
            });

            it("does not check that lemons are in stock", function() {
                store.stocks.lemon = 0;

                store.use.lemon();
            
                expect(store.stocks.lemon).toBe(-1);
            });
        });

        describe("milk", function(){
            it("uses a unit of milk", function() {
                store.stocks.milk = 1;

                store.use.milk();
            
                expect(store.stocks.milk).toBe(0);
            });
        });

        describe("sugar", function(){
            it("uses a unit of sugar", function() {
                store.stocks.sugar = 1;

                store.use.sugar();
            
                expect(store.stocks.sugar).toBe(0);
            });
        });

        describe("chocolate", function(){
            it("uses a unit of chocolate", function() {
                store.stocks.chocolate = 1;

                store.use.chocolate();
            
                expect(store.stocks.chocolate).toBe(0);
            });
        });

        describe("tea", function(){
            it("uses a unit of tea", function() {
                store.stocks.tea = 1;

                store.use.tea();
            
                expect(store.stocks.tea).toBe(0);
            
            });
        });

        describe("coffee", function(){
            it("uses a unit of coffee", function() {
                store.stocks.coffee = 1;

                store.use.coffee();
            
                expect(store.stocks.coffee).toBe(0);
            });

            it("adds a unit of coffee waste", function() {
                store.stocks.coffeeWaste = 0;

                store.use.coffee();
            
                expect(store.stocks.coffeeWaste).toBe(1);
            });
        });

        describe("water", function(){
            it("uses a unit of water", function() {
                store.stocks.water = 1;

                store.use.water();
            
                expect(store.stocks.water).toBe(0);
            });
        });
    })

    describe("inStock", function() {

        describe("lemon", function() {
            it("returns true when lemon is in stock", function() {

                store.stocks.lemon = 1;

                let result = store.inStock.lemon();
            
                expect(result).toBe(true);
            });        
        
            it("returns false when lemon is out of stock", function() {

                store.stocks.lemon = 0;

                let result = store.inStock.lemon();
            
                expect(result).toBe(false);
                });        
        });

        describe("milk", function() {
            it("returns true when milk is in stock", function() {

                store.stocks.milk = 1;

                let result = store.inStock.milk();
            
                expect(result).toBe(true);
            });
            
            it("returns false when milk is out of stock", function() {

                store.stocks.milk = 0;

                let result = store.inStock.milk();
            
                expect(result).toBe(false);
            });
        });

        describe("tea", function() {
            it("returns true when tea is in stock", function() {

                store.stocks.tea = 1;

                let result = store.inStock.tea();
            
                expect(result).toBe(true);
            });
            
            it("returns false when tea is out of stock", function() {

                store.stocks.tea = 0;

                let result = store.inStock.tea();
            
                expect(result).toBe(false);
            });
        });

        describe("water", function() {
            it("returns true when water is in stock", function() {

                store.stocks.water = 1;

                let result = store.inStock.water();
            
                expect(result).toBe(true);
            });
            
            it("returns false when water is out of stock", function() {

                store.stocks.water = 0;

                let result = store.inStock.water();
            
                expect(result).toBe(false);
            });
        });

        describe("chocolate", function() {
            it("returns true when chocolate is in stock", function() {

                store.stocks.chocolate = 1;

                let result = store.inStock.chocolate();
            
                expect(result).toBe(true);
            });
            
            it("returns false when chocolate is out of stock", function() {

                store.stocks.chocolate = 0;

                let result = store.inStock.chocolate();
            
                expect(result).toBe(false);
            });
        });

        describe("coffee", function() {
            it("returns true when coffee is in stock", function() {

                store.stocks.coffee = 1;

                let result = store.inStock.coffee();
            
                expect(result).toBe(true);
            });
            
            it("returns false when coffee is out of stock", function() {

                store.stocks.coffee = 0;

                let result = store.inStock.coffee();
            
                expect(result).toBe(false);
            });
        });
        
        describe("cups", function() {
            it("returns true when cup is in stock", function() {

                store.stocks.cups = 1;

                let result = store.inStock.cup();
            
                expect(result).toBe(true);
            });
            
            it("returns false when cups are out of stock", function() {

                store.stocks.cups = 0;

                let result = store.inStock.cup();
            
                expect(result).toBe(false);
            });
        });

        
        describe("sugar", function() {
            it("returns true when sugar is in stock", function() {

                store.stocks.sugar = 1;

                let result = store.inStock.sugar();
            
                expect(result).toBe(true);
            });
            
            it("returns false when sugar is out of stock", function() {

                store.stocks.sugar = 0;

                let result = store.inStock.sugar();
            
                expect(result).toBe(false);
            });
        });
        
    });
});