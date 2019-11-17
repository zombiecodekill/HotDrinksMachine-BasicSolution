describe("hotWaterIsInCup", function() {

    it("returns false when not poured into cup", function() {
    
        let result = hotWaterIsInCup(false);

        expect(result).toBe(false);
    });

    it("returns false when isPoured is undefined", function() {
    
        let result = hotWaterIsInCup(undefined);

        expect(result).toBe(false);
    });

    it("returns false when isPoured is null", function() {
    
        let result = hotWaterIsInCup(null);

        expect(result).toBe(false);
    });


    it("returns true when water is poured into cup", function() {

        let result = hotWaterIsInCup(true);

        expect(result).toBe(true);
    });

    xit("outputs Hot Water is served when water is poured into cup", function() {

        spyOn(window,'setStatusMessage');

        hotWaterIsInCup(true);

        expect(window.setStatusMessage).toHaveBeenCalledWith('Hot water is served');
    });

});