/* 
    You can configure your permissions preferences here and the checkboxes will be set this way on startup.
    The user can override your settings using the checkboxes    
*/

var recipePermissions = {
        allowCoffeeWithoutMilk: false,
        allowCoffeeWithoutSugar: false,
        allowTeaWithoutLemon: true,
        allowHotWaterOnly: false
};

function setPermissionsCheckboxes() {

    if (!recipePermissions) {
        setStatusMessage('Recipe Permissions in unset');
    } else {
        document.getElementById("allowCoffeeWithoutMilk").checked = recipePermissions.allowCoffeeWithoutMilk;
        document.getElementById("allowCoffeeWithoutSugar").checked = recipePermissions.allowCoffeeWithoutSugar;
        document.getElementById("allowTeaWithoutLemon").checked = recipePermissions.allowTeaWithoutLemon;
        document.getElementById("allowHotWaterOnly").checked = recipePermissions.allowHotWaterOnly;    
    }
}

function updateRecipePermissions() {

    let allowCoffeeWithoutMilkCheckbox = document.getElementById("allowCoffeeWithoutMilk");
    if (allowCoffeeWithoutMilkCheckbox) {
        recipePermissions.allowCoffeeWithoutMilk = allowCoffeeWithoutMilkCheckbox.checked; 
    }

    let allowCoffeeWithoutSugarCheckbox = document.getElementById("allowCoffeeWithoutSugar");
    if (allowCoffeeWithoutSugarCheckbox) {
        recipePermissions.allowCoffeeWithoutSugar = allowCoffeeWithoutSugarCheckbox.checked;
    }

    let allowTeaWithoutLemonCheckbox = document.getElementById("allowTeaWithoutLemon");
    if (allowTeaWithoutLemonCheckbox) {
        recipePermissions.allowTeaWithoutLemon = document.getElementById("allowTeaWithoutLemon").checked;
    }
    
    let allowHotWaterOnlyCheckbox = document.getElementById("allowHotWaterOnly");
    if (allowHotWaterOnlyCheckbox) {
        recipePermissions.allowHotWaterOnly = document.getElementById("allowHotWaterOnly").checked;
    }
}
