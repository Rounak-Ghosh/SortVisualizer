let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let algo = document.getElementById("algo");
let bars_container = document.getElementById("bars_container");
let minRange = 1;
let maxRange = 30;
let numOfBars = 15;
let unsorted_array = new Array(numOfBars);

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray() {
    let array = new Array(numOfBars);
    for (let i = 0; i < numOfBars; i++) {
        array[i] = randomNum(minRange, maxRange);
    }
    return array;
}

document.addEventListener("DOMContentLoaded", function() {
    unsorted_array = createRandomArray();
    renderBars(unsorted_array);
});

function renderBars(array){
    for(let i = 0; i < numOfBars; i++){
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * 10 + "px";
        bars_container.appendChild(bar);
    }
}

randomize_array.addEventListener("click", function () {
    unsorted_array = createRandomArray();
    bars_container.innerHTML = "";
    renderBars(unsorted_array);
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/*async function bubbleSorting(array) {
    let bars = document.getElementsByClassName("bar");
    for(let i=0; i < array.length; i++) {
        for(let j=0; j < array.length - i - 1; j++) {
            if(array[j] > array[j+1]) {
                for(let k=0; k < bars.length; k++) {
                    if(k !== j && k !== j+1) {
                        bars[k].style.backgroundColor = "pink";
                    }
                }
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                bars[j].style.height = array[j] * 10 + "px";
                bars[j].style.backgroundColor = "#BFD834";
                //bars[j+1].innerText = array[j];
                bars[j+1].style.height = array[j+1] * 10 + "px";
                bars[j+1].style.backgroundColor = "#BFD834";
                //bars[j+1].style.innerText = array[j+1];
                await sleep(100);
            }
        }
        await sleep(100);
    }
    return array;
}*/

async function bubbleSort(array) {
    let bars = document.getElementsByClassName("bar");
    let size = array.length;
    while(size > 0) {
        for(let i=0; i < size; i++) {
            if(array[i] > array[i+1]) {
                for(let k=0; k < bars.length; k++) {
                    if(k !== i && k !== i+1) {
                        bars[k].style.backgroundColor = "pink";
                    }
                }
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp; 
                bars[i].style.height = array[i] * 10 + "px";
                bars[i].style.backgroundColor = "#BFD834";
                bars[i+1].style.height = array[i+1] * 10 + "px";
                bars[i+1].style.backgroundColor = "#BFD834";
                await sleep(100);
            }
        }
        size--;
        await sleep(100);
    }
    return array;
}

async function selectionSort(array) {
    let bars = document.getElementsByClassName("bar");
    let size = array.length;
   for(let i=0; i<size-1; i++) {
        for(let j=i+1; j<size; j++) {
            if(array[j] < array[i]) {
                for(let k=0; k < bars.length; k++) {
                    if(k !== i && k !== i+1) {
                        bars[k].style.backgroundColor = "pink";
                    }
                }
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
                bars[i].style.height = array[i] * 10 + "px";
                bars[i].style.backgroundColor = "#BFD834";
                await sleep(100);
            }
        }
        bars[i+1].style.height = array[i+1] * 10 + "px";
        bars[i+1].style.backgroundColor = "#BFD834";
    }
    return array;
}

async function insertionSort(array) {
    let bars = document.getElementsByClassName("bar");
    for(let i=1; i<array.length; i++) {
        let current = array[i];
        let j = i-1;
        while(array[j] > current && j >= 0) {
            array[j+1] = array[j];
            bars[j+1].style.height = array[j+1] * 10 + "px";
            bars[j+1].style.backgroundColor = "#BFD834";
            await sleep(100);

            for(let k=0; k < bars.length; k++) {
                if(k != j+1) {
                    bars[k].style.backgroundColor = "pink";
                }
            }        
            j = j-1;
        }
        array[j+1] = current;
        bars[j+1].style.height = array[j+1] * 10 + "px";
        bars[j+1].style.backgroundColor = "#BFD834";
        await sleep(100);
    }
    return array;
}
  

sort_btn.addEventListener("click", function () {
    switch(algo.value) {
        case "bubble" : bubbleSort(unsorted_array); break;
        case "selection" : selectionSort(unsorted_array); break;
        case "insertion" : insertionSort(unsorted_array); break;
        default : bubbleSort(unsorted_array); break;
    }
});