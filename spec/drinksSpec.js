

describe("Drink Maker", function() {
	
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

      /*
  it("cannot make lemon tea without water", function() {

		stocks.water = 0;
		
		let promise = makeDrink('tea');
		console.log(promise);
		let result = promise.resolve(waterIsBoiled);
    
		expect(result).toBe(false);
  });

  it("cannot make lemon tea without tea", function() {

		stocks.tea = 0;
		
		var result = makeDrink('tea');
		
		expect(result).toBe(false);
  });

  it("cannot make lemon tea without lemon", function() {

		stocks.lemon = 0;
		
		var result = makeDrink('tea');
		
		expect(result).toBe(false);
  });
*/

	it("returns false by default", function() {
		let result = makeDrink();
		
		expect(result).toBe(false);
	});
	
  });
  
  