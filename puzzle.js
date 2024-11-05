
function swapboxes1() {
    let v1 = document.getElementById('b1').innerHTML;
    let v2 = document.getElementById('b2').innerHTML;
    let v4 = document.getElementById('b4').innerHTML;
    if (v2 === "") {
        document.getElementById('b2').innerHTML = v1;
        document.getElementById('b1').innerHTML = "";
    } else if (v4 === "") {
        document.getElementById('b4').innerHTML = v1;
        document.getElementById('b1').innerHTML = "";
    }
    checkwin();
}

function swapboxes2() {
    let v2 = document.getElementById('b2').innerHTML;
    let v1 = document.getElementById('b1').innerHTML;
    let v3 = document.getElementById('b3').innerHTML;
    let v5 = document.getElementById('b5').innerHTML;
    if (v1 === "") {
        document.getElementById('b1').innerHTML = v2;
        document.getElementById('b2').innerHTML = "";
    } else if (v3 === "") {
        document.getElementById('b3').innerHTML = v2;
        document.getElementById('b2').innerHTML = "";
    } else if (v5 === "") {
        document.getElementById('b5').innerHTML = v2;
        document.getElementById('b2').innerHTML = "";
    }
    checkwin();
}

function swapboxes3() {
    let v3 = document.getElementById('b3').innerHTML;
    let v2 = document.getElementById('b2').innerHTML;
    let v6 = document.getElementById('b6').innerHTML;
    if (v2 === "") {
        document.getElementById('b2').innerHTML = v3;
        document.getElementById('b3').innerHTML = "";
    } else if (v6 === "") {
        document.getElementById('b6').innerHTML = v3;
        document.getElementById('b3').innerHTML = "";
    }
    checkwin();
}

function swapboxes4() {
    let v4 = document.getElementById('b4').innerHTML;
    let v1 = document.getElementById('b1').innerHTML;
    let v5 = document.getElementById('b5').innerHTML;
    let v7 = document.getElementById('b7').innerHTML;
    if (v1 === "") {
        document.getElementById('b1').innerHTML = v4;
        document.getElementById('b4').innerHTML = "";
    } else if (v5 === "") {
        document.getElementById('b5').innerHTML = v4;
        document.getElementById('b4').innerHTML = "";
    } else if (v7 === "") {
        document.getElementById('b7').innerHTML = v4;
        document.getElementById('b4').innerHTML = "";
    }
    checkwin();
}

function swapboxes5() {
    let v5 = document.getElementById('b5').innerHTML;
    let v2 = document.getElementById('b2').innerHTML;
    let v4 = document.getElementById('b4').innerHTML;
    let v6 = document.getElementById('b6').innerHTML;
    let v8 = document.getElementById('b8').innerHTML;
    if (v2 === "") {
        document.getElementById('b2').innerHTML = v5;
        document.getElementById('b5').innerHTML = "";
    } else if (v4 === "") {
        document.getElementById('b4').innerHTML = v5;
        document.getElementById('b5').innerHTML = "";
    } else if (v6 === "") {
        document.getElementById('b6').innerHTML = v5;
        document.getElementById('b5').innerHTML = "";
    } else if (v8 === "") {
        document.getElementById('b8').innerHTML = v5;
        document.getElementById('b5').innerHTML = "";
    }       
    checkwin();
}

function swapboxes6() {
    let v6 = document.getElementById('b6').innerHTML;
    let v3 = document.getElementById('b3').innerHTML;
    let v5 = document.getElementById('b5').innerHTML;
    let v9 = document.getElementById('b9').innerHTML;
    if (v3 === "") {
        document.getElementById('b3').innerHTML = v6;
        document.getElementById('b6').innerHTML = "";
    } else if (v5 === "") {
        document.getElementById('b5').innerHTML = v6;
        document.getElementById('b6').innerHTML = "";
    } else if (v9 === "") {
        document.getElementById('b9').innerHTML = v6;
        document.getElementById('b6').innerHTML = "";
    }
    checkwin();
}

function swapboxes7() {
    let v7 = document.getElementById('b7').innerHTML;
    let v4 = document.getElementById('b4').innerHTML;
    let v8 = document.getElementById('b8').innerHTML;
    if (v4 === "") {
        document.getElementById('b4').innerHTML = v7;
        document.getElementById('b7').innerHTML = "";
    } else if (v8 === "") {
        document.getElementById('b8').innerHTML = v7;
        document.getElementById('b7').innerHTML = "";
    }
    checkwin();
}

function swapboxes8() {
    let v8 = document.getElementById('b8').innerHTML;
    let v5 = document.getElementById('b5').innerHTML;
    let v7 = document.getElementById('b7').innerHTML;
    let v9 = document.getElementById('b9').innerHTML;
    if (v5 === "") {
        document.getElementById('b5').innerHTML = v8;
        document.getElementById('b8').innerHTML = "";
    } else if (v7 === "") {
        document.getElementById('b7').innerHTML = v8;
        document.getElementById('b8').innerHTML = "";
    } else if (v9 === "") {
        document.getElementById('b9').innerHTML = v8;
        document.getElementById('b8').innerHTML = "";
    }
    checkwin();
}

function swapboxes9() {
    let v9 = document.getElementById('b9').innerHTML;
    let v6 = document.getElementById('b6').innerHTML;
    let v8 = document.getElementById('b8').innerHTML;
    if (v6 === "") {
        document.getElementById('b6').innerHTML = v9;
        document.getElementById('b9').innerHTML = "";
    } else if (v8 === "") {
        document.getElementById('b8').innerHTML = v9;
        document.getElementById('b9').innerHTML = "";
    }
    checkwin();
}

function checkwin() {
    let v1 = document.getElementById('b1').innerHTML;
    let v2 = document.getElementById('b2').innerHTML;
    let v3 = document.getElementById('b3').innerHTML;
    let v4 = document.getElementById('b4').innerHTML;
    let v5 = document.getElementById('b5').innerHTML;
    let v6 = document.getElementById('b6').innerHTML;
    let v7 = document.getElementById('b7').innerHTML;
    let v8 = document.getElementById('b8').innerHTML;
    let v9 = document.getElementById('b9').innerHTML;

    if (v1 === '1' && v2 === '2' && v3 === '3' && v4 === '4' && v5 === '5' && v6 === '6' && v7 === '7' && v8 === '8' && v9 === '') {
        alert("You won!!");
    }
} 

function resetme(){
    document.getElementById('b1').innerHTML = '1';
    document.getElementById('b2').innerHTML = '';
    document.getElementById('b3').innerHTML = '3';
    document.getElementById('b4').innerHTML = '4';
    document.getElementById('b5').innerHTML = '5';
    document.getElementById('b6').innerHTML = '6';
    document.getElementById('b7').innerHTML = '7';
    document.getElementById('b8').innerHTML = '8';
    document.getElementById('b9').innerHTML = '2';
}







function resetme() {
        let boxArr = document.querySelectorAll('.box1');
        let numBoxes = boxArr.length;
        let usedNumbers = new Set();
        let maxNumber = numBoxes - 2; // One less because one box will be empty
        let emptyBoxIndex = Math.floor(Math.random() * numBoxes);

        for (let i = 0; i < numBoxes; i++) {
            if (i === emptyBoxIndex) {
                boxArr[i].innerText = '';
                continue;
            }

            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * (maxNumber + 1));
            } while (usedNumbers.has(randomNumber));

            usedNumbers.add(randomNumber);
            boxArr[i].innerText = randomNumber;
        }
    }




