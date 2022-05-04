const dogKey = "dogAffection";
const elephantKey = "elephantAffection";
const turtleKey = "turtleAffection";
const favouriteKey = "favouriteAnimal";

function clearData() {
    window.localStorage.clear();
}

function writeData(sliderId, storageKey) {
    let animalAffection = document.getElementById(sliderId).value;
    window.localStorage.setItem(storageKey, animalAffection);
}

// function readData() {
//     let dogValue = window.localStorage.getItem(dogKey);
//     let elephantValue = window.localStorage.getItem(elephantKey);
//     let turtleValue = window.localStorage.getItem(turtleKey);

//     if (dogValue != null && elephantValue != null && turtleValue != null){
//         document.getElementById("history").display = true;
//         console.log("true");
//     } else {
//         document.getElementById("history").display = false;
//         console.log("false");
//     }
//     // return valueArray;
// }

/**
 * Analyze the stored affection data and return name of most liked animal.
 * 
 * @returns {string} name of most liked animal
 */
function analyze() {
    let affectionData = loadAffectionData();

    //convert JS object into an array
    let sortable = [];
    for (var key in affectionData) {
        sortable.push([key, affectionData[key]]);
    }
    //then sort the values from high to low
    sortable.sort((a, b) => a[1] - b[1]);

    return sortable[sortable.length-1][0];
}

function loadAffectionData() {
    return {
        dog: window.localStorage.getItem(dogKey),
        elephant: window.localStorage.getItem(elephantKey),
        turtle: window.localStorage.getItem(turtleKey),
        favourite: window.localStorage.getItem(favouriteKey)
    };
}

