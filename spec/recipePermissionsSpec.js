describe("updateRecipePermissions", function(){

    it("does not change recipe permissions if DOM elements do not exist", function(){

        expect(recipePermissions.allowTeaWithoutLemon).toBe(true);

        updateRecipePermissions();

        expect(recipePermissions.allowTeaWithoutLemon).toBe(true);
    });

    xit("sets recipe permissions to checkbox values", function(){

        let node = document.createElement('allowCoffeeWithoutMilk');
        node.checked = true;
        document.body.appendChild(node);

        expect(recipePermissions.allowCoffeeWithoutMilk).toBe(false);

        updateRecipePermissions();

        expect(recipePermissions.allowCoffeeWithoutMilk).toBe(true);

        document.body.removeChild(node);
    });

});