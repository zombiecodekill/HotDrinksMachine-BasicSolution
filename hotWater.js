"use strict";

let hotWaterIsInCup = function(isPoured) {
    if (isPoured) {
        setStatusMessage('Hot water is served');
        return true;
    }
    return false;
}
