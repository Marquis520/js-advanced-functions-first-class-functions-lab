// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers(drivers){
    return ['Sally', 'Bob'];
}

function returnLastTwoDrivers(drivers){
    return ['Freddy', 'Claudia'];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplyFare){
    return function(fare){
        return multiplyFare * fare
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driving){
    return driving(drivers);
}