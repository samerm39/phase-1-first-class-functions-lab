//test 1
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

//test2
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

//test3
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

selectingDrivers([1](['Antonia', 'Nuru', 'Amari', 'Mo']))

//test4
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

//test 5
function fareDoubler(fare) {
    return fare + fare
}

//test 5 
function fareTripler(fare) {
    return fare + fare + fare
}

//test 6

function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
}

const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];




